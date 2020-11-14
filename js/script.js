//slick.js
$(function() {
  $('#boxSlider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: "10%",
    //autoplay: true,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [{
      breakpoint: 1366,settings: {
        autoplay: false,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,settings: {
        autoplay: false,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

