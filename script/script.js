const btnClose = document.querySelector(".btn-close");
const video = document.getElementById("video");

btnClose.addEventListener("click", () => {
  video.pause();
});

document.addEventListener("DOMContentLoaded", function () {
  function initSlider(className, slidesToShow) {
    if (window.innerWidth > 576) {
      $(className).slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slidesToShow,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: slidesToShow - 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow - 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: slidesToShow - 3,
              arrows: false,
            },
          },
        ],
      });
    }
  }

  initSlider(".shop-room", 5);
  initSlider(".logo-slider", 4);

  window.addEventListener("resize", function () {
    $(".shop-room, .logo-slider").slick("unslick");
    initSlider(".shop-room", 5);
    initSlider(".logo-slider", 4);
  });
});
