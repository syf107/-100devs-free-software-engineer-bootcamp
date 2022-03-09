//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(espressoName, espressoManufacturer, espressoColor, espressoSize) {
    this.name = espressoName;
    this.manufacturer = espressoManufacturer;
    this.machineColor = espressoColor;
    this.size = espressoSize;
  }

  introduction() {
    console.log(
      `This is ${this.name} machine from ${this.manufacturer}. It has ${this.machineColor} color and ${this.size} size.`
    );
  }

  grindingCoffeBeans() {
    console.log("This machine currently grinding the coffe beans.");
  }

  pourTheHotWater() {
    console.log("The machine pours the hot water to the coffee powder.");
  }

  brewingMilk() {
    console.log("Give me the milk and we will brew it.");
  }
}

const kopiTuku = new EspressoMachine("Leon", "Italy", "Brown", "Large");

kopiTuku.introduction();
kopiTuku.pourTheHotWater();
kopiTuku.brewingMilk();
