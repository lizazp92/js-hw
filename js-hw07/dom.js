/* 1. Ask user for age, if user is below 18, display a warning message that he is underaged, 
if he is over show him alcohol page. */

const age = prompt("What is your age?");
const header = document.querySelector("header");
const main = document.querySelector("main");
const menu = [
  { name: "Beer", price: 3.5 },
  { name: "White wine", price: 1.5 },
  { name: "Red wine", price: 1.6 },
  { name: "Margarita", price: 5 },
  { name: "Sunrise", price: 6.2 },
];

if (age < 18) {
  const newStr = document.createElement("h1");
  newStr.innerText = "You are underaged!";
  newStr.setAttribute("class", "underaged");
  header.append(newStr);
} else if (age > 18) {
  const newStr2 = document.createElement("h1");
  newStr2.innerText = "Welcome to our bar!";
  newStr2.setAttribute("class", "welcome");
  header.append(newStr2);

  const newStr3 = document.createElement("h2");
  newStr3.innerText = "Our menu";
  main.append(newStr3);

  const menuList = document.createElement("ul");
  main.append(menuList);
  menu.forEach((drink, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${index + 1}. ${drink.name} - ${drink.price} UAH.`;
    menuList.append(listItem);
  });
}
