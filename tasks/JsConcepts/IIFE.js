// IIFE - Immediatly Invoked Function Expression
var teacher = 'Harry';

// Instead of poluting the enclosing scope I can use
// expressions called IIFE
(function () {
  var teacher = 'Suzy';
  console.log(teacher);
})();

// Block Scope for creating a different scope
// to prevent different scope
{
  let teacher = 'Henry'; // not a scope untill we have the let or const decleration
  console.log(teacher);
}

console.log(teacher); // Harry

var teacher = (function getTeacher() {
  try {
    return 'Kyle';
  } catch {
    return 'Harry';
  }
})();

function repeat(fn, n) {
  // the intent of result is to be used everywhere in the function
  var result; // it should be var rather then a let

  // let is used for the block scope or local scope rather than whole scope
  for (let i = 0; i < 7; i++) {
    console.log(i);
    result = i;
  }

  return result;
}
