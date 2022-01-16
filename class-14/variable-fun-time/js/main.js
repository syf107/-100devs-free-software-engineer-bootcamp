//--- Easy
//create a variable and assign it a boolean
const booleanVariable = true;

//create a variable and assign it a string that is a number
let stringNumberVariable = "55";

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
stringNumberVariable = Number(stringNumberVariable) + 10;

//print that number to the console
console.log(stringNumberVariable);

//--- Medium
//create a variable that holds a value from the input

//add 21 to that number

document.querySelector("#mrRightNow").addEventListener("click", add21);

function add21() {
  let inputVariable = Number(document.querySelector("input").value);
  inputVariable += 21;

  //alert that number
  alert(inputVariable);
}

//--- Hard
//create a variable that holds the h1
const h1DOM = document.querySelector("h1");

//add an event listener to that element that places the product of the two previous variables in the DOM

h1DOM.addEventListener("click", addTwoPreviousNumber);

function addTwoPreviousNumber() {
  document.querySelector("#needSomeTLC").innerHTML =
    stringNumberVariable + stringNumberVariable;
}
