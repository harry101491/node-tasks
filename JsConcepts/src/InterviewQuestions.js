async function asyncFunction() {
    console.log(1);
    new Promise(() => console.log(2));

    await new Promise((res) => {
        setTimeout(() => console.log(3), 0);
        res();
    });
}

new Promise((res) => {
    console.log(4);
    (async () => {
        console.log(5);
        await asyncFunction();
        console.log(6);
    })();
    res();
}).then(() => console.log(7));

console.log(8);

// 4, 5, 1, 2, 8, 7, 6, 3

(async () => {
    const asyncFunc = () => "asyncFunc";

    const promise = new Promise((_) => {
        console.log("promise");
    }).then(() => console.log("then"));

    console.log("async body");

    queueMicrotask(() => console.log("queueMicrotask"));

    const results = Promise.all([
        asyncFunc(),
        promise
    ]);

    return results;
})();

console.log("script");

// "promise", "async body", "script", "queueMicrotask"

const outerFunc = () => {
    let count = 0;

    return () => ++count;
}

const counter = outerFunc();
console.log(counter());
console.log(counter());

// 1, 2


function createCounter() {
    let globalCount = 0;

    function incrementCount() {
        let incrementedValue = ++globalCount;
        return incrementedValue;
    }
    
    return {
        incrementCount,
    };
}

const counter1 = createCounter();
console.log(counter1.incrementCount());
console.log(counter1.incrementCount());
console.log(createCounter().incrementCount());

// 1, 2, 1

function createUserManager() {
    let user = null;

    return function(name) {
        "use strict";

        user = { name, createdAt: Date.now() };
        return user;
    }
}

const user = createUserManager();

console.log(user("John Doe") === user("John Doe"));

// false

function createCounter(initialCount) {
    let count = initialCount;

    return function() {
        "use strict";
        count += 1;
        return count;
    }
}

const counter3 = createCounter(10);
counter3();
counter3();
console.log(counter3());

// 13