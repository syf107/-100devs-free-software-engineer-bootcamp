//Create an array of movies with at least three movies.
const movies = [
  "Spider-man: Homecoming",
  "Spider-man: Far from Home",
  "Spider-man: No Way Home",
];

//Using the array from above, store the first movie in a variable
const firstMovie = movies[0];

//Get the length of the original array and store it in a new variable
const howManyMovies = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
// Yes, by using the array total length minus one, this still works even though we don't know the solution.
const lastMovies = movies[howManyMovies - 1];
console.log(movies, firstMovie, howManyMovies, lastMovies);
