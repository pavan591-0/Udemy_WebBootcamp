function checkVisibility() {
  $(".education, .job").each(function () {
    var elementTop = $(this).offset().top;
    var windowBottom = $(window).scrollTop() + $(window).height();

    if (elementTop < windowBottom - 50) {
      // Adjust the threshold if needed
      $(this).addClass("visible").removeClass("hidden");
    } else {
      $(this).addClass("hidden").removeClass("visible");
    }
  });
}

// Initially hide elements
$(".education, .job").addClass("hidden");

// Trigger on scroll and page load
$(window).on("scroll", checkVisibility);
// checkVisibility();