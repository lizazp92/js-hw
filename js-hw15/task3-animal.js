// 3. Create a class hierarchy representing different types of animals in a zoo.
// Use inheritance to create a base class Animal and derived classes
// like Mammal, Bird, and Reptile. Each class should have appropriate properties and methods.
// Should have properties name, species and method makeSound().
// Override the makeSound() method to log an appropriate sound for each type.

class Animal {
  constructor(name, species, diet) {
    if (typeof name === "string" && name.length > 2) {
      this._name = name;
    } else {
      this._name = "not defined";
    }
    if (typeof species === "string" && species.length > 2) {
      this._species = species;
    } else {
      this._species = "not defined";
    }
    if (typeof diet === "string" && diet.length > 2) {
      this._diet = diet;
    } else {
      this._diet = "not defined";
    }
  }

  get name() {
    return this._name;
  }
  get species() {
    return this._species;
  }
  get diet() {
    return this._diet;
  }

  set name(value) {
    if (typeof value === "string" && value.length > 2) {
      this._name = value;
    } else {
      this._name = "not defined";
    }
  }
  set species(value) {
    if (typeof value === "string" && value.length > 2) {
      this._species = value;
    } else {
      this._species = "not defined";
    }
  }

  set diet(value) {
    if (typeof value === "string" && value.length > 2) {
      this._diet = value;
    } else {
      this._diet = "not defined";
    }
  }
  animalInfo() {
    console.log(`Name: ${this.name}.
    Species: ${this.species}.
    Diet: ${this.diet}.`);
  }
  makeSound() {
    console.log(`This animal makes a sound`);
  }
}

class Mammal extends Animal {
  constructor(name, species, diet, isPregnant, sound) {
    super(name, species, diet);

    if (typeof isPregnant === "boolean") {
      this._isPregnant = isPregnant;
    } else {
      this._isPregnant = false;
    }

    if (typeof sound === "string") {
      this._sound = sound;
    } else {
      this._sound = "AAAA";
    }
  }
  get isPregnant() {
    return this._isPregnant;
  }
  get sound() {
    return this._sound;
  }
  set isPregnant(value) {
    if (typeof value === "boolean") {
      this._isPregnant = value;
    } else {
      this._isPregnant = false;
    }
  }
  set sound(value) {
    if (typeof value === "string") {
      this._sound = value;
    } else {
      this._sound = "AAAA";
    }
  }
  animalInfo() {
    super.animalInfo();
    console.log(`${this.name} is pregnant: ${this.isPregnant}.`);
  }
  makeSound() {
    console.log(`${this.species} is making this sound: ${this.sound}!`);
  }
}

class Bird extends Animal {
  constructor(name, species, diet, areal, sound) {
    super(name, species, diet);
    if (typeof areal === "string") {
      this._areal = areal;
    } else {
      this._areal = "wood";
    }

    if (typeof sound === "string") {
      this._sound = sound;
    } else {
      this._sound = "pipipi";
    }
  }

  get areal() {
    return this._areal;
  }

  get sound() {
    return this._sound;
  }

  set areal(value) {
    if (typeof value === "string") {
      this._areal = value;
    } else {
      this._areal = "wood";
    }
  }

  set sound(value) {
    if (typeof value === "string") {
      this._sound = value;
    } else {
      this._sound = "pipipi";
    }
  }
  animalInfo() {
    super.animalInfo();
    console.log(`Areal: ${this.areal}.`);
  }
  makeSound() {
    console.log(`${this.species} is making this sound: ${this.sound}!`);
  }
}

class Reptile extends Animal {
  constructor(name, species, diet, isVenomous, sound) {
    super(name, species, diet);
    if (typeof isVenomous === "boolean") {
      this._isVenomous = isVenomous;
    } else {
      this._isVenomous = false;
    }

    if (typeof sound === "string") {
      this._sound = sound;
    } else {
      this._sound = "no sound";
    }
  }

  get isVenomous() {
    return this._isVenomous;
  }

  get sound() {
    return this._sound;
  }

  set isVenomous(value) {
    if (typeof value === "boolean") {
      this._isVenomous = value;
    } else {
      this._isVenomous = false;
    }
  }

  set sound(value) {
    if (typeof value === "string") {
      this._sound = value;
    } else {
      this._sound = "no sound";
    }
  }
  animalInfo() {
    super.animalInfo();
    console.log(`This reptile is venomous: ${this.isVenomous}.`);
  }
  makeSound() {
    console.log(`${this.species} is making this sound: ${this.sound}!`);
  }
}

// MAMMAL
const zebra = new Mammal("Ana", "mountain zebra", "herbivores", true, "RRRRR");
zebra.animalInfo();
zebra.makeSound();

// BIRD
const crow = new Bird("Jack", "Corvus", "omnivorous", "city", "KAR");
crow.animalInfo();
crow.makeSound();

// REPTILE
const redFrog = new Reptile(
  "Ada",
  "Ranitomeya",
  "they will eat you",
  true,
  "KVAH"
);
redFrog.animalInfo();
redFrog.makeSound();
