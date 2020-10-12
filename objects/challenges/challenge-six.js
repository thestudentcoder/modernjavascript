// Take in a guess and generate a number in a given range and output if the guess is correct
const makeGuess = function (guess) {
    const min = 0;
    const max = 5;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) - min;
    return randomNum === guess;
}

console.log(makeGuess(1));
console.log(makeGuess(3));
console.log(makeGuess(2));