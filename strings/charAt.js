// returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

// charAt takes one parameter: index -- between 0 and str.length - 1; cannot be converted to the integer or no index provided, the default is 0, so the first character of str is returned.

// 1. Display charcters are different locations in string

const str = "this is a test string";
str
  .split("")
  .forEach((el, index) =>
    console.log(`The character at index ${index} is '${str.charAt(index)}'`)
  );

// 2. Loose Validation
const email = "thisaddress@domain.com";

console.log(email.charAt(email.length - 4) === "." ? "YES!" : "NO!"); // YES!

// 3. Display character at given location

const index = 5;
const sen1 = "this is a sentence";
const sen2 = "here's another sentence";
[sen1, sen2].forEach((a) => console.log(a.charAt(index)));
