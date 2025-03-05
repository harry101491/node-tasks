// findAll function that should take array and a value
// solution

function findAll(matchValue, arr) {
  var res = [];

  for (let target of arr) {
    if (Object.is(target, matchValue)) {
      // first case when they are exectally equal
      res.push(target);
    } else if (matchValue == null && target == null) {
      // case when we need to check undefined and null coearsivly
      res.push(target);
    } else if (typeof matchValue == 'boolean' && typeof target == 'boolean') {
      if (matchValue == target) res.push(target);
    } else if (
      typeof matchValue == 'string' &&
      matchValue.trim() != '' &&
      typeof target == 'number' &&
      !Object.is(target, -0)
    ) {
      // if matchValue is number, it should not be a "" or "   " and
      // target should be number but it cannot be -0 as coersion would be 0 only
      if (matchValue == target) res.push(target);
    } else if (
      typeof matchValue == 'number' &&
      !Object.is(matchValue, -0) &&
      !Object.is(matchValue, NaN) &&
      !Object.is(matchValue, Infinity) &&
      !Object.is(matchValue, -Infinity) &&
      typeof target == 'string' &&
      target.trim() != ''
    ) {
      // if matchValue is number, it should not be a -0 because string would be "0"
      // cannot be NaN, +/- Infinity and target should be a string and should not
      // be a "" or "   "
      if (matchValue == target) res.push(target);
    }
  }
  return res;
}
