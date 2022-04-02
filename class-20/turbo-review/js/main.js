// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
const positiveAffirmation =
  "You can be a software engineer. Keep doing that and hang in there.";
console.log(`Again: ${positiveAffirmation.repeat(10)}`);

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
const arrayOfLetters = ["f", "l", "i", "p", "p", "i", "n", "'"];
const combinedArray = arrayOfLetters.join("");
alert(combinedArray);

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function randomlyAsPossible() {
  const randomProbability = Math.random();
  if (randomProbability > 0 && randomProbability <= 0.2) {
    return "rock";
  } else if (randomProbability <= 0.4) {
    return "paper";
  } else if (randomProbability <= 0.6) {
    return "lizard";
  } else if (randomProbability <= 0.8) {
    return "spock";
  } else if (randomProbability < 1) {
    return "scissors";
  } else {
    return "the number is outside the probability";
  }
}

console.log(randomlyAsPossible());
console.log(randomlyAsPossible());
console.log(randomlyAsPossible());
console.log(randomlyAsPossible());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWinVsBot(yourChoice) {
  const botChoice = randomlyAsPossible();
  if (
    (yourChoice === "rock" && botChoice === "scissors") ||
    (yourChoice === "rock" && botChoice === "lizard") ||
    (yourChoice === "paper" && botChoice === "rock") ||
    (yourChoice === "paper" && botChoice === "spock") ||
    (yourChoice === "scissors" && botChoice === "paper") ||
    (yourChoice === "scissors" && botChoice === "lizard") ||
    (yourChoice === "lizard" && botChoice === "spock") ||
    (yourChoice === "lizard" && botChoice === "paper") ||
    (yourChoice === "spock" && botChoice === "rock") ||
    (yourChoice === "spock" && botChoice === "scissors")
  ) {
    return `${yourChoice} beats ${botChoice}. You win the game!`;
  } else if (yourChoice === botChoice) {
    return `${yourChoice} and ${botChoice} are the same. Draw.`;
  } else {
    return "You lose the game.";
  }
}

console.log(checkWinVsBot("scissors"));
console.log(checkWinVsBot("paper"));
console.log(checkWinVsBot("rock"));
console.log(checkWinVsBot("lizard"));
console.log(checkWinVsBot("spock"));
