// Create a functioning calculator using jQuery

// once a number btn is clicked, it's displayed in the output.
//initial 0 is replaced with a clicked number. after that clicked numbers are added to output
$(() => {
  const input = $(".calculator__output");
  $(".numbers").on("click", function (event) {
    if (input.html() === "0") {
      input.html($(event.target).html());
    } else {
      input.append($(event.target).html());
    }
  });

  //new variable to omit math operators being displayed multiple times at once
  //and to determine which action should be performed once "=" is clicked
  //once a math operator btn is clicked, it's displayed in the output.
  let actionSign = "";
  $(".calculator__key--operator").on("click", function (event) {
    console.log($(event.target).text().trim());
    if (actionSign.length === 0) {
      input.append($(event.target).html().trim());
      actionSign = $(event.target).text().trim();
    }
  });

  // adding decimals
  let decimalCount = 0;
  $("#decimal").on("click", function () {
    if (decimalCount === 0 || (decimalCount == 1 && actionSign.length == 1)) {
      input.append(".");
      decimalCount++;
    }
  });

  // splitting 2 numbers by operator and showing result
  $(".calculator__key--enter").on("click", function () {
    let x = parseFloat(input.text().split(actionSign)[0]);
    let y = parseFloat(input.text().split(actionSign)[1]);

    let tempResult = 0;
    switch (actionSign) {
      case "+":
        tempResult = x + y;
        break;
      case "-":
        tempResult = x - y;
        break;
      case "*":
        tempResult = x * y;
        break;
      case "÷":
        if (y === 0) {
          alert(`Pls stop`);
          tempResult = 0;
        } else {
          tempResult = x / y;
        }
        break;
    }
    input.html(tempResult);

    //math operators storage is cleared.
    //if the result has a decimal, we set out decimal count to 1
    //or set it to 0 if the result has no decimals
    actionSign = "";
    if (input.text().search(".")) {
      decimalCount = 1;
    } else {
      decimalCount = 0;
    }
  });

  // setting everything to 0 with clear btn
  $("#clear").on("click", () => {
    input.html("0");
    actionSign = "";
    decimalCount = 0;
  });
});
