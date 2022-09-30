jQuery(function () {
  console.log("jQuery READY");

  $("#container").append("<h1>Welcome</h1>");

  var div1 = $("<h2></h2>").text("DIV - 1");
  div1.css("background-color", "yellow");

  var isHide = false;

  var button = $("<button>Click</button>");
  button.addClass("btn btn-primary btn-lg");
  button.on("click", () => {
    if (isHide) {
      div1.show();
      isHide = false;
    } else {
      div1.hide();
      isHide = true;
    }
  });
  $("#container").append(button);
  $("#container").append(div1);

  var div2 = $("<h2></h2>").text("Show my name");
  div2.on("click", function () {
    $(this).text("My Name");
  });
  $("#container").append(div2);
});
