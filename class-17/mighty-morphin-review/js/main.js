// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "Eid mubarak holiday!";
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const newString = "We don't belong here.";
alert(newString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumbers(num1, num2, num3, num4, num5) {
  alert(Math.abs(100 - num1 - num2 - num3 - num4 - num5));
}

fiveNumbers(5, 10, 15, 20, 100);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbers(num1, num2, num3) {
  const highest = Math.max(num1, num2, num3);
  const lowest = Math.min(num1, num2, num3);
  console.log(
    `The highest value is ${highest}. The lowest value is ${lowest}.`
  );
}

threeNumbers(50, 100, 12);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  //   if (Math.random() < 0.5) {
  //     return "Heads";
  //   } else {
  //     return "Tails";
  //   }

  return Math.random() > 0.5 ? "Tails" : "Head";
}

console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function repeatThePriorFunction(number) {
  for (let i = 0; i < number; i++) {
    console.log(headsOrTails());
  }
}

repeatThePriorFunction(5);
