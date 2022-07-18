'use strict';

var teacher = 'Harry';

function myClass() {
  teacher = 'Nobody';
  topic = 'React';
  console.log('Welcome!!');
}

myClass();

console.log(teacher); // Nobody
// I can access topic without declearing it.
// a new var is created on global scope.
console.log(topic); // React
