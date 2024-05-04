// Create a rectangle and make it move to all edges
// of the page after a button has been clicked

$(() => {
  jQuery("<div>", {
    class: "rectangle",
  }).appendTo("main");

  jQuery("<button>", {
    class: "btn btn-success",
    text: "Move a rectangle",
  }).insertAfter(".rectangle");

  $(".btn").on("click", function () {
    moveObject();
  });

  function moveObject() {
    var h = $(window).height() - $(".rectangle").height();
    var w = $(window).width() - $(".rectangle").width();

    $(".rectangle").animate({ right: "-=" + w }, 500);
    $(".rectangle").animate({ bottom: "-=" + h }, 500);
    $(".rectangle").animate({ left: "-=" + w }, 500);
    $(".rectangle").animate({ top: "-=" + h }, 500, function () {
      $(".rectangle").removeAttr("style");
    });
  }
});
