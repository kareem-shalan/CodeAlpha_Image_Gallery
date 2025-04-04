let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let carousel = document.querySelector(".carousel");
let list = document.querySelector(".list");
let items = document.querySelectorAll(".item");
let runningTime = document.querySelector(".runningTime");

let timeRemaining = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function () {
  showSlider("next");
};
prevBtn.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
  clearTimeout(runTimeOut);
  runningTime.style.animation = "none";

  runningTime.offsetHeight; // trigger reflow

  runningTime.style.animation = null; // reset animation

  runningTime.style.animation = `runningtime linear 1 s forwards`;
}
function showSlider(direction) {
  let sliderItem = document.querySelectorAll(".carousel .list .item");

  if (direction === "next") {
    list.appendChild(sliderItem[0]);
    carousel.classList.add("next");
  } else {
    list.prepend(sliderItem[sliderItem.length - 1]);
    carousel.classList.add("prev");
  }
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next", "prev");
  }, timeRemaining);
  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
    resetTimeAnimation();
}
resetTimeAnimation()