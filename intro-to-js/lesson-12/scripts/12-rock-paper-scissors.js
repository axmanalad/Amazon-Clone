let score = JSON.parse(localStorage.getItem('score')) || 
{
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetConfirm();
  });

function resetConfirm() {
  document.querySelector('.js-reset-confirm').innerHTML =
    `Are you sure you want to reset the score?
    <button class="js-confirm-reset-button confirm-reset-button">Yes</button>
    <button class="js-cancel-reset-button cancel-reset-button">No</button>`;

  document.querySelector('.js-confirm-reset-button')
    .addEventListener('click', () => {
      resetScore();
      document.querySelector('.js-reset-confirm').innerHTML = '';
    });

  document.querySelector('.js-cancel-reset-button')
    .addEventListener('click', () => {
      document.querySelector('.js-reset-confirm').innerHTML = '';
    });
}

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

function autoPlay() {
  const autoPlayButton = document.querySelector('.js-auto-play-button');
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoPlayButton.innerHTML = 'Stop Playing';
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalId);
    autoPlayButton.innerHTML = 'Auto Play';
    isAutoPlaying = false;
  }
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });
  
document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  }); 

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'Backspace') {
    resetConfirm();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  console.log(computerMove);

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}