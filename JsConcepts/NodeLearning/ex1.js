#! /usr/bin/env node
"use strict";

// console.log("Hello World");
// console.error("Oops Error!");

import minimist from 'minimist';
// import util from 'util';
// import getStdin from 'get-stdin';
import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';
import zlib from 'zlib';
import { CAF } from 'caf';

/**
 * help will always be a boolean
 * file will always be a string
 */
const args = minimist(process.argv.slice(2), {
    boolean: ["help", "in", "out", "compress", "decompress"],
    string: ["file"]
});

processFile = CAF(processFile);

function streamComplete(stream) {
    return new Promise(function (res) {
        stream.on('end', function() {
            res();
        });
    });
}


const BASE_PATH = path.resolve(process.env.BASE_PATH ?? path.resolve());
let OUTFILE = path.join(BASE_PATH, "out.txt");

if (args.help) {
    printHelp();
} else if (
    args.in ||
    args._.includes("-")
) {
    let tooLong = CAF.timeout(100, "Took too Long");

    processFile(tooLong, process.stdin)
        .then(function () {
            console.log("Complete!");
        })
        .catch(error);
} else if (args.file) {
    const fileStream = fs.createReadStream(path.join(BASE_PATH, args.file));
    let tooLong = CAF.timeout(100, "Took too Long");

    processFile(tooLong, fileStream)
        .then(function () {
            console.log("Complete!");
        })
        .catch(error);
} else {
    // error condition
    error("Invalid Usage.", true);
}

// printHelp();
// process.stdout.write("Hello World\n");


// **************************

function* processFile(signal, readStream) {
    let resultStream = readStream;
    let outStream;

    if (args.decompress) {
        const decompressStream = zlib.createGunzip();
        resultStream = resultStream.pipe(decompressStream);
    }
    
    const upperCaseStream = new Transform({
        transform(chunk, enc, next) {
            this.push(chunk.toString().toUpperCase());
            next();
        }
    });

    resultStream = resultStream.pipe(upperCaseStream);

    if (args.compress) {
        const gzlibStream = zlib.createGzip();
        resultStream = resultStream.pipe(gzlibStream);
        OUTFILE = `${OUTFILE}.gz`;
    }

    if (args.out) {
        outStream = process.stdout;
    } else {
        outStream = fs.createWriteStream(OUTFILE);
    }

    resultStream.pipe(outStream);

    // do something with that signal
    signal.pr.catch(function () {
        resultStream.unpipe(outStream);
        resultStream.destroy();
    });

    yield streamComplete(resultStream);
}

function error(msg, includeHelp = false) {
    console.log(msg);
    if (includeHelp) {
        printHelp();
    }
}

function printHelp() {
    console.log("");
    console.log("ex1.js man page");
    console.log("ex1.js --file={FILENAME} ");
    console.log("");
    console.log("--help                 print for usage help");
    console.log("--file={FILENAME}      process the file");
    console.log("--in, -                read from std input stream");
    console.log("--out                  read from std output stream");
    console.log("--compress             gzip the output file");
    console.log("--decompress           decompress the gzip file");
    console.log("");
}
