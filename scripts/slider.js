'use strict'
let currentIndex = 0;
const slider = document.querySelectorAll(".era__item");
const prevButton = document.querySelector(".era__left");
const nextButton = document.querySelector(".era__right");
const visibleCards = 3;
updateSlider();
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.length - visibleCards;
    }
    updateSlider();
});
nextButton.addEventListener("click", () => {
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    updateSlider();
});
function updateSlider() {
    slider.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
