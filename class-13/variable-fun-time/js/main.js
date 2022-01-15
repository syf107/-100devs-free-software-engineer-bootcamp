//--- Easy
//create a variable and assign it a number
let numberVariable = 25;

//minus 10 from that number
numberVariable -= 10;

//print that number to the console
console.log(numberVariable);

//--- Medium
//create a variable that holds a value from the input
let inputNumber = Number(document.querySelector("#danceDanceRevolution").value);

//add 25 to that number
inputNumber += 25;

//alert that number
alert(inputNumber);

//--- Hard
//create a variable that holds the h1
const h1DOM = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
h1DOM.addEventListener("click", (resultOfPriorNumber) =>
  console.log(inputNumber + numberVariable)
);
