import Scrollify from "jquery-scrollify";

$(function () {
  $.scrollify({
    section: ".scrollify-section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 500,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    padding: 0,
    before: function () {},
    after: function () {},
    afterResize: function () {},
    afterRender: function () {},
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $("#menubutton").on("click", () => {
    if ($("#menuklein").children("ul").css("display") == "none") {
      $("#menuklein").children("ul").css("display", "flex");
      $("#menuklein").css("height", "100%");
    } else {
      $("#menuklein").children("ul").css("display", "none");
      $("#menuklein").css("height", "60px");
    }
  });
});
