//Create a conditonal that checks their age
const age = 16;
// //If under 16, tell them they can not drive
// if (age < 16) {
//   console.log("You cannot drive.");
//   //If under 18, tell them they can't hate from outside the club, because they can't even get in
// } else if (age < 18) {
//   console.log(
//     "You can hate from outside the club, because You can't even get in."
//   );
//   //If under 21, tell them they can not drink
// } else if (age < 21) {
//   console.log("You cannot drink.");
//   //If under 25, tell them they can not rent cars affordably
// } else if (age < 25) {
//   console.log("You cannot rent cars affordably.");
//   //If under 30, tell them they can not rent fancy cars affordably
// } else if (age < 30) {
//   console.log("You cannot rent fancy cars affordably.");
//   //If  over 30, tell them there is nothing left to look forward too
// } else {
//   console.log("There is nothing left to look forward to.");
// }

function ageChecker(age) {
  let resultChecker;
  if (age < 16) {
    resultChecker = "You cannot drive.";
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
  } else if (age < 18) {
    resultChecker =
      "You can hate from outside the club, because You can't even get in.";
    //If under 21, tell them they can not drink
  } else if (age < 21) {
    resultChecker = "You cannot drink.";
    //If under 25, tell them they can not rent cars affordably
  } else if (age < 25) {
    resultChecker = "You cannot rent cars affordably.";
    //If under 30, tell them they can not rent fancy cars affordably
  } else if (age < 30) {
    resultChecker = "You cannot rent fancy cars affordably.";
  } else {
    resultChecker = "There is nothing left to look forward to.";
  }
  return resultChecker;
}

console.log(ageChecker(age));

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener("click", resultFromInput);

function resultFromInput() {
  const inputAge = Number(
    document.querySelector("#danceDanceRevolution").value
  );

  document.querySelector("p").innerHTML = ageChecker(inputAge);
}
