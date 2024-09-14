const add = (x, y) => x + y;

const curry = (f) => (x) => (y) => f(x, y);

const toPair =
  (f) =>
  ([x, y]) =>
    f(x, y);

// Good application of curry
const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);

console.log(isOdd(3));
