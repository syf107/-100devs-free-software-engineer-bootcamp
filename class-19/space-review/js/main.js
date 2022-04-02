//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arrayNumber = [1, 2, 3, 4, 5];
const sumOfArray = arrayNumber.reduce((sum, x) => sum + x, 0);
alert(sumOfArray);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArray(array) {
  return array.map((x) => x ** 2);
}

const squaredForm = squaredArray(arrayNumber);
console.log(squaredForm);

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("drummers"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeOrNot(string) {
  alert(
    string === reverseString(string) ? "Yes, it is palindrome" : "No, it isn't."
  );
}

palindromeOrNot("madam");
palindromeOrNot("please");
