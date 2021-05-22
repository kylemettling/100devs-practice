// sort sorts elements of an array "in place" and returns the sorted array.

// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code untils values.

// sort takes in three parameters: compareFunction, firstEl, secondEl.

// The compare function defines the sort order. If omitted, the array elements are converted to strings, then sorted to each character's Unicode code point value.

// 1. Sort alphabetically

const words = ["this", "is", "a", "sample", "word", "array"];

const sortedWords = words.sort();

// console.log(sortedWords);

// 2. Sort incrementally

const nums = [3, 65, 30, 300, 499, 2921, 34, 1];

const sortedNums = nums.sort((first, second) => first - second);

// 3. Sort values
