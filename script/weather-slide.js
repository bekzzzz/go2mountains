let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");

next.addEventListener("click", () => {
  let slides = document.querySelectorAll(".slides");
  slider.append(slides[0]);
});
prev.addEventListener("click", () => {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});
