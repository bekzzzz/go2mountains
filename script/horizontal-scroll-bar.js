function scrolll() {
  var left = document.querySelector(".scroll-images");
  var scrollAmount = getScrollAmount(); // Dynamically get the scroll amount based on screen size
  left.scrollBy(scrollAmount, 0);
}

function scrollr() {
  var right = document.querySelector(".scroll-images");
  var scrollAmount = getScrollAmount(); // Dynamically get the scroll amount based on screen size
  right.scrollBy(-scrollAmount, 0);
}

function getScrollAmount() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 360) {
    // For small smartphones (360px width or smaller)
    return 260;
  } else if (screenWidth <= 414) {
    // For medium smartphones (361px - 414px)
    return 430;
  } else if (screenWidth <= 700) {
    // For larger smartphones and small tablets (415px - 768px)
    return 560;
  } else if (screenWidth <= 768) {
    // For larger smartphones and small tablets (415px - 768px)
    return 630;
  } else if (screenWidth <= 900) {
    // For tablets and smaller laptops (769px - 1024px)
    return 760;
  } else if (screenWidth <= 992) {
    // For tablets and smaller laptops (769px - 1024px)
    return 850;
  } else if (screenWidth <= 1024) {
    // For tablets and smaller laptops (769px - 1024px)
    return 880;
  } else if (screenWidth <= 1200) {
    // For large laptops or smaller desktops (1025px - 1366px)
    return 1070;
  } else {
    // For large desktops (1367px and above)
    return 1300;
  }
}
