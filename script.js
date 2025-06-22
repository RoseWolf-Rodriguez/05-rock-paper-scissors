// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// This function randomly selects Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  // Generate a random number: 0, 1, or 2
  const randomNumber = Math.floor(Math.random() * 3);
  // Use if statements to pick a choice based on the random number
  if (randomNumber === 0) {
    return "Rock";
  }
  if (randomNumber === 1) {
    return "Paper";
  }
  // If it's not 0 or 1, it must be 2
  return "Scissors";
}

// This function takes the player's choice, gets the computer's choice, and shows both on the page
function playGame(playerChoice) {
  // Get the computer's choice by calling the function
  const computerChoice = getComputerChoice();
  // Get the result div from the HTML
  const resultDiv = document.getElementById("result");

  // Set a variable for the result message
  let message = `You chose: ${playerChoice} | Computer chose: ${computerChoice}`;

  // Check for a tie
  if (playerChoice === computerChoice) {
    message = `${message} | It's a tie!`;
  }
  // Check if player wins
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message = `${message} | You win!`;
  }
  // Check if computer wins
  if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    message = `${message} | Computer wins!`;
  }

  // Show the message on the page
  resultDiv.textContent = message;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  // Call playGame with "Rock" when the rock button is clicked
  playGame("Rock");
});
// Add event listener for paper button
paperButton.addEventListener("click", function() {
  // Call playGame with "Paper" when the paper button is clicked
  playGame("Paper");
});
// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  // Call playGame with "Scissors" when the scissors button is clicked
  playGame("Scissors");
});