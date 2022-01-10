//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  const showingResult = document.querySelector("#placeToSee");

  if (day === "tuesday" || day === "thursday") {
    showingResult.innerHTML = "YOU HAVE CLASS";
  } else if (day === "saturday" || day === "sunday") {
    showingResult.innerHTML = "It's The Weekend";
  } else if (day === "wednesday") {
    showingResult.innerHTML = "HUMPDAY!";
  } else {
    showingResult.innerHTML = "BOOORIIING;";
  }
}
