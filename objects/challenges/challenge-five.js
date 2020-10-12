// String methods - password checker
// Create a function isValidPassword that takes a string returns a boolean
// return true when length is more than 8 and doesn't contain password
const isValid = function (s) {
    return s.length > 8 && !s.toLowerCase().includes('password');
}

console.log(isValid('abc123password'));
console.log(isValid('abc123xyz'));