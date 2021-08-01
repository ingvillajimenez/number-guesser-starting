let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9) {
    alert("number is out of range");
  }
  const humanTarget = getAbsoluteDistance(human, target);
  const computerTarget = getAbsoluteDistance(computer, target);
  if (humanTarget === computerTarget) {
    return true;
  } else if (humanTarget < computerTarget) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  }
  if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
