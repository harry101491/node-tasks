// Pollyfill for the Object.is.
// this will implement a new Object.is that will check whether
// parameters are really equal

// My Way
// if (!Object.is || true) {
//   Object.is = function ObjectIs(param1, param2) {
//     // edge case of NaN
//     if (Number.isNaN(param1) && Number.isNaN(param2)) {
//       return true;
//     }

//     // edge case of infinity
//     if (1 / param1 !== 1 / param2) {
//       return false;
//     }

//     return param1 === param2;
//   };
// }

if (!Object.is || true) {
  function isNegZero(v) {
    return v === 0 && 1 / v === -Infinity;
  }

  function isNan(v) {
    return v !== v;
  }

  Object.is = function ObjectIs(a, b) {
    var aNegZero = isNegZero(a);
    var bNegZero = isNegZero(b);

    // to handle the case where one of them is -0 and
    // === can't handle it.
    if (aNegZero || bNegZero) {
      return aNegZero && bNegZero;
    } else if (isNan(a) && isNan(b)) {
      return true;
    } else {
      return a === b;
    }
  };
}

console.log(Object.is(undefined, undefined));
// console.log(NaN !== NaN);
