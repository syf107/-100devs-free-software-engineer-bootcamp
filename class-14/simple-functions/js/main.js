//---Easy
//create a function that adds two numbers and alerts the difference
function addTwoNumbers(firstNumber, secondNumber) {
  alert(firstNumber + secondNumber);
}

addTwoNumbers(25, 15);

//create a function that divides two numbers and console logs the quotient
function dividesTwoNumbers(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

dividesTwoNumbers(25, 5);

//create a function that multiplys four numbers and returns the product
function multipliesFourNumbers(
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber
) {
  return firstNumber * secondNumber * thirdNumber * fourthNumber;
}

console.log(multipliesFourNumbers(10, 10, 10, 10));

//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers

function fourNumbersRemainder(num1, num2, num3, num4) {
  return (num1 + num2) % (num3 - num4);
}

console.log(fourNumbersRemainder(10, 30, 5, 2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbersHundred(num1, num2, num3, num4) {
  let firstTwo = num1 * num2;
  if (firstTwo > 100) {
    console.log((firstTwo += num3 + num4));
  } else if (firstTwo < 100) {
    firstTwo = firstTwo - (num3 - num4);
    console.log(firstTwo);
  } else {
    alert((num1 * num2 * num3) % num4);
  }
}

fourNumbersHundred(100, 2, 1, 1);
fourNumbersHundred(50, 40, 80, 40);
fourNumbersHundred(50, 2, 1, 3);
