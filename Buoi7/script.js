var a = 1;
var b = "hello";
var c = true;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// console.log("Sum array: ", sumArray([1, -3, 4, 23, 12]));

jQuery(function () {
  console.log("jQuery READY");

  $("#bigger").on("click", function () {
    console.log("jQuery on click");

    $("#title").css("color", "green");
    $("#title").css("font-weight", "700");

    $("#title").text(function (i, originalText) {
      return originalText + ", I'm New Text";
    });

    $("#input").val("Hello input");

    // console.log($("#input").val());
    // console.log($("#title").attr("class"));
  });

  $("#smaller").on("click", function () {
    console.log("jQuery on click");

    $("#title").css("color", "red");
    $("#title").css("font-weight", "300");
  });

  // $("#change-color").on("mouseenter", function () {
  //   console.log("jQuery on Mouse enter");
  //   $(this).css("background-color", "red");
  // });

  // $("#change-color").on("mouseleave", function () {
  //   console.log("jQuery on Mouse leave");
  //   $(this).css("background-color", "blue");
  // });
});

// document.addEventListener("readystatechange", function () {
//   console.log("READY");

//   document
//     .getElementById("change-color")
//     .addEventListener("click", function () {
//       console.log("Click");
//     });

//   document
//     .getElementById("change-color")
//     .addEventListener("focus", function () {
//       console.log("Focus");
//     });
// });
