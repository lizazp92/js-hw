/* Create an html-page with a large table. When clicking the column heading, 
it is necessary to sort data of that column. 
Note that numerical values should be sorted as numbers, not as strings. */

// table element inside main
const main = document.querySelector("main");
const table = document.createElement("table");
main.appendChild(table);

// separate array for table header
const tableHeader = ["Cat name", "Age", "Food", "Is the cat stray?"];
const tableHeaderRow = document.createElement("tr");

// table values
const tableValues = [
  { catName: "Boris", age: 5, food: "whiskas", isStray: true },
  { catName: "Bohdan", age: 1, food: "catfood", isStray: false },
  { catName: "Kytsyk", age: 2, food: "bread", isStray: true },
  { catName: "Kishka", age: 7, food: "fish", isStray: false },
  { catName: "Masya", age: 12, food: "soup", isStray: true },
  { catName: "Kylym", age: 4, food: "catfood", isStray: false },
  { catName: "Zuyduk", age: 2, food: "meat", isStray: true },
  { catName: "Ykol", age: 6, food: "apple", isStray: false },
  { catName: "Nasyk", age: 15, food: "soup", isStray: true },
  { catName: "Okiu", age: 6.5, food: "catfood", isStray: false },
  { catName: "Koro", age: 8, food: "floor", isStray: true },
  { catName: "Mao", age: 10, food: "catnip", isStray: false },
];

// for each object in tableValues array create rows.
// for each value in an object create columns
// add them to a row. add rows to a table

function createTable(tableValues) {
  for (const obj of tableValues) {
    const row = document.createElement("tr");
    for (const val of Object.values(obj)) {
      const col = document.createElement("td");
      col.textContent = val;
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}
createTable(tableValues);

// for each string in tableHeader array create columns.
// add them to a row. add the row in the beginning of a table
tableHeader.forEach((val) => {
  const tableHeaderCol = document.createElement("td");
  tableHeaderCol.textContent = val;
  tableHeaderRow.appendChild(tableHeaderCol);
  tableHeaderRow.classList.add("header");

  tableHeaderCol.addEventListener("click", (event) => {
    var columnNumber = event.target.cellIndex;

    switch (columnNumber) {
      case 0:
        tableValues.sort(function (a, b) {
          return a.catName.localeCompare(b.catName);
        });
        break;

      case 1:
        tableValues.sort((a, b) => a.age - b.age);
        break;

      case 2:
        tableValues.sort(function (a, b) {
          return a.food.localeCompare(b.food);
        });
        break;

      case 3:
        tableValues.sort((a, b) => b.isStray - a.isStray);
        break;
    }

    for (i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    createTable(tableValues);
  });
});
table.prepend(tableHeaderRow);
