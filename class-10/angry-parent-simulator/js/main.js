// document.querySelector("#yell").addEventListener("click", run);

// function run() {
//   const fName = document.querySelector("#firstName").value;
//   const fMidName = document.querySelector("#firstMiddle").value;
//   const lMidName = document.querySelector("#lastMiddle").value;
//   const lName = document.querySelector("#lastName").value;

//   // document.querySelector('#placeToYell').innerHTML = fName + " " + fMidName + " " + lMidName  + " " + lName;

//   document.querySelector(
//     "#placeToYell"
//   ).innerHTML = `${fName} ${fMidName} ${lMidName} ${lName}`;
// }

const synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#firstMiddle").value;
  const lMidName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;

  document.querySelector("#placeToYell").innerHTML = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
