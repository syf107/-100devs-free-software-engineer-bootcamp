// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const what = "Do you really love me?";
if (what[what.length - 1] === "?") alert(what);
alert(what.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const juniorDev =
  " I am jr. dev, I want to work in a big company that accept jr. dev.";
const softwareEngineer = juniorDev.replaceAll("jr. dev", "software engineer");
console.log(softwareEngineer);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(rockPaperScissors());
console.log(rockPaperScissors());
console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWinVsBot(yourChoice) {
  const botChoice = rockPaperScissors();
  if (
    (yourChoice === "rock" && botChoice === "scissors") ||
    (yourChoice === "paper" && botChoice === "rock") ||
    (yourChoice === "scissors" && botChoice === "paper")
  ) {
    return `${yourChoice} beats ${botChoice}. You win the game!`;
  } else if (yourChoice === botChoice) {
    return `${yourChoice} and ${botChoice} are the same. Draw.`;
  } else {
    return "You lose the game.";
  }
}

// console.log(checkWinVsBot("paper"));
// console.log(checkWinVsBot("scissors"));
// console.log(checkWinVsBot("rock"));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function yourChoice(array) {
  array.forEach((x) => console.log(checkWinVsBot(x)));
}

yourChoice(["paper", "rock", "scissors"]);
