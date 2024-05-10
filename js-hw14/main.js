// 1. Create a factory function that generates person objects with the following
//  properties: name, age, and job.
//  Also, add a method called introduce that logs a message introducing the person.

function createPerson(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    introduce: function () {
      if (
        isNaN(age) ||
        age > 90 ||
        age < 18 ||
        name.length >= 15 ||
        job.length >= 15
      ) {
        console.log(`Incorrect input`);
      } else
        console.log(
          `Hello, I am ${name}, I am ${age} years old, I am a ${job}.`
        );
    },
  };
}
const person1 = createPerson("Mario", 50, "barber");
person1.introduce();

// 2. Create a factory function that generates bank account objects with
// properties accountNumber, accountHolder, and balance.
// Implement methods for depositing and withdrawing funds from the account.

function bankAccount(accountNumber, accountHolder, balance) {
  if (
    isNaN(accountNumber) ||
    accountNumber.length > 10 ||
    accountNumber.length < 3 ||
    !isNaN(accountHolder) ||
    accountHolder.length >= 15 ||
    accountHolder.length < 3 ||
    isNaN(balance)
  ) {
    console.log(`Incorrect input`);
    return;
  }
  return {
    accountNumber: accountNumber,
    accountHolder: accountHolder,
    balance: balance,
    deposit: function (sum) {
      balance += sum;
      console.log(
        `${accountHolder} (account ${accountNumber}) deposited ${sum} USD. Balance: ${balance} USD.`
      );
    },
    withdraw: function (sum) {
      balance -= sum;
      console.log(
        `${accountHolder} (account ${accountNumber}) withdrew ${sum} USD. Balance: ${balance} USD.`
      );
    },
  };
}
const person2 = bankAccount(3423434, "Mario Puccini", 10.5);
person2.deposit(5);
person2.withdraw(6);

// 3. Create a constructor function named Animal that takes species,
// name, and sound as parameters and creates animal objects.
// Include a method called makeSound that logs the sound the animal makes.

function Animal(species, name, sound) {
  if (
    !isNaN(species) ||
    species.length > 10 ||
    species.length < 3 ||
    !isNaN(name) ||
    name.length >= 10 ||
    name.length < 3 ||
    !isNaN(sound) ||
    sound.length > 6 ||
    sound.length < 0
  ) {
    console.log(`Incorrect input`);
    return;
  }
  this.species = species;
  this.name = name;
  this.sound = sound;
  this.makeSound = function () {
    console.log(`${name} of ${species} species makes this sound: "${sound}".`);
  };
}

const panda = new Animal("Mammal", "Panda", "AAA");
panda.makeSound();

// 4. Create a constructor function named Book that takes title,
// author, and pages as parameters and creates book objects.
// Implement a method called read that logs a message indicating the book has been read.

function Book(title, author, pages) {
  if (
    !isNaN(title) ||
    title.length > 10 ||
    title.length <= 0 ||
    !isNaN(author) ||
    author.length >= 15 ||
    author.length < 2 ||
    isNaN(pages) ||
    pages > 1000 ||
    pages <= 0
  ) {
    console.log(`Incorrect input`);
    return;
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function () {
    console.log(`${title} by ${author} (${pages} pages) has been read.`);
  };
}

const book1 = new Book("LOTR", "J.R.R.Tolkien", 333);
book1.read();

// 5. Create a class called Student with a constructor that takes name,
// age, and grade as parameters. Add a method called study that logs
//  a message indicating the student is studying.

class Student {
  constructor(name, age, grade) {
    if (
      !isNaN(name) ||
      name.length > 10 ||
      name.length <= 1 ||
      isNaN(age) ||
      age >= 18 ||
      age < 5 ||
      isNaN(grade) ||
      grade > 12 ||
      grade <= 0
    ) {
      console.log(`Incorrect input`);
      return;
    }
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  study() {
    console.log(
      `${this.name} (age ${this.age} and grade ${this.grade}) studies well.`
    );
  }
}
const student1 = new Student("Kat", 9, 7);
student1.study();
