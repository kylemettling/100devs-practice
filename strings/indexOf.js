// indexOf method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

// indexOf takes at least one parameter: 1. searchValue - the string value to search for. If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str. 2. fromIndex (optional) - an integer representing the index at which to start the search. Defaults to 0. For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.

// 1. get indexOf

const str = "This is a string!";
console.log("index of first i is " + str.indexOf("i")); // 2

// 2. indexOf not found

const str2 = "Is this is a str?";
console.log("str 2 contains S?:", str.indexOf("S") ? "yes" : "no");

// 3. returning index not found
const str3 = "This is a string!?";
console.log(str3.indexOf("Y")); // -1
