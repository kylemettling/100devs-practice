// every tests whether all the elements in the array pass the test implemented by the provided function.

// every takes four parameters: callbackFn [element, index*, array*], thisAg* - a value to use as this when executing callbackFn. *optional

// every returns a boolean.

// 1. If below threshold.

const isBelowFifty = (val) => val < 50;

const arr = [3, 2, 55, 9, 300];

console.log(arr.every(isBelowFifty)); // false

// 2. Declared function case inside

const arr2 = [3, 4, 122, 30, 2];

console.log(arr2.every((a) => a > 0)); // true
