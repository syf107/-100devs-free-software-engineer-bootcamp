// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function firstAndLastNumber(array) {
  const lastArray = array[array.length - 1];
  if (array[0] < lastArray) {
    alert("Hi");
  } else if (array[0] > lastArray) {
    alert("Bye");
  } else {
    alert("We close in an hour.");
  }
}

firstAndLastNumber([9, 2, 3, 4, 5]);
