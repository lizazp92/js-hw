// 3. Ask a user to submit an artist name and song and after 2 seconds add it to the screen

$(() => {
  $("#form").addClass("d-flex justify-content-center align-items-center gap-2");
  $("<ul/>").addClass("list-unstyled").insertAfter("h2");

  // a function for the output to start with a capital letter and space deleting
  function stringCapitalize(arg) {
    let tempString = arg.trim()[0].toUpperCase() + arg.trim().slice(1);
    return tempString;
  }

  // submitting a form
  $("#form").on("submit", function (event) {
    event.preventDefault();

    // checks for empty inputs
    if (!$("#songName").val() || !$("#songArtist").val()) {
      alert("Pls fill the field");
      $("#form")[0].reset();
      return;
    }

    // checks for input value length
    if (
      $("#songName").val().trim().length > 30 ||
      $("#songArtist").val().trim().length > 30
    ) {
      alert("The field should not contain more than 30 symbols.");
      $("#form")[0].reset();
      return;
    }

    const song = stringCapitalize($("#songName").val());
    const artist = stringCapitalize($("#songArtist").val());

    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("song and artist added after 2 sec"), 2000);
    });
    promise.then((result) => {
      console.log(result);
      //create li
      $("<li>", {
        class: "d-flex justify-content-between align-items-center",
        on: {
          mouseover: function () {
            $(this).addClass("bg-secondary");
          },
          mouseout: function () {
            $(this).removeClass("bg-secondary");
          },
        },
        appendTo: $("ul"),
      });

      // span with input value
      $("<span/>", {
        html: `<strong>${song}</strong> by <strong>${artist}</strong>`,
        appendTo: $("li").last(),
      });

      // button delete with icon inside
      $("<button>", {
        class: "btn btn-danger",
        on: {
          click: function () {
            $(this).parent().remove();
          },
        },
        append: $("<i>").addClass("fa-solid fa-trash"),
        appendTo: $("li").last(),
      });

      $("#form")[0].reset();
    });
  });
});
