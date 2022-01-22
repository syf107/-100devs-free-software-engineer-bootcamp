// Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.
function twoNumbersRoundedDown(num1, num2) {
  return Math.floor(num1 / num2);
}

const firstChallenge = twoNumbersRoundedDown(10, 3);
console.log(firstChallenge);

// @everyone  Today's Challenge
//
// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!
function numberWordPassed100(number, word) {
  const result = word.length * number;
  if (result > 100) {
    alert("WINNER!!!");
  }
}

numberWordPassed100(30, "messed up");

// @everyone  Today's Challenge
//
// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

function sumFirstAndLastArray(array) {
  console.log(array[0] + array[array.length - 1]);
}

sumFirstAndLastArray([5, 4, 3, 2, 1]);

// @everyone  Today's Challenge
//
// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.

const nameList = ["Budi", "Badrun", "Jaka", "Syarief", "Arie"];

function addNameToList(name) {
  nameList.push(name);
  console.log(
    `Your position is at index of ${nameList.indexOf(name)} in the array.`
  );
}

addNameToList("Fuugo");
console.log(nameList);

// Also, these should start going out at 12:01am EST tomorrow!
//
//
// @everyone   Today's Challenge
//
// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.
//
// Review our last practice problem from last class if you need some ideas.
function onlyOddNumbers(array) {
  return array.filter((x) => x % 2 === 1);
}

console.log(onlyOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// @everyone   Today's Challenge
//
// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2 evenly.
function consoleToNumber(number) {
  for (let i = 0; i < number; i++) {
    if ((i * 3) % 2 !== 0) {
      console.log(i);
    }
  }
}

consoleToNumber(100);
