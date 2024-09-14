// function hoisting is good but variable hoisting is bad
teacher = 'Kyle';
var teacher;

console.log(otherTeacher()); // Kyle

function otherTeacher() {
  return teacher;
}

var teacher = 'Kyle';
otherTeacher();

function otherTeacher() {
  console.log(teacher); // undefined because function is getting hoisted at the top and teacher is undefined
  var teacher = 'suzy';
}

{
  teacher = 'Kyle'; // Temporal dead zone error TDZ error
  let teacher;
}

var teacher = 'Kyle';

// var hoist and initialize the value with undefined
// but let and const hoist without initializing and then gives TDZ error
{
  console.log(teacher); // tdz error
  const teacher = 'Kyle';
}
