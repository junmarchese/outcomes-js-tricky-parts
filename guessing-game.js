function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let isGameOver = false;
    let guessCount = 0;

    return function (guess) {
        if (isGameOver) return "The game is over, you already won!";
        
        guessCount++;

        if (guess < secretNumber) return `${guess} is too low!`;
        if (guess > secretNumber) return `${guess} is too high!`;

        isGameOver = true;
        return `You win! You found ${guess} in ${guessCount} guesses.`;
    };
}

module.exports = { guessingGame };
