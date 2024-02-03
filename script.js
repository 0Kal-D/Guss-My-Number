'use strict';

/*
let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
console.log(secrateNumber)

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '20';
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('body').style.backgroundColor = '#2f2f2f';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    secrateNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secrateNumber)
})
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '!! No number';
    } else if (secrateNumber === guess) {
        document.querySelector('.message').textContent = ':) Correct Number !';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector(".number").textContent = secrateNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }

    } else if (score === 1) {
        document.querySelector('.message').textContent = ':( Game Over!';
        document.querySelector('.score').textContent = '0';
    } else if (secrateNumber < guess) {
        document.querySelector('.message').textContent = 'To High';
        score--
        document.querySelector('.score').textContent = score;
    } else if (secrateNumber > guess) {
        document.querySelector('.message').textContent = 'To Low';
        score--
        document.querySelector('.score').textContent = score;
    }
}) */

const backgroundColor = function (color) { document.querySelector('body').style.backgroundColor = color };
const message = function (msg) { document.querySelector('.message').textContent = msg };
const displayNum = function (num) { document.querySelector('.number').textContent = num };
const displayScore = function (src) { document.querySelector('.score').textContent = src };
const displayHighScore = function (hSrc) { document.querySelector('.highScore').textContent = hSrc };
const replay = document.querySelector('.again');

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        message("!! No number...")
    } else if (guess === secrateNumber) {
        message(':) Correct Number!')
        displayNum(secrateNumber);
        backgroundColor('#60b347');
        if (score > highscore) {
            highscore = score;
            displayHighScore(highscore);
        }

    } else {
        if (score > 1) {
            const check = function (gus, number) {
                message(`To ${gus > number ? 'High' : 'Low'} !`);
                score--;
                displayScore(score);
            }
            check(guess, secrateNumber);
        } else {
            message(':( Game over !!')
            displayScore(0);
        }
    }
})

replay.addEventListener('click', function () {
    score = 20;
    secrateNumber = Math.trunc(Math.random() * 20) + 1;
    backgroundColor('#2f2f2f');
    message('Start guessing...');
    displayScore('20');
    displayNum('?');
    document.querySelector('.guess').value = '';
})
