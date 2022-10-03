jQuery(function () {
  console.log("jQuery READY");

  $("#calculate").on("click", () => {
    var a = $("#input1").val();
    var b = $("#input2").val();
    var c = Number(a) + Number(b);
    $("#sum").val(c);
  });
});

