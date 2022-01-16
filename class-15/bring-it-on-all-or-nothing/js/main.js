// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const blackTShirt = true;
alert(blackTShirt);

// Declare a variable, reassign it to your favorite color, and console log the value
let color;
color = "teal";
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function sumThreeThenDivided(num1, num2, num3, num4) {
  const result = (num1 + num2 + num3) / num4;
  return result;
}

console.log(sumThreeThenDivided(10, 20, 30, 60));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function onePowerTwo(num1, num2) {
  console.log(num1 ** num2);
}

onePowerTwo(5, 5);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function booleanAndString(bool, str) {
  // bool ? alert(str) : console.log(str);
  if (bool) {
    alert(str);
  } else {
    console.log(str);
  }
}

booleanAndString(false, "I have no shame about it.");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    let container = "";
    if (i % 3 === 0) container += "fizz";
    if (i % 5 === 0) container += "Buzz";
    container ? console.log(container) : console.log(i);
  }
}

fizzBuzz(50);
