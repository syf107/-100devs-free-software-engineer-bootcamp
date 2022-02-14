//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

function reverseArray(array) {
  return array.reverse();
}

const pokemonList = ["Squirtle", "Charmander", "Bulbasaur"];
console.log(reverseArray(pokemonList));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function twoArray(a, b) {
  return a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0)
    ? true
    : false;
}

console.log(twoArray([1, 2, 10], [1, 2]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(array) {
  return array.filter((element, index) => element % index === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([-5, 3, 212, 32, 213, 1230]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function stringIntegersSum(array) {
  return array.reduce((x, a) => x + Number(a), 0);
}
console.log(stringIntegersSum(["2", 3]));
