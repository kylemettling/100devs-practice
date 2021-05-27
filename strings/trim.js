// trim method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.)

// trim takes no parameters.

// 1. trim space right

const str = "this is space     ";
console.log(str.trim());

// 2. trim all space

const str2 = "    my string is in space    ";
console.log(str2.trim());

// 3. keep trimming

const str3 = "    there's still space here     ";
console.log(str3.trim());
