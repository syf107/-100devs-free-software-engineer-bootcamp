// *Variables*
// Create a variable and alert log the value
const aVariable = "Variable";
alert(aVariable);

// Create a variable, add -15 to it, and print the value to the console
let newVar = 45;
newVar -= 15;
console.log(newVar);

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function multipliesFourNumbers(num1, num2, num3, num4) {
  const multiplyResult = num1 * num2 * num3 * num4;
  alert(multiplyResult);
}

multipliesFourNumbers(5, 4, 3, 2);

// Create a function that divides one number by another and returns the remainder plus 10
function dividesTheRemainder(num1, num2) {
  return (num1 % num2) + 10;
}

console.log(dividesTheRemainder(50, 9));

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function addThreeNumbers(numOne, numTwo, numThree) {
  const sumOfThree = numOne + numTwo + numThree;
  if (sumOfThree > 1000) {
    alert("Block Party!!");
  }
}

addThreeNumbers(1000, 10, 11);

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function addFiveNumbers(numOne, numTwo, numThree, numFour, numFive) {
  const dividesOfFive = numOne / numTwo / numThree / numFour / numFive;
  if (dividesOfFive % 5 === 0) {
    alert("LINCOLN!");
  }
}

addFiveNumbers(5, 1, 1, 1, 1);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
function wordAndNumber(word, number) {
  for (let i = 0; i < number ** 3; i++) {
    console.log(word);
  }
}

wordAndNumber("Flameberg", 3);
