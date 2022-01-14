document
  .querySelector(".calculate")
  .addEventListener("click", calculateTheResult);
const additionDOM = document.querySelector(".addition");
const substractionDOM = document.querySelector(".substraction");
const multiplicationDOM = document.querySelector(".multiplication");
const divisionDOM = document.querySelector(".division");

function calculateTheResult() {
  const firstNumber = Number(document.querySelector("#inputOne").value);
  const secondNumber = Number(document.querySelector("#inputTwo").value);

  const additionResult = firstNumber + secondNumber;
  const substractionResult = firstNumber - secondNumber;
  const multiplicationResult = firstNumber * secondNumber;
  const divisionResult = firstNumber / secondNumber;

  additionDOM.innerHTML = `The result of addition for these numbers is ${additionResult}.`;
  substractionDOM.innerHTML = `The result of substraction for these numbers is ${substractionResult}.`;
  multiplicationDOM.innerHTML = `The result of multiplication for these numbers is ${multiplicationResult}.`;
  divisionDOM.innerHTML = `The result of division for these numbers is ${divisionResult}.`;
}
