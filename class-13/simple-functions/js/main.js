//---Easy
//create a function that subtracts two numbers and alerts the difference
function substractTwoNumbers(a, b) {
  alert(a - b);
}

substractTwoNumbers(100, 50);

//create a function that divides three numbers and console logs the quotient
function dividesThreeNumbers(numberOne, numberTwo, numberThree) {
  console.log(numberOne / numberTwo / numberThree);
}

dividesThreeNumbers(27, 3, 3);

//create a function that multiplys three numbers and returns the product
function multipliesThreeNumbers(numberOne, numberTwo, numberThree) {
  return numberOne * numberTwo * numberThree;
}

console.log(multipliesThreeNumbers(3, 3, 3));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNumberAddandRemainder(numberOne, numberTwo, numberThree) {
  return (numberOne + numberTwo) % numberThree;
}

console.log(threeNumberAddandRemainder(20, 10, 3));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbersHard(numberOne, numberTwo, numberThree, numberFour) {
  let firstTwo = numberOne + numberTwo;

  if (firstTwo > 100) {
    console.log((firstTwo += numberThree + numberFour));
  } else if (firstTwo < 100) {
    console.log((firstTwo = firstTwo - (numberThree - numberFour)));
  } else {
    firstTwo = (numberOne * numberTwo * numberThree) % numberFour;
    alert(firstTwo);
  }
}

fourNumbersHard(50, 60, 30, 30);
fourNumbersHard(50, 40, 30, 10);
fourNumbersHard(50, 50, 1, 2000);
