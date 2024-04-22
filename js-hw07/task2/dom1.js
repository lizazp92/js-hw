/* Add this list to your page: 

<div class="container">
<ul class="list">
  <li class="item">Dave</li>
  <li class="item">John</li>
  <li class="item">Ivan</li>
  <li class="item">Sam</li>
  <li class="item">Mel</li>
  <li class="item">Diana</li>
</ul>
</div> */

const main = document.querySelector("main");
const container = document.createElement("div");
container.setAttribute("class", "container");
main.append(container);
const ul = document.createElement("ul");
ul.setAttribute("class", "list");
container.append(ul);

const names = ["Dave", "John", "Ivan", "Sam", "Mel", "Diana"];

// Add Smith, Jeff and Larry in the top, middle and end of the list

names.unshift("Smith");
names.splice(4, 0, "Jeff");
names.push("Larry");

//Remove Mel
names.splice(names.indexOf("Mel"), 1);

//Add a row that says that Mel has been removed from the list
names.push("Mel has been removed from the list");

names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "item");
  listItem.append(name);
  ul.appendChild(listItem);
});

// Add background color to each odd row

const listItems = document.querySelectorAll("li");
for (let index = 0; index < listItems.length; index++) {
  if (index % 2 === 1) {
    listItems[index].classList.toggle("item");
  }
}
