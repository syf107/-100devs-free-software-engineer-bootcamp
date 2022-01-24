//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(name, sexuality, skateBoardDeckMaterials, wheelsColor) {
  this.name = name;
  this.sexuality = sexuality;
  this.skateBoardDeck = skateBoardDeckMaterials;
  this.wheelsColor = wheelsColor;

  this.kickFlip = function () {
    alert(`${this.name} does the kickflip.`);
  };
  this.skateboard = function () {
    alert(
      `${this.name} uses ${this.skateBoardDeck} skateboard with ${this.wheelsColor} wheels.`
    );
  };
  this.introduction = function () {
    alert(`The skater name is ${this.name}. A ${this.sexuality} skater.`);
  };
}

const tonyHawk = new ProSkater("Tony Hawk", "male", "Wooden", "yellow");
ProSkater.prototype.stillActive = false;
tonyHawk.introduction();
tonyHawk.skateboard();
console.log(tonyHawk.stillActive);
