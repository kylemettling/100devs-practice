// slice returns a shallow copy of a portion of an array into a new array object selected from start to end
// where start and end represent the index in that array. The original array will not be modified.

// slice takes two parameters: start and end

// Returns the new array containing the extracted elements.

// 1. Take section of array

const arr = [3, 6, 89, 2, 10];

const justTheFirsttTwo = arr.slice(0, 2);

// 2. Slice from the last element

const arr2 = [4, 76, 9, 546, 23];

const justTheLastTwo = arr2.slice(-2);

// 3. Copy whole array

const arr3 = [3, 5, 2, 6, 8, 56, 20];

const copiedArr = arr3.slice();
