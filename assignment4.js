$(function name(params) {
  $("#next").on("click", function name() {
    $("section.active")
      .hide()
      .removeClass("active")
      .next()
      .show()
      .addClass("active");
  });
  $("#previous").on("click", function name() {
    $("section.active")
      .hide()
      .removeClass("active")
      .prev()
      .show()
      .addClass("active");
  });
});
