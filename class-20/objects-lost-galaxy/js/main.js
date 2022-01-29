//Create a dog object that has four properties and three methods
const dog = {};
dog.name = "Spike";
dog.race = "Borzoi";
dog.sex = "male";
dog.color = "white";

dog.bark = function () {
  alert("WARF WARF WARF");
};

dog.sit = function () {
  alert("The dog sits on the floor.");
};

dog.run = function () {
  alert(`${this.name} runs fast.`);
};
