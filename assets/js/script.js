let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlides = 0;

document.querySelector('.slider--width').style.width = 
  `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = 
  `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlides--;
  if(currentSlides < 0) {
    currentSlides = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlides++;
  if(currentSlides > (totalSlides - 1)) {
    currentSlides = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlides * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft =
  `-${newMargin}px`;
}

setInterval(goNext, 5000);