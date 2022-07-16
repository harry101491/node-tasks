// two validator funtions that can take advantage of the coercion

// My Answer
// function isValidator(name) {
//   if (typeof name !== 'string') {
//     return false;
//   }

//   if (name.length === 0) {
//     return false;
//   }

//   if (name.trim().length <= 2) {
//     return false;
//   }

//   return true;
// }

// function hoursAttended(attended, length) {
//   if (
//     (typeof attended === 'string' || typeof attended === 'number') &&
//     (typeof length === 'string' || typeof length === 'number')
//   ) {
//     if (attended > 0 && length > 0) {
//       if (attended % 1 === 0 && length % 1 === 0) {
//         if (attended <= length) {
//           return true;
//         }
//       }
//     }
//   }

//   return false;
// }

// right way
function isValidator(name) {
  if (typeof name == 'string' && name.trim().length >= 3) {
    return true;
  }
  return false;
}

function hoursAttended(attended, length) {
  if (typeof attended == 'string' && attended.trim() != '') {
    // converting to a number
    attended = +attended;
  }
  if (typeof length == 'string' && length.trim() != '') {
    length = +length;
  }
  // here they can be undefined or null
  if (
    typeof attended == 'number' &&
    typeof length == 'number' &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }
  return false;
}

console.log(-0 % 1 === 0);
