var helpers = {
  addZeros: function (n) {
    return n < 10 ? "0" + n : "" + n;
  },
};

function sliderInit() {
  var $slider = $(".slider-holder");
  $slider.each(function () {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true,
            autoplay: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            adaptiveHeight: true,
            arrows: false,
          },
        },
      ],
    });

    if ($(this).find(".item").length > 1) {
      $(this).siblings(".slides-numbers").show();
    }

    $(this).on("afterChange", function (event, slick, currentSlide) {
      $sliderParent
        .find(".slides-numbers .active")
        .html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this)
      .find(".slick-slide")
      .not(".slick-cloned").length;
    $sliderParent
      .find(".slides-numbers .total")
      .html(helpers.addZeros(sliderItemsNum));
  });
}

sliderInit();
