//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  color: "black",
  waterResistance: true,
  timerList: ["minutes", "seconds", "miliseconds"],
  unitOfTime: 3,
  timeFeature() {
    alert(`This stopwatch has ${this.timerList.join(", ")} timer.`);
  },
  isWaterResistance() {
    if (this.waterResistance) {
      alert("This is safe for underwater sport.");
    } else {
      alert("Don't use this for water sports.");
    }
  },
  pushedButtonSound() {
    alert("beeb beeeb beeeeb");
  },
};
