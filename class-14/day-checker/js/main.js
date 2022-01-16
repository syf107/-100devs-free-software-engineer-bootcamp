//Create a conditonal that checks the day
const day = "friday";
const house = "turing";

function dayChecker(day, house) {
  let condition;
  //If Tuesday or Thursday, tell them they have class
  if (day === "tuesday" || day === "thursday") {
    condition = "You all have class!";
    //If Saturday, tell them they have Office Hours
  } else if (day === "saturday") {
    condition = "You have office hours!";
    //If Friday and House Turing, they have private office hours
  } else if (day === "friday" && house === "turing") {
    condition = "You have private office hours for house Turing!";
    //If Wednesday and House Hopper, tell them they have private office hours
  } else if (day === "wednesday" && house === "hopper") {
    condition = "You have private office hours for house Hopper!";
    //If Monday and House Hamilton, tell them to book a 1on1
  } else if (day === "monday" && house === "hamilton") {
    condition = "You have to book 1 on 1!";
    //If any other day or wrong house, tell them to study
  } else {
    condition = "Go study";
  }
  return condition;
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener("click", function () {
  const day = document.querySelector("#whatDay").value.toLowerCase();
  const house = document.querySelector("#whatHouse").value.toLowerCase();

  document.querySelector("p").innerHTML = dayChecker(day, house);
});
