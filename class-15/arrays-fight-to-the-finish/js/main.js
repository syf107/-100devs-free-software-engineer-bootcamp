//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = [
  "Harry Potter and The Sorcerer's Stone",
  "Harry Potter and The Chamber of Secrets",
];

movies.forEach(
  (x, i) => (document.querySelector("h2").innerHTML += `${i + 1}. ${x} `)
);

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 3;
}

console.log(numbers);

//Find the average of all the numbers from question three

let container = 0;
for (let i = 0; i < numbers.length; i++) {
  container += numbers[i];
}

let averageNumbers = container / numbers.length;
console.log(averageNumbers);
