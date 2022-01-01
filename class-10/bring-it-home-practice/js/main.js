// *Variables*
// Create a variable and console log the value
let number = 500;
console.log(number);

// Create a variable, add 10 to it, and alert the value
let newNumber = 500 + 10;
alert(newNumber);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractFourNumbers(a, b, c, d) {
    alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder
function dividesOneAnother(a, b) {
    return a / b;
}

console.log(dividesOneAnother(50, 20))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function newSum(a, b) {
    total = a + b;
    if (total > 50) {
        alert("Jumanji!")
    }
    console.log(total);
}
newSum(30, 50);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function newMultiply(a, b, c) {
    total = a * b * c;
    if (total % 3 === 0) {
        alert("ZEBRAAAAA")
    }
    console.log(total);
}

newMultiply(10, 3, 3);