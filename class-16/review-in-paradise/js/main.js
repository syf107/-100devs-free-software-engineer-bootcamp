// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favouriteFood = "Kebab";
alert(favouriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const myString = "Hathaway's Flash";
alert(myString[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNumbersDivideMultiply(num1, num2, num3) {
  alert((num1 / num2) * num3);
}

threeNumbersDivideMultiply(10, 5, 10);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(number) {
  console.log(Math.cbrt(number));
}

cubeRoot(64);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonthChecker(month) {
  // making array of a whole year months.
  let twelveMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //   console.log(twelveMonths);

  // Summer months.
  const summerMonths = ["June", "July", "August"];

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const capitalizedMonth = capitalize(month);

  if (
    twelveMonths.includes(capitalizedMonth) > 0 &&
    summerMonths.includes(capitalizedMonth) > 0
  ) {
    alert("YAY");
  } else {
    alert("BOO!!!");
  }
}

summerMonthChecker("february");
summerMonthChecker("june");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logTheNumbersSkip5(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}

logTheNumbersSkip5(15);
