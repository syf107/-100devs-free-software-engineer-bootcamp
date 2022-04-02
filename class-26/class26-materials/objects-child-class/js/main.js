//Create an a class and extend it - Can be anything you would like it to be!

class SuperHuman {
  constructor(name, superpower) {
    this._name = name;
    this._superpower = superpower;
  }

  get name() {
    return this._name;
  }

  get superpower() {
    return this._superpower;
  }

  introduction() {
    console.log(
      `Hello, I'm ${this.name} and I have ${this.superpower} as superpower.`
    );
  }
}

class Superhero extends SuperHuman {
  constructor(name, superpower, location) {
    super(name, superpower);
    this._location = location;
  }

  get location() {
    return this._location;
  }

  introduction() {
    super.introduction();
    console.log(`I am protecting ${this.location} from any villains.`);
  }
}

const spiderman = new Superhero("Spiderman", "Spider-Like Superhuman", "Texas");

console.log(spiderman);
console.log(spiderman.name);
console.log(spiderman.location);
console.log(spiderman.superpower);
