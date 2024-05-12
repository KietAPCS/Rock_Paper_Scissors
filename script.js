let obj = JSON.parse(localStorage.getItem("obj")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScore();

function viewScore() {
  return (
    "Wins: " +
    obj.Wins +
    ", Losses: " +
    obj.Losses +
    ", Ties: " +
    obj.Ties
  );
}

function play(humanChoice) {
  const computerChoice = computerMove();
  let result = "";
  let message = "";
  if (humanChoice === computerChoice) {
    obj.Ties++;
    result = "Tie.";
    // alertResult(result, humanChoice, computerChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    obj.Wins++;
    result = "You win.";
    // alertResult(result, humanChoice, computerChoice);
  } else {
    obj.Losses++;
    result = "You lose.";
    // alertResult(result, humanChoice, computerChoice);
  }
  updateResult(result, humanChoice, computerChoice);
  updateScore();
  localStorage.setItem("obj", JSON.stringify(obj));
}

function alertResult(result, humanChoice, computerChoice) {
  message =
    `You ${result}! You pick ${humanChoice}. Computer pick ${computerChoice}.` +
    `\n` +
    viewScore();
  alert(message);
}

function updateResult(result, humanChoice, computerChoice) {
  if (result == "" || humanChoice == "" || computerChoice == "") {
    message = "";
    document.querySelector(".js-moves").innerHTML = message;
    document.querySelector(".js-result").innerHTML = message;
    return;
  }
  message = `You <img src="img/${humanChoice}-emoji.png" class="move-icon" />
<img src="img/${computerChoice}-emoji.png" class="move-icon" /> Computer`;
  document.querySelector(".js-moves").innerHTML = message;
  document.querySelector(".js-result").innerHTML = result;
}

function updateScore() {
  document.querySelector(".js-score").innerHTML =
    "Wins: " +
    obj.Wins +
    ", Losses: " +
    obj.Losses +
    ", Ties: " +
    obj.Ties;
}

function computerMove() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}