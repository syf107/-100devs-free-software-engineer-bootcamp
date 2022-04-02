//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [1, 2, 3, 100, 99, 88, 88, 10];
const sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
console.log(sumOfNumbers);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squaredArray(array) {
  return array.map((x) => x ** 2);
}

const squaredNumbers = squaredArray(numbers);
console.log(squaredNumbers);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("I love you."));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeOrNot(str) {
  if (str === reverseString(str)) {
    alert("Yes, it is palindrome.");
  } else {
    alert("No, it isn't.");
  }
}

palindromeOrNot("madam");
palindromeOrNot("home");
