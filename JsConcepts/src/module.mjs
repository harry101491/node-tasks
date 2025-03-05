
// console.log(sum, myFunction);

// import { sum } from './sum.mjs';

// var varValue = "varValue";
// const constValue = "constValue";
// let letValue = "letValue";

// function myFunction() {}


// const input = prompt("What fruit do ypu like");
// const css = "color: #FFF";

// switch(input) {
//     case "orange":
//         const css = "color: #FFA500";
//         console.log("%cOrange!", css);
//         break;
//     case "lemon":
//         const css = "color: #FFFF00";
//         console.log("%cYellow!", css);
//         break;
//     default:
//         console.log("No color for you");
//         break;
// }

function myFunc() {
    console.log(this);
}

const obj = {
    myFunc,
}

obj.myFunc();
