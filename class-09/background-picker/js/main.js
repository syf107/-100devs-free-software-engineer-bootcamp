// document.getElementById("purple").onclick = partyPurple;
// document.getElementById("green").onclick = partyGreen;
// document.getElementById("blue").onclick = partyBlue;
// document.getElementById("orangered").onclick = partyOrangered;
// do
 
// function partyPurple() {
//   document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
//   document.querySelector("body").style.color = "white";
// }


// function partyGreen() {
//   document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
//   document.querySelector("body").style.color = "white";
// }

// function partyBlue() {
//   document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
//   document.querySelector("body").style.color = "white";
// }

// function partyOrangered() {
//   document.querySelector("body").style.backgroundColor = "orangered";
//   document.querySelector("body").style.color = "white";
// }

document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("orangered").onclick = partyOrangered;
document.getElementById("teal").onclick = partyTeal;
document.getElementById("reset").onclick = resetColor;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(241, 63, 247, 1)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
}

function partyOrangered() {
  document.querySelector("body").style.backgroundColor = "orangered";
  document.querySelector("body").style.color = "white";
}

function partyTeal() {
  document.querySelector("body").style.backgroundColor = "teal";
  documen.querySelector("body").style.color = "white";
}

function resetColor() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
}