const guessInput = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const resultDiv = document.querySelector('#result');

// variables
const targetNumber = Math.floor(Math.random() * 100) +1;

let numberOfGuesses = 0;



//This is the button function
submitBtn.addEventListener('click', function() {

// code
    numberOfGuesses++;
    //console.log(numberOfGuesses);
    const guess = parseInt(guessInput.value, 10);
    if (guess === targetNumber){
        resultDiv.textContent = 'You win! it took you ' + numberOfGuesses + 'guesses.';
        submitBtn.disabled = true;
    } else if (guess < targetNumber) {
        resultDiv.textContent = 'Too low. Try again.';
    } else {
        resultDiv.textContent = 'Too high. Try again.';
    }
});