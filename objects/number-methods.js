// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

let num = 103.941;

// specify the number of decimals to eep
const toFixed = num.toFixed(2);
console.log(toFixed);

// Math global object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const round = Math.round(num);
console.log(round);

// round down to nearest integer
Math.floor(num);

// always round up
Math.ceil(num);

// Random
// random number between 0 and 1
let min = 10;
let max = 20;

// 0 - 9.999999999
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}