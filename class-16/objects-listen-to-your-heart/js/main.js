//Create a stopwatch object that has four properties and three methods
const stopWatch = {
  color: "black",
  counter: 3,
  minutesCounter: ["minutes", "seconds", "miliseconds"],
  waterResistance: true,
  brandName: "ACCUSPLIT",
  isWaterResistance() {
    if (this.waterResistance) {
      return "This stopwatch is water resistance! You can use this for underwater sport.";
    } else {
      return "Please don't use it for underwater sports.";
    }
  },
  howManyCounter() {
    return `This stopwatch has ${
      this.counter
    } counters. It is ${this.minutesCounter.join(", ")}.`;
  },
  start() {
    `BEEP BEEP!!!`;
  },
};

console.log(stopWatch.isWaterResistance());
console.log(stopWatch.howManyCounter());
