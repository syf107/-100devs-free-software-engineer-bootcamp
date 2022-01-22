//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShow = ["Game of Thrones", "Breaking Bad", "Mr. Robot"];

tvShow.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numberArr = [1, 3, 5, 2, 4, 12, 13, 18, 10, 20, 22, 25];
console.log(numberArr);
const evenArr = numberArr.filter((number) => number % 2 === 0);
console.log(evenArr);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfHighestLowest(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  alert(sortedArray[1] + sortedArray[sortedArray.length - 2]);
}

console.log(sumOfHighestLowest(numberArr));
