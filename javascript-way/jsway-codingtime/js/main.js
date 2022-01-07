// // Coding time! Chapter 1
// // Presentation
// // Write a program that displays your name and age. Here's the result for mine.
// console.log("Syarief Arifin");
// console.log("28");

// // Minimalistic calculator
// // Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 / 3);
// console.log(6 * 3);

// // Values prediction
// // Observe the following program and try to predict the values it displays.

// console.log(4 + 5); // 9
// console.log("4 + 5"); // 4 + 5
// console.log("4" + "5"); // 45

// // Check your prediction by executing it.

// // Coding time! Chapter 2
// // Build a habit of choosing good variable names in all exercises, starting with these ones.

// // Improved hello
// // Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
// const firstName = prompt("What's your first name?");
// const lastName = prompt("What's your last name?");
// console.log(`Hello, ${firstName} ${lastName}`);

// // Final values
// // Observe the following program and try to predict the final values of its variables.
// let a = 2; // a = 2
// a -= 1; // a = 1
// a++; // a = 2
// let b = 8; // b = 8
// b += 2; // b = 10
// const c = a + b * b; // c = 102
// const d = a * b + b; // d = 30
// const e = a * (b + b); // e = 40
// const f = (a * b) / a; // f = 10
// const g = (b / a) * a; // g = 10
// console.log(a, b, c, d, e, f, g); // 2 10 102 30 40 10 10
// // Check your prediction by executing it.

// // Coding Time! Chapter 3
// // VAT calculation
// // Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
// let price = Number(prompt("What's the price?"));
// price = price + price * 0.206;
// console.log(`The total price is ${price}`);

// // From Celsius to Fahrenheit degrees
// // Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// // The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
// const celciusDegree = Number(
//   prompt(`Put the celcius degree you want to convert:
//   (Just put the number without degree symbol)`)
// );
// const fahrenheitDegree = (celciusDegree * 9) / 5 + 32;
// console.log(
//   `The temperature in fahrenheit is ${fahrenheitDegree} ${String.fromCharCode(
//     8457
//   )}`
// );

// // Variable swapping
// // Observe the following program.

// let number1 = 5;
// let number2 = 3;

// // TODO: type your code here (and nowhere else!)
// [number1, number2] = [number2, number1];

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5
// // Add the necessary code to swap the values of variables number1 and number2.

// // T> This exercise has several valid solutions. You may use more than two variables to solve it.

// // Coding Time! Chapter 4

// // Here are a few pieces of advice about these exercises:

// // Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.

// // Try to find alternative solutions. For example, one using an if and another using a switch.

// // Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.

// // Following day
// // Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const day = prompt("What day is today?");

// switch (day) {
//   case "monday":
//     console.log("It's monday! You have 4 remaining work days before weekend.");
//     break;
//   case "tuesday":
//     console.log("It's tuesday! You have 3 remaining work days before weekend.");
//     break;
//   case "wednesday":
//     console.log(
//       "It's wednesday! You work so hard! 2 more remaining days before weekend."
//     );
//     break;
//   case "thursday":
//     console.log(
//       "It's thursday! You've got this. 1 more remaining days and you'll meet weekend!"
//     );
//     break;
//   case "friday":
//     console.log(
//       "Friday! TGIF! Tomorrow is weekend. Just 8 hours working, and you are free!"
//     );
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("It's weekend! Have a good holiday.");
//     break;
//   default:
//     console.log("The day is invalid.");
// }

// // Number comparison
// // Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// const firstNumber = Number(prompt("Put your first number:"));
// const secondNumber = Number(prompt("Put your second number:"));

// if (firstNumber > secondNumber) {
//   console.log(
//     `First number(${firstNumber}) has a bigger value than second number(${secondNumber}).`
//   );
// } else if (firstNumber < secondNumber) {
//   console.log(
//     `First number(${firstNumber}) has smaller value than second number(${secondNumber}).`
//   );
// } else {
//   console.log(
//     `Both first number(${firstNumber}) and second number( ${secondNumber}), have the same value.`
//   );
// }

// // Final values
// // Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);
// // 0, 4, 12
// // 4, 3, 2
// // 3, 4, 0
// // Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

// // Number of days in a month
// // Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// const month = Number(prompt("Please put the number of the month"));
// switch (month) {
//   case 1:
//     console.log("31 days");
//     break;
//   case 2:
//     console.log("28 days");
//     break;
//   case 3:
//     console.log("31 days");
//     break;
//   case 4:
//     console.log("30 days");
//     break;
//   case 5:
//     console.log("31 days");
//     break;
//   case 6:
//     console.log("30 days");
//     break;
//   case 7:
//     console.log("31 days");
//     break;
//   case 8:
//     console.log("31 days");
//     break;
//   case 9:
//     console.log("30 days");
//     break;
//   case 10:
//     console.log("31 days");
//     break;
//   case 11:
//     console.log("30 days");
//     break;
//   case 12:
//     console.log("31 days");
//     break;
//   default:
//     console.log("The month number is invalid.");
// }

// // Following second
// // Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// // This is not as simple as it seems... Look at the following results to see for yourself:

// // 14h17m59s => 14h18m0s
// // 6h59m59s => 7h0m0s
// // 23h59m59s => 0h0m0s (midnight)

// let hours = Number(prompt("What's the hours?"));
// let minutes = Number(prompt("What's the minutes?"));
// let seconds = Number(prompt("What's the seconds?"));

// seconds += 1;

// if (seconds >= 60) {
//   seconds -= 60;
//   minutes += 1;
// }

// if (minutes >= 60) {
//   minutes -= 60;
//   hours += 1;
// }

// if (hours >= 24) {
//   hours -= 24;
// }

// if (hours >= 0 && hours <= 3) {
//   console.log(`${hours}h${minutes}m${seconds}s (midnight)`);
// } else {
//   console.log(`${hours}h${minutes}m${seconds}s`);
// }

// // Coding Time! Chapter 5
// // Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.

// // Write a program that launches a carousel for 10 turns, showing the turn number each time.
// for (let i = 1; i <= 10; i++) {
//   console.log("Carousel turn " + i);
// }

// let turn = 1;
// while (turn <= 10) {
//   console.log(`Carousel turn ${turn}`);
//   turn++;
// }

// // When it's done, improve it so that the number of turns is given by the user.

// let userTurn = Number(prompt("How many turns do you want for the carousel?"));

// for (let i = 1; i <= userTurn; i++) {
//   console.log(`Carousel turn ${i}`);
// }

// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// // Improve the program so that it also shows odd numbers.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even.`);
//   } else {
//     console.log(`${i} is odd.`);
//   }
// }
// // Improve it again to replace the initial number 1 by a number given by the user.
// const startingNumber = Number(prompt("At what number do you want to start?"));

// for (let i = startingNumber; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even.`);
//   } else {
//     console.log(`${i} is odd.`);
//   }
// }

// // This program must show exactly 10 numbers including the first one, not 11 numbers!

// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// making variable above one hundred so the condition is true for the first attempt.
// let number = 101;

// while (number > 100) {
//   number = Number(prompt("Please put the number less than or equal to 100:"));
//   console.log(number);
// }

// // When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// let number = 101;

// while (number > 100 || number < 50) {
//   number = Number(
//     prompt(
//       "Please put the number more than and equal to 50 and less than or equal to 100:"
//     )
//   );
//   console.log(number);
// }

// // Multiplication table
// // Write a program that asks the user for a number, then shows the multiplication table for this number.

// let theNumber = Number(prompt("What is your number?"));

// for (let i = 1; i <= theNumber; i++) {
//   console.log(`${i} x ${theNumber} = ${i * theNumber}`);
// }

// // When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
// let theNumber = 1;

// while (!(theNumber >= 2 && theNumber <= 9)) {
//   theNumber = Number(prompt("What is your number? Only put 2 to 9"));
// }

// for (let i = 1; i <= theNumber; i++) {
//   console.log(`${i} x ${theNumber} = ${i * theNumber}`);
// }

// // Neither yes nor no
// // Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// let text = "";

// while (text !== "yes" && text !== "no") {
//   text = prompt('This program will end when you write "yes" or "no"');
// }

// // FizzBuzz
// // Write a program that shows all numbers between 1 and 100 with the following exceptions:

// // It shows "Fizz" instead if the number is divisible by 3.

// // It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// // When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

// for (let i = 1; i <= 100; i++) {
//   let shownWord = "";
//   if (i % 3 === 0) shownWord += "Fizz";
//   if (i % 5 === 0) shownWord += "Buzz";

//   shownWord ? console.log(shownWord) : console.log(i);
// }

// // This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!

// // Chapter 5. Coding time!
// // Improved hello
// // Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// // Say hello to the user
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }

// // TODO: ask user for first and last name
// const firstName = prompt("What is your first name?");
// const lastName = prompt("What is your last name?");

// // TODO: call sayHello() and show its result
// console.log(sayHello(firstName, lastName));

// // Number squaring
// // Complete the following program so that the square1() and square2() functions work properly.

// // Square the given number x
// function square1(x) {
//   return x * x;
// }

// // Square the given number x
// const square2 = (x) => x * x; // TODO: complete the function code

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

// // When it's done, update the program so that it shows the square of every number between 0 and 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(square1(i));
// }
// // Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)

// // Minimum of two numbers
// // Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// // TODO: write the min() function
// function min(firstNum, secondNum) {
//   if (firstNum > secondNum) {
//     return secondNum;
//   } else if (firstNum < secondNum) {
//     return firstNum;
//   } else {
//     return firstNum;
//   }
// }

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9)); // Must show 9
// console.log(min(1, 1)); // Must show 1

// // Calculator
// // Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// // TODO: complete program
// function calculate(firstNumber, operator, secondNumber) {
//   switch (operator) {
//     case "+":
//       return firstNumber + secondNumber;
//       break;
//     case "-":
//       return firstNumber - secondNumber;
//       break;
//     case "*":
//       return firstNumber * secondNumber;
//       break;
//     case "/":
//       return firstNumber / secondNumber;
//       break;
//     default:
//       return "Invalid operator.";
//       break;
//   }
// }

// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// // Circumference and area of a circle
// // Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// // Here are some tips for solving this exercise:

// // Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// // The value of number π (Pi) is obtained with Math.PI in JavaScript.
// // You might want to use the exponentiation operator ** to perform computations.

// function circumferenceOfCircle(radius) {
//   return Math.PI * (2 * radius);
// }

// function areaOfCircle(radius) {
//   return Math.PI * radius * radius;
// }

// console.log(circumferenceOfCircle(7));
// console.log(areaOfCircle(7));
// console.log(circumferenceOfCircle(14));
// console.log(areaOfCircle(14));

// Chapter 6. Coding Time!
// // Adding character experience
// // Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here
// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,

//   describe() {
//     return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
//   },
// };

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// // Modeling a dog
// // Complete the following program to add the dog object definition.

// // TODO: create the dog object here
// const dog = {
//   name: "Fang",
//   species: "boarhound",
//   size: 75,

//   bark() {
//     return "Grrr! Grrr!";
//   },
// };

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// // Modeling a bank account
// // Write a program that creates an account object with the following characteristics:

// // A name property set to "Alex".
// // A balance property set to 0.
// // A credit method adding the (positive or negative) value passed as an argument to the account balance.
// // A describe method returning the account description.
// // Use this object to show its description, crediting 250, debiting 80, then show its description again.

// const account = {
//   name: "Alex",
//   balance: 0,

//   credit(number) {
//     this.balance += number;
//   },
//   describe() {
//     return `owner: ${this.name}, balance: ${this.balance}`;
//   },
// };

// account.credit(50);
// account.credit(-350);
// console.log(account.describe());

// // Chapter 7 Coding time!
// // Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// // Musketeers
// // Write a program that:

// // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// // Shows each array element using a for loop.
// // Adds the "D'Artagnan" value to the array.
// // Shows each array element using the forEach() method.
// // Remove poor Aramis.
// // Shows each array element using a for-of loop.

// const musketeers = ["Athos", "Porthos", "Aramis"];
// for (let i = 0; i < musketeers.length; i++) {
//   console.log(musketeers[i]);
// }

// musketeers.push("D'Artagnan");

// musketeers.forEach((musketeer) => {
//   console.log(musketeer);
// });

// musketeers.splice(2, 1);

// for (const musketeer of musketeers) {
//   console.log(musketeer);
// }

// // Sum of values
// // Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

// function sumOfValues(arr) {
//   let sum = 0;
//   arr.forEach((value) => {
//     sum += value;
//   });
//   return sum;
// }

// console.log(sumOfValues(values));

// // Array maximum
// // Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

// function arrayMaximum(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(arrayMaximum(values));

// // List of words
// // Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// function askTheWord() {
//   const wordsContainer = [];
//   let word = "";

//   while (word !== "stop") {
//     word = prompt("Please give us the word.");
//     if (word === "stop") {
//       break;
//     } else {
//       wordsContainer.push(word);
//     }
//   }

//   wordsContainer.forEach((word) => {
//     console.log(word);
//   });
// }
// askTheWord();

// // Chapter 8. Coding time!
// // Word info
// // Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

// function wordInfo() {
//   const word = prompt("What is your word?");
//   if (Number(word)) {
//     console.log("This is number, not a word.");
//   } else {
//     console.log(
//       `The length of word is ${
//         word.length
//       }.\nThe lowercase form is: ${word.toLowerCase()}.\nThe uppercase form is: ${word.toUpperCase()}.\nThe vowel count is ${vowelCount(
//         word
//       )}.\nThe Backward form is: ${backwardForm(
//         word
//       )}.\nThe palindrome checker is: ${palindromeChecker(word)}`
//     );
//   }
// }

// wordInfo();

// // Vowel count
// // Improve the previous program so that it also shows the number of vowels inside the word.

// function vowelCount(word) {
//   // create an array of vowel letter and the variable to count it.
//   const vowelArray = ["a", "e", "i", "o", "u"];
//   let vowelSum = 0;

//   //   loop each vowel letter.
//   for (const vowel of vowelArray) {
//     // compare each vowel with each character inside the word.
//     for (let i = 0; i < word.length; i++) {
//       // if it matches, add the sum to one.
//       if (vowel === word[i].toLowerCase()) {
//         vowelSum += 1;
//       }
//     }
//   }

//   //   return the result of vowel number.
//   return vowelSum;
// }

// // Backwards word
// // Improve the previous program so that it shows the word written backwards.

// function backwardForm(word) {
//   let wordInBackward = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     wordInBackward += word[i];
//   }

//   return wordInBackward;
// }

// // Palindrome
// // Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// // "radar" should be detected as a palindrome, "Radar" too.

// function palindromeChecker(word) {
//   return word.toLowerCase() === backwardForm(word).toLowerCase();
// }

// // Chapter 9 Coding time!
// // Dogs
// // Complete the following program to add the definition of the Dog class.

// // Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// // TODO: define the Dog class here

// class Dog {
//   constructor(name, species, size) {
//     this.name = name;
//     this.species = species;
//     this.size = size;
//   }

//   // Bark function
//   bark() {
//     if (this.size > 60) {
//       return "Grrr! Grrr!";
//     } else {
//       return "Woof! Woof!";
//     }
//   }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// const borzoi = new Dog("Mike", "borzoi", 90);
// console.log(
//   `${borzoi.name} is a ${borzoi.species} dog measuring ${borzoi.size}`
// );
// console.log(`Look, a cat! ${borzoi.name} barks: ${borzoi.bark()}`);

// // Character inventory
// // Improve the example RPG to add character inventory management according to the following rules:

// // A character's inventory contains a number of gold and a number of keys.

// // Each character begins with 10 gold and 1 key.

// // The character description must show the inventory state.

// // When a character slays another character, the victim's inventory goes to its vanquisher.

// // Here's the expected execution result.
// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters

//     // Each character begins with 10 gold and 1 key.
//     this.gold = 10;
//     this.key = 1;
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0;
//         const bonusXP = 10;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} XP points, ${this.gold} gold and ${this.key} key(s).`
//         );
//         this.gold += target.gold;
//         this.key += target.key;
//         target.gold = 0;
//         target.key = 0;
//         this.xp += bonusXP;
//       }
//     } else {
//       console.log(`${this.name} can't attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s).`;
//   }
// }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// // Account list
// // Let's build upon a previous account object exercise. A bank account is still defined by:

// // A name property.
// // A balance property, initially set to 0.
// // A credit method adding the value passed as an argument to the account balance.
// // A describe method returning the account description.
// // Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

// class accountList {
//   constructor(name) {
//     this.name = name;
//     this.balance = 0;
//   }

//   credit(number) {
//     this.balance += number;
//   }

//   describe() {
//     return `owner: ${this.name}, balance: ${this.balance}`;
//   }
// }

// const sean = new accountList("Sean");
// const brad = new accountList("Brad");
// const georges = new accountList("Georges");

// const accountArray = [sean, brad, georges];

// for (const account of accountArray) {
//   account.credit(1000);
//   console.log(account.describe());
// }
