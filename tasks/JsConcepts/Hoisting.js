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
