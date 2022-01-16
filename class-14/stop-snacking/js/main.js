//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click", helpStopThem);

function helpStopThem() {
  const howManyTimes = Number(document.querySelector("input").value);

  let placeForOutput = document.querySelector("#stops");
  placeForOutput.innerHTML = "";

  for (let i = 0; i < howManyTimes; i++) {
    placeForOutput.innerHTML += "Stop snacking! ";
  }
}
