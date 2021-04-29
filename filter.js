// Filter returns a new array with all elements that pass the test implemented by the provided function.

// Filter can take in three parameters: element, index, original array.

// 1. Return a list of filtered results

const arr = [2, 4, 1, 5, 6, 3];

const filteredEvens = arr.filter((el) => el % 2 === 0);

// 2. Filtered list of minimums

const arr2 = [3, 5, 70, 40, 22, 15];

const underThirty = arr2.filter((el) => el < 30);

// 3. Filtered list between two limits

const arr3 = [45, 32, 20, 59, 80];

const between = arr3.filter((el) => el > 30 && el < 60);
