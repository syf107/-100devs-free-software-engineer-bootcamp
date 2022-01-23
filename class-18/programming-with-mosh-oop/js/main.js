// // ENCAPSULATION
// // Encapsulation is the concept to contain each variable and function inside the object as property and methods. This will make the function easier to write and get lesser error. As everything is already inside the object.
// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// // this is the procedural programming to solve this problem.
// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }

// console.log(getWage(baseSalary, overtime, rate));

// // this is the example doing the code in Object oriented programming.
// // it uses lesser parameter as everything is in one object.
// let employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// // Abstraction
// // Abstraction is the concept to hide the functionality(methods) of the function from the outside.

// // Inheritance
// // Inheritance helps us to eliminate the redundant code because sometimes different features of function have same code.

// Creating Objects Literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);
// console.log(circle.radius);
// circle.draw();

// // Constructor Function

// function Circle(radius) {
//   console.log("this", this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// Constructor property

// another.constructor
// ƒ Circle(radius) {
//   console.log("this", this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// circle.constructor
// ƒ Object() { [native code] }

// In building with factory, it return the built in constructor object.
// It's like when we define string, number in literal ways.

// Functions are objects.
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3])

// const another = new Circle(1);

// // Value vs Reference
// // Value Types: Number, String, Boolean,  Symbol, Undefined, Null
// // Reference Types: Object, Function, Array
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// // Primitive are copied by their value.
// // Objects are copied by their reference.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// circle.location = { x: 1 };

// const propertyName = "center location";
// circle[propertyName] = { x: 1 };

// delete circle[location];

// // Enumerating properties.
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// for (let key in circle) {
//   if (typeof circle[key] !== "function") {
//     console.log(key, circle[key]);
//   }
// }

// // to show every key value in the array.
// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) console.log("Circle has a radius.");

// Abstraction
// Hide the details, shows the essentials.
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function (factor) {
//     // ...
//   };
//   this.draw = function () {
//     let x, y;
//     computeOptimumLocation(0.1);
//     // defaultLocation
//     // this.radius

//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// circle.draw();

// // Getter/Setters
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("Invalid location.");

//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();

// Stopwatch Exercise
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
