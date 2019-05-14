var gameChoices = ["arya", "sansa", "daenerys", "missandei", "cersei", "hodor", "gendry", "tormund"];
var word = [];
var lettersGuessed = [];
var wins = 0;
var guesses = 4;
currentWord = gameChoices[Math.floor(Math.random() * gameChoices.length)];
console.log(currentWord);

// Changes images to character if correct word is guessed
function imageWord() {
    if (currentWord == "arya") {
        document.getElementById("image").src = "assets/images/arya.jpg";
    } else if (currentWord == "sansa") {
        document.getElementById("image").src = "assets/images/sansa.jpg";
    } else if (currentWord == "daenerys") {
        document.getElementById("image").src = "assets/images/daenerys.jpg";
    } else if (currentWord == "missandei") {
        document.getElementById("image").src = "assets/images/missandei.jpg";
    } else if (currentWord == "cersei") {
        document.getElementById("image").src = "assets/images/cersei.jpg";
    } else if (currentWord == "hodor") {
        document.getElementById("image").src = "assets/images/hodor.jpg";
    } else if (currentWord == "gendry") {
        document.getElementById("image").src = "assets/images/gendry.png";
    } else if (currentWord == "tormund") {
        document.getElementById("image").src = "assets/images/tormund.jpg";
    }
}

// Creates hidden word
function wordGuess() {

    for (var i = 0; i < currentWord.length; i++) {

        word[i] = "_";
        document.getElementById("answer").textContent = word.join(" ");

    }

}

function restartGame() {

    guesses = 4;
    lettersGuessed = [];
    document.getElementById("letters-guessed").textContent = lettersGuessed;
    currentWord = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(currentWord);
    word = [];
    wordGuess();

}

wordGuess();

document.onkeyup = function (event) {

    // Check user inputs letter
    function isLetter(char) {
            console.log(char);
            return /^[a-zA-Z]$/i.test(char);
    }
    console.log(isLetter(event.key));

    document.getElementById("guesses").textContent = "Guesses: " + guesses;

    if (isLetter(event.key)) {

        // Places the guessed letter in correct index of the hidden word
        if (currentWord.includes(event.key)) {

            for (var i = 0; i < currentWord.length; i++) {

                if (currentWord[i] === event.key) {

                    word[i] = event.key;

                    document.getElementById("answer").textContent = word.join(" ");

                }

            }

        } else {

            // Places incorrect letter guesses in an array and decrements number of guesses
            if (lettersGuessed.indexOf(event.key) === -1) {

                lettersGuessed.push(event.key);
                document.getElementById("letters-guessed").textContent = lettersGuessed.join(", ");

                guesses--;
                document.getElementById("guesses").textContent = "Guesses: " + guesses;
            }

            // Restarts the game once all guesses have been used
            if (guesses === 0) {

                document.getElementById("guesses").textContent = "No more guesses";
                restartGame();

            }

        }
    }

    var wordGuessed = word.join(""); // Formats to compare the word

    // Increments wins and restarts the game if word guessed matches the hidden word
    if (wordGuessed == currentWord) {

        imageWord();
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        restartGame();

    }

};
