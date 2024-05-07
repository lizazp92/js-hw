// 4. Ask a user for age, if the input is not a number or a number over 120 or below 0,
// show error in console, else print in on the page with a welcome message

$(() => {
  $("#form").addClass("d-flex justify-content-center align-items-center gap-2");

  $("#form").on("submit", function (event) {
    event.preventDefault();

    let promise = new Promise(function (resolve, reject) {
      if (
        !$("#userAge").val() ||
        isNaN($("#userAge").val()) ||
        $("#userAge").val().trim() >= 120 ||
        $("#userAge").val().trim() <= 0
      ) {
        reject("Error");
        $("#form")[0].reset();
      } else {
        resolve("Done");
        $("#form")[0].reset();
      }
    });
    promise.then(
      (result) => {
        $("h1").hide();
        $("#form").replaceWith($("<h1>").text("welcome"));
      },
      (error) => {
        console.log(error);
      }
    );
  });
});
