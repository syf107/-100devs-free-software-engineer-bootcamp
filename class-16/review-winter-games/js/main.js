//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenArr(array) {
  const evenArray = [];

  array.forEach((x, i) => {
    if (x % 2 === 0) {
      evenArray.push(x);
    }
  });
  return evenArray;
}

console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
