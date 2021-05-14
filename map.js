// map returns a new array. A new array that can be manipulated while being iterated over.

// The map function can make use of up to three parameters; element,index,and the original array itself.

// map time complexity: O(log(n))

// 1. Return doubles
const arr = [2, 3, 5, 7, 8];

const doubleArr = arr.map((el) => el * 2);

// [4, 6, 10, 14, 16]

// 2. Reformat objects
const arr2 = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformatted = arr2.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// reformatted = [{1: 10}, {2: 20}, {3: 30}]

// 3. Creating new array based on previous array

const arr3 = [{ name: "bob" }, { name: "bobby" }, { name: "robert" }];

const bobs = arr3.map((el) =>
  el.name === "bob" ? "We found a bob" : "Not a bob"
);

// [ 'We found a bob', 'Not a bob', 'Not a bob' ]
