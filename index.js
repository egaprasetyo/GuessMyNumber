'use strict';

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  check();
});

document.querySelector('.again').addEventListener('click', () => {
  again();
});

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = (number) => {
  document.querySelector('.number').textContent = number;
};

const displayScore = (score) => {
  document.querySelector('.score').textContent = score;
};

const changeBackground = (color) => {
  document.querySelector('body').style.backgroundColor = color;
};

const changeSecretNumberWidth = (size) => {
  document.querySelector('.number').style.width = size;
};

const randomNumber = () => {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};

let secretNumber = randomNumber();
// document.querySelector('.number').textContent = secretNumber;

const check = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (secretNumber === guess) {
    displayMessage('🎉 Correct Number!');
    displaySecretNumber(secretNumber);
    changeBackground('#55AA3E');
    changeSecretNumberWidth('200px');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😥 You Lose The Game');
      displayScore(0);
    }
  }
};

const again = () => {
  secretNumber = randomNumber();
  score = 20;
  displaySecretNumber(secretNumber);
  displayMessage('🔎 Start Guessing...');
  displayScore(score);
  displaySecretNumber('?');
  changeBackground('#0F111A');
  changeSecretNumberWidth('100px');
  document.querySelector('.guess').value = '';
};
