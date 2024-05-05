/* Create a simple to-do list page using jQuery. Allow users to add and remove tasks. 
Each task should have a checkbox to mark it as complete. 
Change style of row when task is marked as complete */

$(() => {
  // create the future list(ul) after h2
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
    if (!$("#addTask").val()) {
      alert("Pls fill the field");
      $("#form")[0].reset();
      return;
    }
    //checks for numbers
    if (!isNaN($("#addTask").val())) {
      alert("Only numbers are not allowed");
      $("#form")[0].reset();
      return;
    }

    // checks for input value length
    if (
      $("#addTask").val().trim().length > 30 ||
      $("#addTask").val().trim().length < 3
    ) {
      alert(
        "The field should not contain less than 3 symbols or more than 30 symbols."
      );
      $("#form")[0].reset();
      return;
    }

    const toDoItem = stringCapitalize($("#addTask").val());
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

    // nested div in li
    $("<div>", {
      class: "d-flex align-items-center gap-3",
      appendTo: $("li").last(),
    });

    //nested checkbox in div
    $("<input/>", {
      type: "checkbox",
      change: function () {
        if ($(this).is(":checked")) {
          $(this).siblings("span").addClass("checked");
        } else {
          $(this).siblings("span").removeClass("checked");
        }
      },
      appendTo: $("li div").last(),
    });

    // span with input value. nested in div
    $("<span/>", {
      html: `<strong>${toDoItem}</strong>`,
      appendTo: $("li div").last(),
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
