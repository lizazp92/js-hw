/* 1. Create a “groceries list” array. 
Each element of the array is an object that contains the name of a product, 
an amount needed and whether it is bought or not. 

Display the entire list, so that the not yet purchased items go before the bought ones. */

// const groceriesList = [
//   { productName: "apples", ammount: 20, isBought: false },
//   { productName: "milk", ammount: 1, isBought: true },
//   { productName: "pasta", ammount: 1, isBought: true },
//   { productName: "beans", ammount: 3, isBought: false },
//   { productName: "yogurt", ammount: 5, isBought: false },
//   { productName: "oranges", ammount: 10, isBought: true },
// ];
// groceriesList.sort((a, b) => a.isBought - b.isBought);
// console.log(groceriesList);

/* Adding a purchase to the list. 
Note that if a product already exists, the amount needs to be 
increased in the existing purchase, not in a new one. */

// function newPurchase(item) {
//   const productExist = groceriesList.find(
//     (element) => item === element.productName
//   );
//   if (productExist) {
//     productExist.ammount++;
//     console.log(groceriesList);
//   } else {
//     const productNew = {
//       productName: item,
//       ammount: 1,
//       isBought: true,
//     };
//     console.log(groceriesList.concat(productNew));
//   }
// }

// newPurchase("beans");
// newPurchase("watermelon");

/* Purchasing a product. The function accepts the name of a product and marks it as bought. */

// function productBought(item) {
//   const productExist = groceriesList.find(
//     (element) => item === element.productName
//   );
//   if (productExist) {
//     productExist.isBought = true;
//     console.log(groceriesList);
//   } else {
//     console.log(`${item} is not in a grocery list`);
//   }
// }

// productBought("beans");
// productBought("potatoes");

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
  for (i = 0; i < shopReceipt.length; i++) {
    sum += shopReceipt[i].ammount * shopReceipt[i].pricePerItem;
  }
  return sum;
}

// console.log(shopReceipt);
// console.log(`Yor total is ${receiptSum()} USD.`);

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
