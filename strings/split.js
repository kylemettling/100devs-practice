// split method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

// The division is done by searching for a pattern, where the pattern is provided as the first parameter in the method's call.

// split takes upto two parameters: separator(optional) - the pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression. limit(optional) - a non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array.

// 1. split by each character

const str = "this is my string";
console.log(str.split(""));

// 2. split on space.

const str2 = "this is my other string";
console.log(str2.split(" "));

// 3. split on lowercase

const str3 = "THIS IS MY new SENTENCE";
console.log(str3.split(/[a-z]/g));
