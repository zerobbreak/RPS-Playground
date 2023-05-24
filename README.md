# Rock, Paper, Scissors Game with JavaScript

In this tutorial, we will create a simple Rock, Paper, Scissors game using fundamental JavaScript. The game will be played between the user and the computer.

## HTML Markup

First, let's set up the HTML markup for our game. Create a new HTML file and add the following code:

<html>
<!DOCTYPE html>
<html>
  <head>
    <title>Rock, Paper, Scissors</title>
  </head>
  <body>
    <h1>Rock, Paper, Scissors</h1>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result"></p>
    
    <script src="script.js"></script>
  </body>
</html>
JavaScript Logic
Next, let's create the JavaScript file (script.js) and write the logic for our game.
// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to handle user's choice
function handleUserChoice(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  
  // Display the choices and the result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Event listeners for user's choice
document.getElementById('rock').addEventListener('click', function() {
  handleUserChoice('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  handleUserChoice('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  handleUserChoice('scissors');
});
Game Execution
To play the game, simply open the HTML file in a web browser. When the user clicks on one of the buttons (Rock, Paper, or Scissors), the corresponding event listener will call the handleUserChoice function. This function will generate the computer's choice, determine the winner, and display the result on the web page.

That's it! You have successfully created a Rock, Paper, Scissors game using fundamental JavaScript.

Conclusion
In this tutorial, we learned how to use fundamental JavaScript to create a simple Rock, Paper, Scissors game. You can enhance the game by adding more features such as keeping track of scores, adding animations, or creating a more sophisticated AI opponent. JavaScript provides endless possibilities for game development, and this example is just the beginning.