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

// // Coding Time! Chapter 02
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

// // Coding Time! Chapter 03
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

// Coding Time! Chapter 04
// Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.

// Write a program that launches a carousel for 10 turns, showing the turn number each time.
for (let i = 1; i <= 10; i++) {
  console.log("Carousel turn " + i);
}

let turn = 1;
while (turn <= 10) {
  console.log(`Carousel turn ${turn}`);
  turn++;
}

// When it's done, improve it so that the number of turns is given by the user.

let userTurn = Number(prompt("How many turns do you want for the carousel?"));

for (let i = 1; i <= userTurn; i++) {
  console.log(`Carousel turn ${i}`);
}

Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// Improve the program so that it also shows odd numbers.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  } else {
    console.log(`${i} is odd.`);
  }
}
// Improve it again to replace the initial number 1 by a number given by the user.
const startingNumber = Number(prompt("At what number do you want to start?"));

for (let i = startingNumber; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  } else {
    console.log(`${i} is odd.`);
  }
}

// This program must show exactly 10 numbers including the first one, not 11 numbers!

Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.

making variable above one hundred so the condition is true for the first attempt.
let number = 101;

while (number > 100) {
  number = Number(prompt("Please put the number less than or equal to 100:"));
  console.log(number);
}

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let number = 101;

while (number > 100 || number < 50) {
  number = Number(
    prompt(
      "Please put the number more than and equal to 50 and less than or equal to 100:"
    )
  );
  console.log(number);
}

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

let theNumber = Number(prompt("What is your number?"));

for (let i = 1; i <= theNumber; i++) {
  console.log(`${i} x ${theNumber} = ${i * theNumber}`);
}

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let theNumber = 1;

while (!(theNumber >= 2 && theNumber <= 9)) {
  theNumber = Number(prompt("What is your number? Only put 2 to 9"));
}

for (let i = 1; i <= theNumber; i++) {
  console.log(`${i} x ${theNumber} = ${i * theNumber}`);
}

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let text = "";

while (text !== "yes" && text !== "no") {
  text = prompt('This program will end when you write "yes" or "no"');
}

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for (let i = 1; i <= 100; i++) {
  let shownWord = "";
  if (i % 3 === 0) shownWord += "Fizz";
  if (i % 5 === 0) shownWord += "Buzz";

  shownWord ? console.log(shownWord) : console.log(i);
}

// This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!
