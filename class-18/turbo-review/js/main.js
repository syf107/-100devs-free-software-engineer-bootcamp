// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const favouriteDrink = "Chocolate Milk";
console.log(favouriteDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const multipleWords =
  "I used to be an angel now I live a life in a great hell. Just kidding, It's just a world.";
console.log(multipleWords.includes("apple"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  if (Math.random() <= 0.33) {
    return "rock";
  } else if (Math.random() <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(rockPaperScissor());
console.log(rockPaperScissor());
console.log(rockPaperScissor());
console.log(rockPaperScissor());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function versusBot(choice) {
  let botChoice = rockPaperScissor();

  if (
    (choice === "rock" && botChoice === "paper") ||
    (choice === "paper" && botChoice === "scissors") ||
    (choice === "scissors" && botChoice === "rock")
  ) {
    return "You lost the game.";
  } else if (
    (botChoice === "rock" && choice === "paper") ||
    (botChoice === "paper" && choice === "scissors") ||
    (botChoice === "scissors" && choice === "rock")
  ) {
    return "You win the game.";
  } else {
    return "Draw!";
  }
}

// console.log(versusBot("paper"));
// console.log(versusBot("scissors"));
// console.log(versusBot("rock"));
// console.log(versusBot("paper"));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGames(array) {
  array.forEach((x) => {
    console.log(versusBot(x));
  });
}

playGames(["paper", "scissors", "rock", "rock"]);
