// repeat method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// repeat takes one parameter: count - an integer between 0 and infinity, indicating the number of times to repeat the string.

// 1. repeat x times

const str = "hello";
console.log(str.repeat(5));

// 2. repeat for length of string times

const str2 = "how many characters";

console.log(str2.repeat(str2.length), `${str2.length} times`);

// 3. repeat if length over x

const str3 = "is this over character threshold?";
console.log(str3.repeat(str.length >= 15 ? str.length : 1));
