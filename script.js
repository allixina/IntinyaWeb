const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".prev-btn");
const slideElements = document.querySelectorAll(".slide");
const numberOfSlides = slideElements.length;
let slideNumber = 0;

nextButton.addEventListener("click", () => {
  slideElements.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;
  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slideElements[slideNumber].classList.add("active");
});

previousButton.addEventListener("click", () => {
  slideElements.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slideElements[slideNumber].classList.add("active");
});
