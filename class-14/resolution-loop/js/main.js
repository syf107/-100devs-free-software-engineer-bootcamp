//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
function resolutionLoop(resolution) {
  for (let i = 0; i < 365; i++) {
    console.log(resolution);
  }
}

resolutionLoop("I want to be software engineer.");

//Bonus can you make it print your resolution 365 times to the DOM?

document.querySelector("h1").addEventListener("click", printResolution);

function printResolution() {
  const resolutionInput = document.querySelector("#resolution").value;
  let resolutionOutput = document.querySelector("#letsGo");
  resolutionOutput.innerHTML = "";

  for (let i = 0; i < 365; i++) {
    resolutionOutput.innerHTML += `${resolutionInput} `;
  }
}
