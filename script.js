console.log("Welcome to Rock Paper Scissors");
 // Function to get computer's choice
        function getComputerChoice() {
            var choices = ['Rock', 'Paper', 'Scissors'];
            var randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        // Function to play a single round of Rock Paper Scissors
        function playRound(playerSelection, computerSelection) {
            var playerChoice = playerSelection.toLowerCase();
            var computerChoice = computerSelection.toLowerCase();

            if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                return "You Win! " + playerSelection + " beats " + computerSelection;
            } else if (
                (playerChoice === "rock" && computerChoice === "paper") ||
                (playerChoice === "paper" && computerChoice === "scissors") ||
                (playerChoice === "scissors" && computerChoice === "rock")
            ) {
                return "You Lose! " + computerSelection + " beats " + playerSelection;
            } else {
                return "It's a tie!";
            }
        }

        var playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        var computerSelection = getComputerChoice();
        
        // Function to play a 5-round game
        function game() {
            console.log(playRound(playerSelection, computerSelection));
            console.log(playRound(playerSelection, computerSelection));
            console.log(playRound(playerSelection, computerSelection));
            console.log(playRound(playerSelection, computerSelection));
            console.log(playRound(playerSelection, computerSelection));
        }

        // Start the game
        game();

// Call the playRound function with player's input and computer's choice
// playRound(player, getComputerChoice());

