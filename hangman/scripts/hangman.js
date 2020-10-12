class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.lettersGuessed = [];
        this.status = 'playing';
    }
    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.lettersGuessed.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });

        return puzzle;
    }
    makeGuess(guess) {
        this.calculateStatus();
        if (this.status === 'finished') {
            console.log(`great work the word was "${this.word.join('')}"`);
            return;
        } else if (this.status === 'failed') {
            console.log(`nice try -> the word was "${this.word.join('')}"`);
            return;
        } else {
            console.log(`you have ${this.remainingGuesses}`)
        }

        guess = guess.toLowerCase();

        const isUnique = !this.lettersGuessed.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (isUnique) {
            this.lettersGuessed.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
    }
    calculateStatus() {
        let completed = true;

        this.word.forEach((letter) => {
            if (this.lettersGuessed.includes(letter)) {
                completed = true;
            } else {
                completed = false;
            }
        })

        // alternatively
        const finished = this.word.every((letter) => this.lettersGuessed.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (completed) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
}