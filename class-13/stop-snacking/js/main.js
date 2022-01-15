//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const inputDOM = document.querySelector("input");
const helpDOM = document.querySelector("#help");
const showHelp = document.querySelector("#stops");

helpDOM.addEventListener("click", function () {
  const numberStop = Number(inputDOM.value);
  showHelp.innerHTML = "";
  for (let i = 0; i < numberStop; i++) {
    showHelp.innerHTML += "Stop snacking, please! ";
  }
});
