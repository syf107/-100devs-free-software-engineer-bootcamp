// let total = 0;

// document.querySelector("#pumpkin").addEventListener("click", makeZero);
// document.querySelector("#dominosPizza").addEventListener("click", jumanji);
// document.querySelector("#zebra").addEventListener("click", add9);
// document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
// document.querySelector("#multiCast").addEventListener("click", multiplySix);
// document.querySelector("#divided").addEventListener("click", divideItBy4);

// function makeZero() {
//   total = 0;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function jumanji() {
//   total = total + 3;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function add9() {
//   total = total + 9;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

// function sub2() {
//   total = total - 2;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

// function multiplySix() {
//   total = total * 6;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

// function divideItBy4() {
//   total = total / 4;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

let total = 0;

document.getElementById("pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").onclick = addThree;
document.querySelector("#zebra").addEventListener("click", addNine);
document.querySelector("#cantThinkOfAnything").addEventListener("click", minusTwo);
document.querySelector("#multiCast").addEventListener("click", multipliedBySix);
document.querySelector("#divided").addEventListener("click", dividedByFour);

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