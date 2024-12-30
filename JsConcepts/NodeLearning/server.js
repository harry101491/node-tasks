#!/usr/bin/env node

"use strict";

import util from 'util';
import path from 'path';
import http from 'http';

import sqlite3 from 'sqlite3';
// import staticAlias from 'node-static-alias';
import express from 'express';


// ************************************

const app = express();

const DB_PATH = path.join(path.resolve(),"my.db");
const WEB_PATH = path.join(path.resolve(),"web");
const HTTP_PORT = 8039;


app.use(function associate(req, res, next) {
    if (/^\/(?:index\/?)?(?:[?#].*$)?$/.test(req.url)) {
        req.url = "/index.html";
    } else if (/^\/js\/.+$/.test(req.url)) {
        next();
        return;
    } else if (/^\/(?:[\w\d]+)(?:[\/?#].*$)?$/.test(req.url)) {
        let [,basename] = req.url.match(/^\/([\w\d]+)(?:[\/?#].*$)?$/);
        req.url = `${basename}.html`;
    }

    next();
});

app.use(express.static(WEB_PATH, {
    maxAge: 100,
    setHeaders: function setHeaders(res) {
        res.setHeader("Server", "Using Express in Server");
    }
}));

var delay = util.promisify(setTimeout);

// define some SQLite3 database helpers
//   (comment out if sqlite3 not working for you)
var myDB = new sqlite3.Database(DB_PATH);
var SQL3 = {
	run(...args) {
		return new Promise(function c(resolve,reject){
			myDB.run(...args,function onResult(err){
				if (err) reject(err);
				else resolve(this);
			});
		});
	},
	get: util.promisify(myDB.get.bind(myDB)),
	all: util.promisify(myDB.all.bind(myDB)),
	exec: util.promisify(myDB.exec.bind(myDB)),
};

// var fileServer = new staticAlias.Server(WEB_PATH,{
// 	cache: 100,
// 	serverInfo: "Node Workshop: ex5",
// 	alias: [
//         // handle the index.htm case, so it will match with /, /index, /index/#/<anything>
//         {
// 			match: /^\/(?:index\/?)?(?:[?#].*$)?$/,
// 			serve: "index.html",
//             // force true will match this with index.htm or send a 404
// 			force: true,
// 		},
//         // handle the case where all the js requests will find the absolute path to that js file.
//         {
// 			match: /^\/js\/.+$/,
// 			serve: "<% absPath %>",
// 			force: true,
// 		},
//         // handle the case where any request except /index will be served with similar htm file
//         {
// 			match: /^\/(?:[\w\d]+)(?:[\/?#].*$)?$/,
// 			serve: function onMatch(params) {
// 				return `${params.basename}.html`;
// 			},
// 		},
//         // because force: true, was not there in the last pattern, so any other non matching request will send 404
//         {
// 			match: /[^]/,
// 			serve: "404.html",
// 		},
// 	],
// });

var httpserv = http.createServer(app);

main();


// ************************************

function main() {
    routing();
    httpserv.listen(HTTP_PORT, function() {
        console.log(`Listening on http://localhost:${HTTP_PORT}...`);
    });
}

function routing() {
    app.get('/get-records', async function (req, res) {
        await delay(1000);
        let records = await getAllRecords();

        if (records && records.length > 0) {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.write(JSON.stringify(records));
            res.end();
        } else {
            res.end();
        }
    });
}

// async function handleRequest(req, res) {
//     // when the url match with get-records then send data from the database otherwise send our static files.
//     if (req.url === '/get-records') {
//         await delay(1000);

//         let records = await getAllRecords();

//         res.writeHead(200, {
//             "Content-Type": "application/json",
//         });
//         res.write(JSON.stringify(records));
//         res.end();
//     } else {
//         fileServer.serve(req, res);
//     }
// }

// *************************
// NOTE: if sqlite3 is not working for you,
//   comment this version out
// *************************
async function getAllRecords() {
	var result = await SQL3.all(
		`
		SELECT
			Something.data AS "something",
			Other.data AS "other"
		FROM
			Something
			JOIN Other ON (Something.otherID = Other.id)
		ORDER BY
			Other.id DESC, Something.data
		`
	);

	return result;
}

// *************************
// NOTE: uncomment and use this version if
//   sqlite3 is not working for you
// *************************
// async function getAllRecords() {
// 	// fake DB results returned
// 	return [
// 		{ something: 53988400, other: "hello" },
// 		{ something: 342383991, other: "hello" },
// 		{ something: 7367746, other: "world" },
// 	];
// }
