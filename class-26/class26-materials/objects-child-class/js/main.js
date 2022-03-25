//Create an a class and extend it - Can be anything you would like it to be!

class SuperHuman {
  constructor(name, superpower) {
    this.name = name;
    this.superpower = superpower;
  }

  introduction() {
    console.log(
      `Hello, I'm ${this.name} and I have ${this.superpower} as superpower.`
    );
  }
}

class Superhero extends SuperHuman {
  constructor(name, superpower, location) {
    super(name);
    super(superpower);
    this.locaton = location;
  }

  get name() {
    return this.name;
  }

  intro() {
    super.introduction();
    console.log(`I am protecting ${this.location} from any villains.`);
  }
}

const spiderman = new Superhero("Spiderman", "Spider-Like Superhuman", "Texas");

console.log(spiderman);
console.log(spiderman.name);
console.log(spiderman.name);
console.log(spiderman.superpower);
console.log(spiderman.location);
