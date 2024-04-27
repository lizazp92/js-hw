let drinks = [
  { name: "Beer", price: 2 },
  { name: "Whiskey", price: 5 },
  { name: "Wine", price: 8 },
];

const title = document.querySelector("#title");

const ul = document.createElement("ul");

const modal = document.getElementById("modal");

title.after(ul);

function createList() {
  ul.innerHTML = "";
  drinks.forEach((drink, index) => {
    const liItem = document.createElement("li");

    liItem.className = "d-flex-justify-between";

    const nameEl = document.createElement("div");
    nameEl.textContent = drink.name;

    liItem.append(nameEl);

    const actionsEl = document.createElement("div");

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Del";
    btnDelete.className = "btnDel";
    btnDelete.addEventListener("click", (event) => {
      //   removeItem(drink.name);
      removeItem(index);
    });

    const btnInfo = document.createElement("button");
    btnInfo.textContent = "Info";
    btnInfo.className = "btnInfo";
    btnInfo.addEventListener("click", (event) => {
      openModal(drink);
    });

    actionsEl.append(btnInfo, btnDelete);
    liItem.append(actionsEl);
    ul.append(liItem);
  });
}

createList();

function removeItem(index) {
  //   drinks = drinks.filter((drink) => drink.name !== drinkName);
  drinks.splice(index, 1);
  createList();
}

function openModal(drink) {
  modal.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = drink.name;

  const description = document.createElement("p");
  description.textContent = `${drink.name} is ${drink.price} $`;

  const modalButton = document.createElement("button");
  modalButton.textContent = "OK";
  modalButton.style.backgroundColor = "blue";
  modalButton.style.color = "white";
  modalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.append(title, description, modalButton);

  modal.style.display = "block";
}
