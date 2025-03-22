function cards() {
  const slider = document.getElementsByClassName("slider")[0];
  const sliderSpoilerBtn = document.getElementById("sliderSpoilerBtn");
  const spoiler_img = document.getElementById("spoiler_img");

  const computedStyle = window.getComputedStyle(slider);
  const currentMaxHeight = computedStyle.maxHeight;

  if (currentMaxHeight === "200px") {
    slider.style.maxHeight = "100%";
    sliderSpoilerBtn.innerText = "Скрыть";
    spoiler_img.style.transform = "rotate(180deg)";
  } else {
    slider.style.maxHeight = "200px";
    sliderSpoilerBtn.innerText = "Показать все";
    spoiler_img.style.transform = "rotate(0deg)";
  }
}

let swiper;

function initSwiper() {
  const mobile = window.innerWidth <= 450;

  if (mobile && !swiper) {
    swiper = new Swiper("#swiper", {
      grabCursor: true,
      slidesPerView: 1.4,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (!mobile && swiper) {
    swiper.destroy();
    swiper = null;
  }
}

function updateClass() {
  const element = document.getElementById("wrapper");

  if (window.innerWidth <= 450) {
    element.classList.remove("slider");
    element.classList.add("swiper-wrapper");
  } else {
    element.classList.remove("swiper-wrapper");
    element.classList.add("slider");
  }
}

updateClass();

window.addEventListener("resize", updateClass);
window.addEventListener("resize", initSwiper);
window.addEventListener("DOMContentLoaded", initSwiper);


