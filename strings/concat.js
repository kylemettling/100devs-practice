// concat concatenates the string arguments to the calling string and returns a new string.

// concat takes one or more parameters: strN - one or more strings to concatenate to str.

// if arguments are not of the type string, they will be converted to string values before concatenating.

// 1. join two arguments.

let hello = "hello, ";

let name = "jeff";
console.log(hello.concat(name));

// 2. join multiple arguments

let arr = [" one", "two", "three"];
console.log(hello.concat(name, arr));

// 3. join on empty string.

console.log("".concat("one", "two", "three"));
