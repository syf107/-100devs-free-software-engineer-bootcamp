// Introduction to JavaScript
// What is JavaScript?

// Console
console.log(28);
console.log(54);

// Comments
// Opening line
console.log("It was love at first sight.");
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

// Data Types
console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

// Arithmetic Operators
console.log(28 + 3.5);
console.log(2021 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// String Concatenation
console.log("Hello" + "World");
console.log("Hello" + " " + "World");

// Properties
console.log("Teaching the world how to code".length);

// Built-in Objects
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// VARIABLES
// Create a Variable: var
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// Create a Variable: let
let changeMe = true;
changeMe = false;
console.log(changeMe);

// Create a Variable: const
const entree = "Enchiladas";
console.log(entree);
// entree = "Tacos"; // error

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

// String Concatenation with Variables
let favoriteAnimal = "Sugar Glider";
console.log("My favorite animal: " + favoriteAnimal);

// String Interpolation
const myName = "Syarief Arifin";
const myCity = "Bogor";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// typeof operator
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

// Kelvin Operator
// the forecast temperature in kelvin
const kelvin = 0;
// the temperature in celcius from kelvin
const celcius = kelvin - 273;
// the temperature conversion to fahrenheit.
const fahrenheit = Math.floor(celcius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Dog Years
// the age of me
let myAge = 10;

// early years variable
let earlyYears = 2;
earlyYears *= 10.5;

// this is thre result of our later years.
let laterYears = myAge - 2;

// multiply our remaining age, outside the earlyYears with four to see the rest of our age in Dog Years.
laterYears *= 4;

console.log(earlyYears, laterYears);


// Our total age in dog years, using calculated earlyYears and laterYears;
let myAgeInDogYears = earlyYears + laterYears;

// Create a myName variable and make it into lowercase with toLowerCase() Built-In method.
let myName = "Syarief Arifin".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.` );
