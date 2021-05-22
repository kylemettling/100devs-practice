// forEach iterates over an array and allows a function to be performed upon each new iteration.

// forEach can take three parameters: element, index, original array.

// 1. Console log each array element

const words = ["this", "is", "an", "array"];

words.forEach((el) => console.log(el));

// 2. Iterate and push to new array

const letters = ["e", "r", "d", "f", "c", "h"];

const newLetters = [];

letters.forEach((el) => newLetters.push(el));

// 3. Counting occurances

const arr = [3, 5, 1, 2, 6, 7];
let count = 0;
arr.forEach((el) => (el >= 3 ? count++ : null));
console.log(count);
