/* 1. Create a “groceries list” array. 
Each element of the array is an object that contains the name of a product, 
an amount needed and whether it is bought or not. 

Display the entire list, so that the not yet purchased items go before the bought ones. */

const groceriesList = [
  { productName: "apples", ammount: 20, isBought: false },
  { productName: "milk", ammount: 1, isBought: true },
  { productName: "pasta", ammount: 1, isBought: true },
  { productName: "beans", ammount: 3, isBought: false },
  { productName: "yogurt", ammount: 5, isBought: false },
  { productName: "oranges", ammount: 10, isBought: true },
];
groceriesList.sort((a, b) => a.isBought - b.isBought);
console.log(groceriesList);

/* Adding a purchase to the list. 
Note that if a product already exists, the amount needs to be 
increased in the existing purchase, not in a new one. */

function newPurchase(item) {
  const productExist = groceriesList.find(
    (element) => item === element.productName
  );
  if (productExist) {
    productExist.ammount++;
    console.log(groceriesList);
  } else {
    const productNew = {
      productName: item,
      ammount: 1,
      isBought: true,
    };
    console.log(groceriesList.concat(productNew));
  }
}

newPurchase("beans");
newPurchase("watermelon");

/* Purchasing a product. The function accepts the name of a product and marks it as bought. */

function productBought(item) {
  const productExist = groceriesList.find(
    (element) => item === element.productName
  );
  if (productExist) {
    productExist.isBought = true;
    console.log(groceriesList);
  } else {
    console.log(`${item} is not in a grocery list`);
  }
}

productBought("beans");
productBought("potatoes");

/* 2. Create an array that describes a shop receipt. 
Each element of the array consists of the name of the product, an amount bought, 
and price per item. Write the following functions. 

- Print the receipt out on the screen.
- Counting the sum of the purchase.
- Extracting the most expensive item on the receipt.
- Counting an average item price on the receipt. */

const shopReceipt = [
  { productName: "apples", ammount: 20, pricePerItem: 1.05 },
  { productName: "milk", ammount: 1, pricePerItem: 8.2 },
  { productName: "pasta", ammount: 1, pricePerItem: 3.4 },
  { productName: "beans", ammount: 3, pricePerItem: 5.0 },
  { productName: "yogurt", ammount: 5, pricePerItem: 10.35 },
  { productName: "oranges", ammount: 10, pricePerItem: 1.7 },
];

function receiptSum() {
  let sum = 0;
  for (let product in shopReceipt) {
    sum += shopReceipt[product].ammount * shopReceipt[product].pricePerItem;
  }
  return sum;
}

console.log(shopReceipt);
console.log(`Yor total is ${receiptSum()} USD.`);

function itemMostExpensive() {
  shopReceipt.sort((a, b) => b.pricePerItem - a.pricePerItem);
  return shopReceipt[0];
}
console.log(
  "The most expensive item is " +
    itemMostExpensive().productName +
    " with price of " +
    itemMostExpensive().pricePerItem +
    " USD."
);

function averageItem() {
  const sum = receiptSum();
  const averagePrice = sum / shopReceipt.length;
  return averagePrice.toFixed(2);
}

console.log("The average item price costs " + averageItem() + " USD.");

/* 3. Create an array of academy classrooms. 
A classroom object consists of a name, a number of seats (10 to 20) 
and the faculty it is meant for. Write a few functions for working with it.
 */

const academyClassrooms = [
  { name: "A101", seatsNumber: 20, faculty: "JS" },
  { name: "C105", seatsNumber: 15, faculty: "C++" },
  { name: "D305", seatsNumber: 16, faculty: "Java" },
  { name: "Z20", seatsNumber: 12, faculty: "Kotlin" },
  { name: "E206", seatsNumber: 13, faculty: "JS" },
  { name: "A900", seatsNumber: 14, faculty: "Java" },
];

// - A function for sorting all the classrooms by number of seats.

function seatsSorting() {
  academyClassrooms.sort((a, b) => a.seatsNumber - b.seatsNumber);
  console.log(academyClassrooms);
}
seatsSorting();

// - A function for sorting all the classrooms by name in alphabetical order.

function nameSorting() {
  academyClassrooms.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(academyClassrooms);
}
nameSorting();

// - Display all the classrooms for a given faculty.

function specificFaculty(name) {
  const facultyFind = academyClassrooms.filter(
    (facultySpecific) => name === facultySpecific.faculty
  );
  console.log(facultyFind);
}
specificFaculty("Java");

/* - Display only the classrooms that would fit a given group. */

function fitGroup(number) {
  const groupFit = academyClassrooms.filter(
    (peopleNumber) => number >= peopleNumber.seatsNumber
  );
  console.log(groupFit);
}
fitGroup(15);

/* 4. So now I think I can write less code (dog task from the object lesson):
Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. 
All of them should have unique ids, ages and addresses. 
Show which is the oldest and which is the youngest. */

const dogs = [
  { name: "John", id: 1, age: 3, address: "John St 12" },
  { name: "Ivan", id: 2, age: 6, address: "Ivan St 26" },
  { name: "Teddy", id: 3, age: 7, address: "Teddy St 19" },
  { name: "Rocco", id: 4, age: 9, address: "Rocco St 2" },
  { name: "Sparky", id: 4, age: 2, address: "Sparky St 105" },
];

function dogAge() {
  dogs.sort((a, b) => b.age - a.age);
  console.log(
    "The oldest dog is " + dogs[0].name + " with the age of " + dogs[0].age
  );
  console.log(
    "The youngest dog is " +
      dogs[dogs.length - 1].name +
      " with the age of " +
      dogs[dogs.length - 1].age
  );
}
dogAge();
