// unshift adds one or more elements to the start of an array. this method returns the new length of the array.

// unshift takes in one parameter: elementN (the elements to add to the front of the arr)

// 1. Add multiple elements

const arr = [3, 4, 5, 6, 6];
arr.unshift(4, 6, 7);

// 2. Adding nested objects

const arr2 = [4, 5, 6, 7];
arr2.unshift([4, 5], [6, 8]);
