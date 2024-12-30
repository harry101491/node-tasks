#!/usr/bin/env node

"use strict";

import util from 'util';
import path from 'path';
import minimist from 'minimist';
import fs from 'fs';
import sqlite3 from 'sqlite3';


const DB_PATH = path.join(path.resolve(), "my.db");
const DB_SQL_PATH = path.join(path.resolve(), "mydb.sql");

const args = minimist(process.argv.slice(2), {
    string: ["other"]
});

let SQL3;

main().catch(console.error);

async function main() {
    // we will require others
    if (!args.other) {
        error("Missing --other flag in CLI");
        return;
    }

    const myDB = new sqlite3.Database(DB_PATH);
    SQL3 = {
        run(...args) {
            return new Promise(function (res, rej) {
                myDB.run(...args, function onResult(err) {
                    if (err) rej(err);
                    else res(this);
                });
            });
        },
        get: util.promisify(myDB.get.bind(myDB)),
        all: util.promisify(myDB.all.bind(myDB)),
        exec: util.promisify(myDB.exec.bind(myDB)),
    };

    const initSQL = fs.readFileSync(DB_SQL_PATH,"utf-8");
    await SQL3.exec(initSQL);

    const other = args.other;
    const something = Math.trunc(Math.random() * 1E9);

    const otherId = await insertOrLookupOther(other);

    if (otherId) {
        const result = insertSomething(otherId, something);
        if (result) {
            let records = await getAllRecords();
            if (records && records.length > 0) {
                console.table(records);
            }
        };
    } else {
        error("OOps! error");
    }
}


async function getAllRecords() {
    let result = await SQL3.all(
        `
            SELECT
                Other.data as 'other',
                Something.data as 'something'
            FROM
                Something JOIN Other
                ON(Something.otherID = Other.id)
            ORDER BY
                Other.id DESC, Something.data ASC
        `
    );

    if (result && result.length > 0) {
        return result;
    }
}

async function insertSomething(otherId, something) {
    const result = await SQL3.run(
        `
            INSERT INTO
                Something(otherID, data)
            Values
                (?, ?)
        
        `,
        otherId,
        something
    );

    if (result && result.changes > 0) {
        return true;
    }
    return false;
}

async function insertOrLookupOther(other) {
    let result = await SQL3.get(
        `
            SELECT
                id
            FROM
                Other
            WHERE
                data = ?

        `,
        other
    );

    if (result && result.id) {
        return result.id;
    } else {
        result = await SQL3.run(
            `
                INSERT INTO
                    Other(data)
                VALUES
                    (?)
            `,
            other
        );

        if (result && result.lastID) {
            return result.lastID;
        }
    }
}

function error(err) {
	if (err) {
		console.error(err.toString());
		console.log("");
	}
}
