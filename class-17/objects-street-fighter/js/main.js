//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter(name, sex, martialArt, specialMoves) {
  this.name = name;
  this.sex = sex;
  this.martialArt = martialArt;
  this.specialMoves = specialMoves;
  this.introduction = function () {
    alert(
      `The fighter name is ${this.name}. ${
        this.sex === "male" ? "He" : "She"
      } is the ${this.sex} fighter.`
    );
  };
  this.fight = function () {
    alert("Punch punch punch" + this.specialMoves);
  };
  this.ultimate = function () {
    alert(`${this.specialMoves} is super deadly`);
  };
}

const chunLi = new streetFighter(
  "ChunLi",
  "female",
  "Chinese Martial Arts",
  "Destroyer"
);
