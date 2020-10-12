// String methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = 'John Shepard';

// Length property (no parenthesis because it's not a method)
const length = name.length;
console.log(length);

// Convert to upper case (this is a method not a property)
const toUpperCase = name.toUpperCase();
console.log((toUpperCase));

// Convert to lower case
const toLowerCase = name.toLowerCase();
console.log(toLowerCase);

// Includes searches for a string within a string
let password = 'abc123';
const includes = password.includes('password');
const includes2 = password.includes('abc');

console.log(includes);
console.log(includes2);

// Trim
let s = 'this is a string      ';
console.log(s.length);
const trim = s.trim();
console.log(trim.length);