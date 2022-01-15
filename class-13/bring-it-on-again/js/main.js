// *Variables*
// Declare a variable, assign it a value, and alert the
const newVariable = 50;
alert(newVariable);

// Create a variable, divide it by 10, and console log the value
let anotherVariable = 50;
anotherVariable /= 10;
console.log(anotherVariable);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multipliesThreeNumbers(num1, num2, num3) {
  alert(num1 * num2 * num3);
}

multipliesThreeNumbers(50, 20, 10);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumbersAddSubstract(num1, num2, num3, num4) {
  const result = num1 + num2 - num3 - num4;
  console.log(result);
}

fourNumbersAddSubstract(50, 40, 5, 5);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumbers(num1, num2, num3) {
  const numberContainer = (100 + num1 - num2) / num3;

  if (numberContainer > 25) {
    console.log("WE HAVE A WINNNA!!!");
  }
}

threeNumbers(25, 25, 2);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function weekDayOrWeekend() {
  let day = prompt("What day is it?").toLowerCase();

  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      alert("It's weekday");
      break;
    case "saturday":
    case "sunday":
      alert("It's weekend.");
      break;
    default:
      alert("You put the wrong day!");
      weekDayOrWeekend();
  }
}

weekDayOrWeekend();

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countToNumberByThree(number) {
  for (let i = 1; i <= number; i += 3) {
    console.log(i);
  }
}

countToNumberByThree(200);
