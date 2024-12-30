#!/usr/bin/env node

"use strict";

import util from 'util';
import childProc from 'child_process';


// ************************************

const HTTP_PORT = 8039;
const MAX_CHILDREN = 10;

var delay = util.promisify(setTimeout);


main().catch(console.error);


// ************************************



async function main() {
    // console.log(`Load testing http://localhost:${HTTP_PORT}...`);
    let x = 0;

    while (true) {
        x++;
        process.stdout.write(`Trying ${MAX_CHILDREN} children ...`);

        let childern = [];

        for (let i = 0; i < MAX_CHILDREN; i++) {
            childern.push(childProc.spawn("node", [ "childProcess.js" ]));
        }

        let result = childern.map(function wait(process) {
            return new Promise(function (res) {
                process.on('exit', function (code) {
                    if (code === 0) res(true);
                    res(false);
                });
            })
        });

        if (x > 12) {
            foo();
        }

        result = await Promise.all(result);

        if(result.filter(Boolean).length === MAX_CHILDREN) {
            console.log('Sucess');
        } else {
            console.log('Failure');
        }

        await delay(500);
    }
}


// while (true) {
//     process.stdout.write(`Sending ${MAX_CHILDREN} requests...`);

//     let children = [];

//     for (let i = 0; i < MAX_CHILDREN; i++) {
//         children.push(
//             childProc.spawn("node",["ex7-child.js"])
//         );
//     }

//     let resps = children.map(function wait(child){
//         return new Promise(function c(res){
//             child.on("exit",function onExit(code){
//                 if (code === 0) res(true);
//                 res(false);
//             });
//         });
//     });

//     resps = await Promise.all(resps);

//     if (resps.every(Boolean)) {
//         console.log(" success!");
//     }
//     else {
//         console.log(" failures.");
//     }

//     await delay(500);
// }