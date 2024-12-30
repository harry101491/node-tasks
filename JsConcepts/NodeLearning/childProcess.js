"use strict";

// var fetch = require("node-fetch");
import fetch from 'node-fetch';

// ************************************

const HTTP_PORT = 8039;


main().catch(() => 1);


// ************************************

async function main() {
    try {
        let res = await fetch("http://localhost:8039/get-records");
        if (!res.ok) {
            throw new Error("Something wrong when fetching from server");
        }

        const records = await res.json();
        if (records && records.length > 0) {
            process.exitCode = 0;
            return;
        }
    } catch(err) {
        console.error(err);
        process.exitCode = 1;
    }
}