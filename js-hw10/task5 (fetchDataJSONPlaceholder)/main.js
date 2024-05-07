// Make a table out of user data on jsonplaceholder with header row

$(() => {
  const API = "https://jsonplaceholder.typicode.com";
  fetch(`${API}/users`)
    .then((response) => response.json())
    .then((users) => {
      console.log(users);

      //header row
      const headerRow = $("<tr>").addClass("header");
      for (const [key, value] of Object.entries(users[0])) {
        {
          if (key !== "address" && key !== "company") {
            const headerCol = $("<td>");
            headerCol.text(key);
            headerRow.append(headerCol);
          } else {
            //keys of object inside an object
            for (let nested_key in value) {
              if (nested_key !== "geo") {
                const headerCol = $("<td>");
                headerCol.text(nested_key);
                headerRow.append(headerCol);
              }
            }
          }
        }
      }
      $("table").prepend(headerRow);
      users.forEach((user) => $("main").append(generateUserInfo(user)));
    })
    .catch((error) => console.error(error));

  //create main table
  function generateUserInfo(user) {
    const row = $("<tr>");
    for (const val of Object.values(user)) {
      if (typeof val !== "object") {
        const col = $("<td>");
        col.text(val);
        row.append(col);
      } else {
        //values of object inside an object
        for (const val_in_val of Object.values(val)) {
          if (typeof val_in_val !== "object") {
            const col = $("<td>");
            col.text(val_in_val);
            row.append(col);
          }
        }
      }
    }
    $("table").append(row);
  }
});
