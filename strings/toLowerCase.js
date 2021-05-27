// toLowerCase returns the calling string value converted to lowercase.

// toLowerCase takes no parameters.

// 1. toLowerCase string.

const str = "THIS IS MY SENTENCE";
console.log(str.toLowerCase());

// 2. filter by lowercase
const newStr = "is this ALL lower?";
console.log(newStr.split(" ").filter((word) => word.toLowerCase() === word));

// 3. all to lower
const str3 = "ALPHABET";
console.log(str3.toLowerCase());
