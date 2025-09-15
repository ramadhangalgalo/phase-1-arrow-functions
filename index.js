const divide = function(a, b) {
  return a / b;
};

const square = function(x) {
  return x * x;
};

const add = (a, b) => a + b;

const twoAdder = x => x + 2;

const sumAndLog = (a, b) => {
  console.log(`Adding ${a}`);
  console.log(`Adding ${b}`);
  return a + b;
};

const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);