'use strict';
const msg = document.querySelector('.message');
const nbr = document.querySelector('.number');
const score = document.querySelector('.score');
let score_left = 20;
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const body = document.querySelector('body');
let sucret_number = Math.floor(Math.random() * 20) + 1;
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

check.addEventListener('click', () => {
  let guess_value = Number(guess.value);
  //   when the score reach 0 it stop working
  if (!score_left) {
    return (msg.textContent = 'loser');
  }

  if (!guess_value) {
    msg.textContent = 'insert a number';
  } else if (guess_value === sucret_number) {
    msg.textContent = 'u got it right';
    nbr.textContent = sucret_number;
    body.style.backgroundColor = '#60b347';
    nbr.style.width = `${30}rem`;
    highscore.textContent = score_left;
    return (msg.textContent = 'good job you win');
  } else if (guess_value > sucret_number) {
    msg.textContent = 'too high';
    score_left -= 1;
  } else if (guess_value < sucret_number) {
    msg.textContent = 'too low';
    score_left -= 1;
  }
  score.textContent = score_left;
});

again.addEventListener('click', () => {
  msg.textContent = 'Start guessing...';
  nbr.textContent = '?';
  body.style.backgroundColor = '#222';
  nbr.style.width = `${15}rem`;

  guess.value = ' ';
  sucret_number = Math.trunc(Math.random() * 20) + 1;
  score.textContent = 20;
  score_left = 20;
});
