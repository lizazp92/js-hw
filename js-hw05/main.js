/* 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
 and the following methods for working with this object:

-A method that displays the car info 
-A method for counting a time frame necessary to cover a given distance with the average speed. 
Note that every 4 hours the driver has to take a 1-hour break. */

let car = {
  manufacturer: "Audi",
  model: "A4",
  releaseYear: 1997,
  averageSpeed: "50km/h",
  calculateTime: function (distance) {
    let time = distance / this.averageSpeed.split("k")[0];
    let numberOfBreaks = parseInt(time / 4);
    return time + numberOfBreaks;
  },
};
for (let key in car) {
  if (typeof car[key] != "function") {
    console.log(`${key}: ${car[key]}`);
  }
}
console.log(`Needed time to cover the distance: ${car.calculateTime(250)} h`);

/* 2. Create an object that contains separately the numerator and the denominator 
of a fraction, and the following functions for working with this object:

-A function for adding two fraction objects.
-A function for subtracting two fraction objects.
-A function for multiplying two fraction objects.
-A function for dividing two fraction objects.
-A function for simplifying a fraction object */

let fraction = {};
