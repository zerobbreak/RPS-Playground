// Function to get computer's choice
function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      return "It's a tie!";
    }
  }
  
  var playerScore = 0;
  var computerScore = 0;
  var round = 0;
  
  // Function to update the score
  function updateScore() {
    document.getElementById("score").textContent = "Player: " + playerScore + " | Computer: " + computerScore;
  }
  
  // Function to display the result
  function displayResult(result) {
    var resultDiv = document.querySelector(".result");
    resultDiv.textContent = result;
  }
  
  // Function to handle the player's selection
  function handleSelection(playerSelection) {
    var computerSelection = getComputerChoice();
    var result = playRound(playerSelection, computerSelection);
  
    round++;
    displayResult("Round " + round + ": " + result);
  
    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
  
    updateScore();
  
    if (playerScore === 5 || computerScore === 5) {
      var winner = playerScore === 5 ? "Player" : "Computer";
      displayResult(winner + " wins the game!");
      // Disable the buttons after a player wins
      var buttons = document.querySelectorAll(".choices button");
      buttons.forEach(function (button) {
        button.removeEventListener("click", handleClick);
        button.disabled = true;
      });
    }
  }
  
  // Event listener function for button clicks
  function handleClick(event) {
    var playerSelection = event.target.id.toLowerCase();
    handleSelection(playerSelection);
  }
  
  // Add event listeners to the buttons
  var buttons = document.querySelectorAll(".choices button");
  buttons.forEach(function (button) {
    button.addEventListener("click", handleClick);
  });
  