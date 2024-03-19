/*
generate random number
on press
  match with the guessIP 
    =: Congrats
    !=: guess again and reduce guess remaining
      low or high
    
    prev guesses
*/
let attemptsRem;
let randomNum;
const button = document.getElementById('subt');
const lowOrHi = document.querySelector('.lowOrHi');
const lastGuess = document.querySelector('.guesses');
const userguessIP = document.querySelector('#guessField');
const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.getElementsByClassName('lowOrHi');
// const lastGuess = document.getElementsByClassName('guesses');
// create a div results

function numGen() {
  randomNum = Math.round(Math.random() * 100);
  attemptsRem = 10;
  lastResult.innerHTML = attemptsRem;
  lastGuess.innerHTML = '';
  console.log(randomNum);
}
numGen();

button.addEventListener('click', function (e) {
  e.preventDefault();
  const guessIP = parseInt(userguessIP.value);
  if (
    !isNaN(guessIP) &&
    guessIP > 0 &&
    guessIP <= 100 &&
    attemptsRem != 0 &&
    attemptsRem <= 10
  ) {
    console.log(guessIP);
    attemptsRem = attemptsRem - 1;
    lastResult.innerHTML = attemptsRem;
    if (guessIP > randomNum) {
      lowOrHi.innerHTML = '<h2>Guess Lower</h2>';
    } else if (guessIP < randomNum) {
      lowOrHi.innerHTML = '<h2>Guess Higher</h2>';
    }
    // lastGuess.appendChild(document.createTextNode(`${guessIP}, `));
    lastGuess.innerHTML += `${guessIP}, `;
    if (guessIP === randomNum) {
      lowOrHi.innerHTML = '<h2>Congrats on right guess!</h2>';
      numGen();
    }
  } else {
    lowOrHi.innerHTML =
      '<h2>Please enter a valid number between 1 and 100</h2>';
    // add a check that number is valid and constant remiender that number is less than or greater than 0 on guessIP
  }
  if (attemptsRem == 0) {
    lowOrHi.innerHTML = '<h2>You lose!\n Number Reset.</h2>';
    numGen();
  }
  userguessIP.value = '';
});
