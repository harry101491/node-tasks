
/**
 * Understanding the Generator funtion
 */
// function* generatorFunctions() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }

// const iterator = generatorFunctions();

// // iterator acts as an array
// console.log([ ...iterator ]);

// for (let value of iterator) {
//     console.log(value);
// }

// function* count() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// for (const val of count()) {
//     console.log(val);
// }

// 1, 2

// const range = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {
//        for (let i = this.from; i <= this.to; i++) {
//         yield i;
//        }
//     }
// };

// console.log([ ...range ]);
// [ 1, 2, 3, 4, 5 ]


// cool example for having the delayed execution of promise calls
// async function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield new Promise((res) => {
//             setTimeout(() => {
//                 res(i);
//             }, i*1000);
//         });
//     }
// }

// (async () => {
//     const gen = range(1, 3);
//     for await (const item of gen) {
//         console.log(item);
//     }
// })();

// function* gen1() {
//     yield 2;
//     yield 3;
// }

// function* gen2() {
//     yield 1;
//     yield* gen1();
//     yield 4;
// }

// console.log([ ...gen2() ]);

// const obj = {
//     bar() {
//         console.log(this);
//     }
// }

// setTimeout(() => obj.bar(), 0);

// queueMicrotask(() => {
//     delete obj.bar;
// });

// const a = isNaN("5.2" + 2);
// const b = isNaN(parseInt(a));
// const c = isNaN(parseFloat(a));
// const d = isNaN("1 * 2" * 2);

// console.log(a, b, c, d);

// console.log(255..toString(16));
// console.log(255["toString"](2));
// // console.log(255.toString(10));
// console.log(255["toString"](10));
// console.log(typeof 255.)

// const myMap = new Map();
// const myFun = () => "greeting";

// myMap.set(myFun, "Hello World!");

// console.log(myMap.get("greeting"));

// const obj = {
//     a: "a",
//     b: "b"
// };

// Object.entries(obj).forEach(([ key, value ]) => {
//     console.log(key, value);
// });

// const listOfKeyValues = [
//     ["a", "a"],
//     ["b", "b"]
// ]

// Object.keys(Object.fromEntries(listOfKeyValues)).forEach((key) => {
//     console.log(key);
// });

// const array = [1, 2, 3, 4, 5];
// array.splice(2); // change is in-place
// array.concat(6); // change is not in-place
// array.slice(0, 1); // change is not in-place
// delete array[0]; // creates an empty slot here

// console.log(array.length);

// const config = {
//     languages: [],
//     set language(lang) {
//         return this.languages.push(lang);
//     }
// }

// config.language = "Dutch"; // so this will set the language property but there is no way to get it.
// console.log(config.language); // no getter function that is why it is undefined

// const config = {
//     languages: [],
//     set language(lang) {
//         this.languages.push(lang);
//     },
//     get language() {
//         return this.languages;
//     }
// }

// config.language = "Dutch";
// console.log(config.language);

// const team = {
//     members: [
//         { info: { street: undefined, city: "Boston" } },
//         { info: { street: "", city: "Boston" } },
//         { info: { street: null, city: "Boston" } },
//         null
//     ],
// };

// const getInfo = (mem) => {
//     return (mem?.info?.street ?? mem?.info.city) || "Unknown";
// }

// const result = team.members.map(getInfo);
// console.log(result);

// new Array(-1); // Range Error
// 25.toString(); // Syntax Error
// [].reduce((acc, curr) => acc + curr); // TypeError: Reduce of empty array with no initial value
// const { a: b = c } = { a: undefined, c: 12 }; // Reference Error: c is not defined
// const a = { b: 1 };
// console.log((a ?? 1) || b);

// console.log(new Date().toDateString());
// console.log(new Date().toISOString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toUTCString());
// console.log(new Date().toString());

// Sat Nov 09 2024
// 2024-11-10T02:00:07.661Z
// 11/9/2024
// Sun, 10 Nov 2024 02:00:07 GMT
// Sat Nov 09 2024 18:00:07 GMT-0800 (Pacific Standard Time)

// const { a='default', b='default', c='default', d='default' } = { a: null, b: undefined, c: false, d: 0 };

// console.log(a, b, c, d);

// Symbol.for('key') // checks of the symbol with the key "key" already exists in the global symbol registry. If it is present then it will send that otherwise creates a new one.
// Symbol('key'); // always creates a new one

function thankYouTag(strings, greeting) {
    console.log(strings, greeting);
}

const greeting = "Thank you for coming to my workshop!";
thankYouTag`This is the last question! ${greeting}`;