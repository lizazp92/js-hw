/* 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
 and the following methods for working with this object:

-A method that displays the car info 
-A method for counting a time frame necessary to cover a given distance with the average speed. 
Note that every 4 hours the driver has to take a 1-hour break. */

// const car = {
//   manufacturer: "Audi",
//   model: "A4",
//   releaseYear: 1997,
//   averageSpeed: "50km/h",
//   calculateTime: function (distance) {
//     let time = distance / this.averageSpeed.split("k")[0];
//     let numberOfBreaks = parseInt(time / 4);
//     return time + numberOfBreaks;
//   },
// };
// for (let key in car) {
//   if (typeof car[key] != "function") {
//     console.log(`${key}: ${car[key]}`);
//   }
// }
// console.log(`Needed time to cover the distance: ${car.calculateTime(250)} h`);

/* 2. Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. 
All of them should have unique ids, ages and addresses. 
Show which is the oldest and which is the youngest. */

// const dog1 = {
//   name: "John",
//   id: 1,
//   age: 3,
//   address: "John St 12",
//   nameAge() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// const dog2 = {
//   name: "Ivan",
//   id: 2,
//   age: 6,
//   address: "Ivan St 26",
//   nameAge() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// const dog3 = {
//   name: "Teddy",
//   id: 3,
//   age: 7,
//   address: "Teddy St 19",
//   nameAge() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// const dog4 = {
//   name: "Rocco",
//   id: 4,
//   age: 9,
//   address: "Rocco St 2",
//   nameAge() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// const dog5 = {
//   name: "Sparky",
//   id: 4,
//   age: 2,
//   address: "Sparky St 105",
//   nameAge() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// let dogYoungest = Math.min(dog1.age, dog2.age, dog3.age, dog4.age, dog5.age);
// let dogOldest = Math.max(dog1.age, dog2.age, dog3.age, dog4.age, dog5.age);
// switch (dogYoungest) {
//   case dog1.age:
//     console.log(`The youngest dog is ${dog1.name}.`);
//     break;
//   case dog2.age:
//     console.log(`The youngest dog is ${dog2.name}.`);
//     break;
//   case dog3.age:
//     console.log(`The youngest dog is ${dog3.name}.`);
//     break;
//   case dog4.age:
//     console.log(`The youngest dog is ${dog4.name}.`);
//     break;
//   case dog5.age:
//     console.log(`The youngest dog is ${dog5.name}.`);
//     break;
// }
// switch (dogOldest) {
//   case dog1.age:
//     console.log(`The oldest dog is ${dog1.name}.`);
//     break;
//   case dog2.age:
//     console.log(`The oldest dog is ${dog2.name}.`);
//     break;
//   case dog3.age:
//     console.log(`The oldest dog is ${dog3.name}.`);
//     break;
//   case dog4.age:
//     console.log(`The oldest dog is ${dog4.name}.`);
//     break;
//   case dog5.age:
//     console.log(`The oldest dog is ${dog5.name}.`);
//     break;
// }

// 3. Use the previous objects and show a list with their names and ages
// dog1.nameAge(), dog2.nameAge(), dog3.nameAge(), dog4.nameAge(), dog5.nameAge();

/* 4. Create 2 people - Joye and Rachel. 
They have to have age and a greeting which will say 
“Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!” */

// const person1 = {
//   name: "Joye",
//   age: 25,
//   greeting() {
//     console.log(
//       `Hi, my name is ${this.name} and I am ${this.age} old. Nice to meet you!`
//     );
//   },
// };
// const person2 = {
//   name: "Rachel",
//   age: 26,
//   greeting() {
//     console.log(
//       `Hi, my name is ${this.name} and I am ${this.age} old. Nice to meet you!`
//     );
//   },
// };

// person1.greeting();
// person2.greeting();

/* 5. Create an object circle with a property radius and a method calculateArea. 
The calculateArea method should calculate and return the area of the circle using the formula: 
area = π * radius^2. Now, create another object smallCircle with its own radius, 
and use the bind method to bind the calculateArea method from circle to smallCircle. 
Call the calculateArea method on smallCircle and print the area. */

// const pi = 3.14;
// const circle = {
//   radius: 50,
//   calculateArea() {
//     console.log(pi * this.radius * this.radius);
//   },
// };

// const smallCircle = {
//   radius: 2000,
// };
// let calculateArea = circle.calculateArea.bind(smallCircle);
// calculateArea();

// 6. Create an object with properties. These properties cannot be deleted

// const person3 = {
//   name: "Mary",
//   age: 22,
// };
// Object.seal(person3);
// delete person3.age;
// console.log(person3);

// 7. Create an object with properties. These properties cannot be changed

const person4 = {
  name: "Peter",
  hobby: "art",
};
Object.freeze(person4);
person4.hobby = "cooking";
console.log(person4);
