// nobody is going to check value against its negation
// 1. convert [] to a boolean value !true is false. [] == false
// 2. convert ToPrimitive of lhs [] to "" == false
// 3. convert "" ToNumber of lhs to 0 == false
// 4. conver false to ToNumber of rhs to 0 === 0
console.log([] == ![]); // true WHAT !!!!

// the better way of writing it
// both !== and != are same
console.log([] !== [] && [] != []);

var array = [];

// Boolean([]) // true
if (array) {
  console.log('direct coersion');
}

// [] == true
// "" == true
// 0 == true
// 0 === 1 // false
if (array == true) {
  console.log('when == true');
}

// [] == false
// "" == false
// 0 == false
// 0 === 0 // true
if (array == false) {
  console.log('when == false');
}

// *** Avoid these cases when using ==
// 1. never use them when either of the value is 0 or "" or ("   " string with withspaces).
// 2. never use them with non-primitive
// 3. never use with == true or == false. allow ToBoolean() or use ===.
