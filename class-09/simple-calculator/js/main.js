// make the total variable and store 0 as value.
let total = 0;

// select the id of the tag you want to put effect after the click.
document.getElementById("pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").onclick = addThree;
document.querySelector("#zebra").addEventListener("click", addNine);
document
  .querySelector("#cantThinkOfAnything")
  .addEventListener("click", minusTwo);
document.querySelector("#multiCast").addEventListener("click", multipliedBySix);
document.querySelector("#divided").addEventListener("click", dividedByFour);

// create function that will be revoked by click effect on tag.
function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function addThree() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function addNine() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function minusTwo() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function multipliedBySix() {
  total = total * 6;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function dividedByFour() {
  total = total / 4;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
