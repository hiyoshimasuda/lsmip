$(function(){
  $(window).scroll(function (){
    $(".fade").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});

$(function(){
  $(".lp-contact__title").on("click", function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".lp-contact").removeClass("open");
    } else {
      $(this).addClass("active");
      $(".lp-contact").addClass("open");
    }
  });

  $(".lp-contact__close").on("click", function(){
    $(".lp-contact__title").removeClass("active");
    $(".lp-contact").removeClass("open");
  });
});

$(function(){
  $(".lp-contact-bottom__title").on("click", function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".lp-contact-bottom").removeClass("open");
    } else {
      $(this).addClass("active");
      $(".lp-contact-bottom").addClass("open");
    }
  });

  $(".lp-contact-bottom__close").on("click", function(){
    $(".lp-contact-bottom__title").removeClass("active");
    $(".lp-contact-bottom").removeClass("open");
  });
});


//slick.js
$(function() {
  $('#mainSlider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    //autoplay: true,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
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

