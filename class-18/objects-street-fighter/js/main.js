//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter(name, sex, martialArt, specialMove) {
  this.name = name;
  this.sex = sex;
  this.martialArt = martialArt;
  this.speciaMove = specialMove;

  this.introduction = function () {
    alert(`The fighter name is ${this.name}. It is the ${this.sex} fighter.`);
  };
  this.fight = function () {
    alert("PUNCH PUNCH PUNCH KICK KICK KICK");
  };
  this.specialHit = function () {
    alert(`Beware!! This special hit ${this.speciaMove} will drain your HP.`);
  };
}

const Ryu = new streetFighter(
  "Ryu",
  "male",
  "Mix Chinese Martial Arts",
  "Hadouken"
);

console.log(Ryu.name, Ryu["sex"], Ryu.martialArt, Ryu.speciaMove);
