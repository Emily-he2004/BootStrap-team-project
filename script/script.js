const btnClose = document.querySelector(".btn-close");
const video = document.getElementById("video");

btnClose.addEventListener("click", () => {
  video.pause();
});

document.addEventListener("DOMContentLoaded", function () {
  function initSlider() {
    if (window.innerWidth > 576) {
      $(".logo-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
        ],
      });
    }
  }

  initSlider();

  window.addEventListener("resize", function () {
    if ($(".logo-slider").hasClass("slick-initialized")) {
      $(".logo-slider").slick("unslick");
    }
    initSlider();
  });
});
