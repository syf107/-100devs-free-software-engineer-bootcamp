//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class CreatePokemon {
  constructor(name, element, level, strong, weakness) {
    this.name = name;
    this.element = element;
    this.level = level;
    this.strong = strong;
    this.weakness = weakness;
  }

  introduction() {
    console.log(
      `The pokemon name is ${this.name} and has ${this.element} element. It is strong against ${this.strong} element and weak against ${this.weakness}`
    );
  }
}

const pikachu = new CreatePokemon("Pikachu", "Thunder", 12, "Water", "Iron");

// console.log(pikachu.int)
