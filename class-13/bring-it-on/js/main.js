// *Variables*
// Create a variable and console log the value
const newVariable = "We love to each other.";

// Create a variable, add 10 to it, and alert the value
let newValue = 20;
newValue += 10;
alert(newValue);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractsFourNumbers(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

substractsFourNumbers(10, 4, 3, 2);

// Create a function that divides one number by another and returns the remainder
function dividesByAnother(num1, num2) {
  return num1 % num2;
}

console.log(dividesByAnother(100, 9));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiAlert(num1, num2) {
  num1 + num2 > 50 ? alert("Jumanji!!!") : num1 + num2;
}

jumanjiAlert(49, 5);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplysThreeNumbers(num1, num2, num3) {
  const result = num1 * num2 * num3;
  if (result % 3 === 0) {
    alert("ZEBRA!!!");
  }
}

multiplysThreeNumbers(10, 3, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordXNumber(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

wordXNumber("Superrr Frankkyyy", 10);
