// // select the query with id yell, and when it's clicked it will do run function
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   // take the value from all the input box and store it.
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   // place all the stored variable above to the element with #placeToYell id.
//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }


/*BELOW IS THE CODE WITH SPEECH*/ 

// make a function of speech sound.
const synth = window.speechSynthesis;

// select the query with id yell, and when it's clicked it will do run function
document.querySelector("#yell").addEventListener("click", run)

function run() {

  // take the value from all the input box and store it.
  const fName = document.querySelector("#firstName").value;
  const fMiddleName = document.querySelector("#firstMiddle").value;
  const lMiddleName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  // store the collection of the value above into one variable.
  const yellText = `${fName} ${fMiddleName} ${lMiddleName} ${lName}`

  // place the yellText into the element with id #placeToYell
  document.querySelector("#placeToYell").innerHTML = yellText;
  
  // store the yellText with speaking function.
  let yellThis = new SpeechSynthesisUtterance(yellText);

  // show the sound of speak.
  synth.speak(yellThis);
}
