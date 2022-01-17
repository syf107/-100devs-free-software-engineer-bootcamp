//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(fighterName, fighterSex, fighterStyle, fighterSuperMoves) {
  this.name = fighterName;
  this.sex = fighterSex;
  this.fightingStyle = fighterStyle;
  this.superMoves = fighterSuperMoves;

  this.introduction = function () {
    alert(
      `The fighter's name is ${this.fighterName}. The fighting style is ${this.fightingStyle}.`
    );
  };
  this.criticalArt = function () {
    alert(
      `You see, his ${this.fighterSuperMoves} is really dangerous. Dodge it.`
    );
  };
  this.chooseMe = function () {
    alert("You have choose me, master!");
  };
}

const ryu = new MakeFighter("Ryu", "Male", "Ansatsuken", "Shidou Hadouken");
console.log(ryu.name);
console.log(ryu.sex);
console.log(ryu.fightingStyle);
console.log(ryu.superMoves);
ryu.introduction();
ryu.criticalArt();
ryu.chooseMe();

const chunLi = new MakeFighter(
  "Chun-Li",
  "Female",
  "Chinese Martial Arts",
  "Hoyokusen"
);
console.log(chunLi.name);
console.log(chunLi.sex);
console.log(chunLi.fightingStyle);
console.log(chunLi.superMoves);
chunLi.introduction();
chunLi.criticalArt();
chunLi.chooseMe();

// const ryu = new MakeFighter("Ryu", "Male", "Ansatsuken", "Shidou Hadouken");
// console.log(ryu.name);
// console.log(ryu.sex);
// console.log(ryu.fightingStyle);
// console.log(ryu.introduction());
// console.log(ryu.criticalArt());
// console.log(ryu.chooseMe());
