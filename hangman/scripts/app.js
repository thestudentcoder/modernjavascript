const renderGame = (puzzle, remainingGuesses) => {
    const puzzleEl = document.querySelector('#puzzle')
    const guessesEl = document.querySelector('#guesses')

    puzzleEl.innerHTML = '';
    guessesEl.textContent = `Guesses left: ${remainingGuesses}`;

    puzzle.split('').forEach((c) => {
        const s = document.createElement('span');
        s.textContent = c;
        puzzleEl.appendChild(s);
    });

}

let game1;

window.addEventListener('keypress', (e) => {
    const guess = e.key;
    game1.makeGuess(guess);
    game1.calculateStatus();
    console.log(game1.puzzle);
    console.log(game1.remainingGuesses);
    console.log(game1.status);
    renderGame(game1.puzzle, game1.remainingGuesses);
});

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5)
    renderGame(game1.puzzle, 5);
}

// reference startGame so the function will be called
document.querySelector('#reset').addEventListener('click', startGame);

startGame();
