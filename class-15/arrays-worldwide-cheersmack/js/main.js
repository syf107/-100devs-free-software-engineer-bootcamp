//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function createArrayToNumber(number) {
  let newArray = new Array();

  for (let i = 0; i < number; i++) {
    newArray[i] = i + 1;
  }

  return newArray;
}

console.log(createArrayToNumber(19));
