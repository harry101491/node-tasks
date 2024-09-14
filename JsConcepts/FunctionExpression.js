'use strict';

// function decleration
function teacher() {
  // it will be a red marbel and created in global scope
  /**
   * Inside the scope of teacher
   */
}

// function expression
var myExpression = function anotherClass() {
  anotherClass = 'Harry'; // TypeError assignment to a constant variable; only in use strict
  console.log(anotherClass);
};

console.log(teacher);
console.log(myExpression());
// console.log(anotherClass); // Reference Error

// Why to prefer named function expression than anonymous function expressions
// 1. Relible function self reference (recursion etc).
// 2. make debuggable stack trace
// 3. more self documenting my code as now I know the intent of function rather than reading it.
