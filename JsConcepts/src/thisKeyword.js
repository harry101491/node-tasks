// const myFunc = () => {
//     console.log(this);
// }

// const obj = {
//     myFunc,
// }

// obj.myFunc();


// class User {
//     getThis() {
//         return this;
//     }
// }

// let user1 = new User();
// let user2 = new User();

// console.log(user1.getThis());
// // console.log(user2.getThis());

// function greet(text = "Welcome") {
//     console.log(`${text}, ${this.username}`);
// }

// call
// greet.call({ username: "John Doe" });

// bind
// greet.bind({ username: "John Doe" })();

// apply
// greet.apply({ username: "John Doe" }, [
//     "Hi There"
// ]);

// const objA = {
//     foo() {
//         console.log(this);
//     },
//     bar: () => console.log(this),
// };

// const objB = {
//     foo: objA.foo,
//     bar: () => objA.bar(),
//     baz() {
//         objA.foo();
//     }
// }

// for (let key in objB) {
//     objB[key]();
// }

function logThis() {
    console.log(this);
}

// const obj1 = {
//     foo: logThis,
//     bar: () => logThis(),
//     baz() {
//         logThis();
//     },
//     qux() {
//         logThis.call(this);
//     }
// }

// const obj2 = { ...obj1, foo2: () => obj1.foo() };

// for (let key in obj2) {
//     obj2[key]();
// }

// obj2, window, window, obj2, obj1

// const obj1 = {
//     logThis,
//     logThisInArrow: () => console.log(this),
//     logThisNested() {
//         const nestedFunc = () => console.log(this);
//         nestedFunc();
//     }
// }

// obj1.logThis();
// obj1.logThisInArrow();
// obj1.logThisNested();

// console.log(globalThis);

class myClass {
    constructor(color = "green") {
        this.color = color;
    }

    static changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
}

const freddie = new myClass("yellow");
freddie.changeColor("blue");