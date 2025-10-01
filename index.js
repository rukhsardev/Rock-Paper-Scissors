function playGame() {
  function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.34) {
      return "rock";
    } else if (randomNumber <= 0.67) {
      return "paper ";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    let humanInput = prompt("Enter your choice");

    humanInput = humanInput.toLowerCase();

    if (
      humanInput === "rock" ||
      humanInput === "paper" ||
      humanInput === "scissors"
    ) {
      return humanInput;
    } else {
      alert("Invalid choice! please refresh and try again");
      return null;
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "its a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("you win! rock beats scissors");
    } else if (humanChoice === " paper" && computerChoice === "rock") {
      humanScore++;
      console.log("your win! paper beats scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("your win! scissors beats paper");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    } else {
      computerScore++;
      console.log("you loose " + computerChoice + " beats " + humanChoice);
    }
  }

   console.log("=== Round 1 ===");
  let human = getHumanChoice();
  let computer = getComputerChoice();

  if (human !== null) {
    playRound(human, computer);
  } else {
    console.log("Game cancelled - invalid input");
  }

   console.log("=== Round 2 ===");
   human = getHumanChoice();
   computer = getComputerChoice();

  if (human !== null) {
    playRound(human, computer);
  } else {
    console.log("Game cancelled - invalid input");
  }

   console.log("=== Round 3 ===");
   human = getHumanChoice();
   computer = getComputerChoice();

  if (human !== null) {
    playRound(human, computer);
  } else {
    console.log("Game cancelled - invalid input");
  }

   console.log("=== Round 4 ===");
   human = getHumanChoice();
   computer = getComputerChoice();

  if (human !== null) {
    playRound(human, computer);
  } else {
    console.log("Game cancelled - invalid input");
  }

   console.log("=== Round 5 ===");
   human = getHumanChoice();
   computer = getComputerChoice();

  if (human !== null) {
    playRound(human, computer);
  } else {
    console.log("Game cancelled - invalid input");
  }

  console.log("=== Game Finished ===");
  console.log("=== Final Score ===");
  console.log("Human" + humanScore);
  console.log("Computer" + computerScore);


  if ( humanScore > computerScore) {
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  }

}


playGame();