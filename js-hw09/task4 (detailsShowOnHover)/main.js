// Create a list of items(any topic) and on hover show details on each row

$(() => {
  $("li p").hide();
  $("li span").on("mouseover mouseout", function (event) {
    $(event.target).siblings("p").toggle();
  });
});
