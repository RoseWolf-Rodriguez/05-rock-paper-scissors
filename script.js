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

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  console.log("You chose: Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  console.log("You chose: Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  console.log("You chose: Scissors ✂️");
});