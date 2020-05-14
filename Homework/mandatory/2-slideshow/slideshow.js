// Write your code here

// # Level 1 Challenge

// Make forward and back buttons to move _manually_ in that direction through a list of at least 4 images.

// (e.g. When the user presses forward once, the display should move ONCE to the next image.)

var slideIndex = 1;

// Back/Forward controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var mySlides = document.getElementsByClassName("mySlides");
  if (n > 4) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = 4;
  }
  mySlides[0].style.display = "none";
  mySlides[1].style.display = "none";
  mySlides[2].style.display = "none";
  mySlides[3].style.display = "none";
  mySlides[slideIndex - 1].style.display = "block";
}

function moveBack() {
  plusSlides(-1);
}

function moveForward() {
  plusSlides(1);
}

// # Level 2 Challenge

// Make auto-forward and auto-back buttons to _automatically_ move in that direction through the list of images.

// Here's a screenshot example from a completed level 2 challenge.

function clearIntervals() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackInterval);
}

var autoBackInterval;
function autoBack() {
  clearIntervals();
  autoBackInterval = setInterval(plusSlides, 1000, -1);
}

var autoForwardInterval;
function autoForward() {
  clearIntervals();
  autoForwardInterval = setInterval(plusSlides, 1000, 1);
}

function stop() {
  clearIntervals();
}

function setup() {
  showSlides(slideIndex);

  document.querySelector(".back").addEventListener("click", () => {
    moveBack();
  });

  document.querySelector(".forward").addEventListener("click", () => {
    moveForward();
  });

  document.querySelector(".autoBack").addEventListener("click", () => {
    autoBack();
  });

  document.querySelector(".autoForward").addEventListener("click", () => {
    autoForward();
  });

  document.querySelector(".stop").addEventListener("click", () => {
    stop();
  });

  var titleI = document.querySelector("h1");
  titleI.style.color = "crimson";
  titleI.style.textAlign = "center";
  titleI.style.paddingTop = "50px";

  var titleII = document.querySelector("span");
  titleII.style.color = "orange";
  var captions = document.querySelectorAll(".text");
  for (var i = 0; i < captions.length; i++) {
    captions[i].style.fontFamily = "Montserrat";
    captions[i].style.fontWeight = "thin";
    captions[i].style.color = "green";

    var buttonMenu = document.querySelector("#buttonMenu");
    buttonMenu.style.textAlign = "center";
    buttonMenu.style.paddingTop = "20px";
  }
}

window.onload = setup;
