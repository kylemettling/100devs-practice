// includes determines whether an array includes a certain value among its entries, returning true or false is appropriate.

// includes takes two parameters: searchElement - value to search for, fromIndex (optional) - position in this array at which to begin searching.

// 1. Search with index

const arr = [5, 4, 2, 2, 3, 1, 6];

console.log(arr.includes(2, 2)); // true

// 2. Search without index

const arr2 = [4, 3, 2];

console.log(arr2.includes(2)); // true
