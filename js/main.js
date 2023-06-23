// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// // sliders
$(function () {
  $(".hero__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return "<a>" + (i + 1) + "</a>";
    },
  });
});

var $status = $(".pagingInfo");
$(".historyMain__slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 2.665,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 2.36,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// showMore start
const showMorePage = document.getElementById("showMore");
if (showMorePage) {
  const showMoreBtns = document.querySelectorAll(".showMoreBtn");
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.onclick = () => {
      const parentElement = showMoreBtn.parentNode;
      const showMore = parentElement.querySelector(".showMore");
      showMore.classList.toggle("active");
      showMoreBtn.classList.toggle("active");
      if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.innerHTML = "Zeige weniger";
      } else {
        showMoreBtn.innerHTML = "Mehr laden";
      }
    };
  });
}
// showMore end
// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  const playBtnText = playBtn.querySelector("b");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "Play";
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "Play";
    }
  };
}
// video end
