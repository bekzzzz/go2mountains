document.addEventListener("DOMContentLoaded", function () {
  const overnightHotels = document.querySelectorAll(".overnight-hotels");

  overnightHotels.forEach((hotel) => {
    let currentIndex = 0;
    const slides = hotel.querySelectorAll(".slide");
    const slider = hotel.querySelector(".overnight-slider");
    const prevButton = hotel.querySelector(".prev-button");
    const nextButton = hotel.querySelector(".next-button");
    let autoTimer;

    // Move to the next slide
    nextButton.addEventListener("click", () => {
      goToNext();
      resetAuto();
    });

    // Move to the previous slide
    prevButton.addEventListener("click", () => {
      goToPrev();
      resetAuto();
    });

    function goToNext() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSliderPosition();
    }

    function goToPrev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      updateSliderPosition();
    }

    // Update the slider's position
    function updateSliderPosition() {
      const slideWidth = slides[0].clientWidth;
      slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function startAuto() {
      autoTimer = setInterval(goToNext, 5000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
    }

    startAuto();

    // Add intersection observer for text overlay animation
    const observerOptions = {
      threshold: 0.5, // Trigger when at least 50% of the slide is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const textOverlay = entry.target.querySelector(".text-overlay");
        if (entry.isIntersecting) {
          // Add 'visible' class to trigger the fade-in animation
          setTimeout(() => {
            textOverlay.classList.add("visible");
            textOverlay.classList.add("text-overlay-2");
          }, 300); // Delay before the text appears (300ms)
        } else {
          // Remove 'visible' class when the slide is out of view
          textOverlay.classList.remove("visible");
          textOverlay.classList.remove("text-overlay-2");
        }
      });
    }, observerOptions);

    slides.forEach((slide) => {
      observer.observe(slide);
    });
  });
});
