let randomNumber;
let attempts = 0;

// Initialize the game with a new random number
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    document.getElementById('userGuess').value = '';
}

// Check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedbackElement = document.getElementById('feedback');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = "Please enter a valid number between 1 and 100. 🤔";
        feedbackElement.style.color = "#d9534f";
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        feedbackElement.textContent = "🎉 Congratulations! You guessed the correct number! 🎉";
        feedbackElement.className = "correct";
        feedbackElement.innerHTML += " 🎉";
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "Too low! ⬇️ Try again.";
        feedbackElement.className = "too-low";
    } else {
        feedbackElement.textContent = "Too high! ⬆️ Try again.";
        feedbackElement.className = "too-high";
    }
}

// Restart the game
function restartGame() {
    startGame();
}

// Start the game when the page loads
window.onload = startGame;
