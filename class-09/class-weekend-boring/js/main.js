alert("We can become together");
document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  // Conditionals go here
  if (day === "Tuesday" || day == "Thursday") {
    alert("CLASSS DAY! HOORAY!!");
  } else if (day === "Saturday" || day === "Sunday") {
    alert("WEEEEKEEENNNDDD!!!!");
  } else {
    alert("BORRRINNNGGG!!!");
  }
}
