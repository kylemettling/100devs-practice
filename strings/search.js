// search method executes a search for a match between a regular expression and this String object

// search takes one parameter: regexp - a regular expression object.

// 1. search for lowercase letters

const str = "TEST strs are awesome";

const re = /[a-z]/g;

console.log(str.search(re));

// 2. search for uppercase letters

const str2 = "test strs aRe awesome";

const re2 = /[A-Z]/g;

console.log(str2.search(re2));

// 3. search for string
const str3 = "does this contain it?";

const re3 = "it";

console.log(str3.search(re3));
