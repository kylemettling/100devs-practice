// reduce executes a reducer function (developer provided) on each element of the array, resulting in a single output value.

// The reducer function takes four arguments: accumulator, current value, index, source array.

// The reducer function also can take an initialValue. If no initial value, the first element in the array will be used as the initial accumulator and skipped as the current value.

// 1. Return the sum of an array

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, curr) => (acc += curr), 0);

// 2. Return result with defined initial value.

const arr2 = [400, 300, 20, 40, 70];

const total = 3000;

const result2 = arr2.reduce((acc, curr) => (acc -= curr), total);

// 3. Counting instances of values in an object

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, curr) => {
  if (curr in allNames) {
    allNames[curr]++;
  } else {
    allNames[curr] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
