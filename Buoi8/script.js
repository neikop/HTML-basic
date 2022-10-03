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

  var input1 = $("<input />");
  input1.attr("id", "input1");
  input1.attr("type", "number");

  var input2 = $("<input />");
  input2.attr("id", "input2");
  input2.attr("type", "number");

  $("#container").append(input1);
  $("#container").append(input2);

  var buttonCalculate = $("<button></button>").text("Tính tổng");
  buttonCalculate.addClass("btn btn-primary");

  buttonCalculate.on("click", () => {
    console.log("click");
    var a = Number(input1.val());
    var b = Number(input2.val());
    var c = a + b;
    answer.text("Kết quả: " + c);
  });

  var answer = $("<span></span>").text("Kết quả: 0");
  $("#container").append(answer);

  $("#container").append(buttonCalculate);
});

