var mixer = mixitup("*");

if ($("#overlay").css("display") == "block") {
  $("body").css("overflow-y", "hidden");
  $("body").css("height", "100vh");
}
$(".close").click(function () {
  $("body").css({ "overflow-y": "", height: "" });
});
