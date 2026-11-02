const rockBtn = document.getElementById("rockButton");
const paperBtn = document.getElementById("paperButton");
const scissorsBtn = document.getElementById("scissorsButton");
const resultMsg = document.getElementById("result");

function playGame(playerHand) {
  const choices = ["rock", "paper", "scissors"];
  const computerHand = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerHand === computerHand) {
    result = "It's a tie!";
  } else if (
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    result = `You win! ${playerHand} beats ${computerHand}`;
  } else {
    result = `You lose! ${computerHand} beats ${playerHand}`;
  }

  resultMsg.textContent = result;
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
