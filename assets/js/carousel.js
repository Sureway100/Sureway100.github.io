//counting from left to right, top
// for first project-----------------------------------------------

const imageSources1 = [
  "images/adapter1.jpeg",
  "images/adapter2.jpeg",
  "images/adapter1.jpeg",
  "images/adapter2.jpeg",
];

let currentIndex1 = 0;
const totalImages1 = imageSources1.length;
const imageCarousel1 = document.getElementById("image-carousel1");

function showSlide1(index) {
  const imagePath1 = imageSources1[index];
  imageCarousel1.innerHTML = `<img class="carousel-image" src="${imagePath1}" alt="Image ${
    index + 1
  }">`;
}

function nextSlide1() {
  currentIndex1 = (currentIndex1 + 1) % totalImages1;
  showSlide1(currentIndex1);
}

function prevSlide1() {
  currentIndex1 = (currentIndex1 - 1 + totalImages1) % totalImages1;
  showSlide1(currentIndex1);
}

// Initial display
showSlide1(currentIndex1);

//for second project--------------------------------------------------------
const imageSources2 = [
  "images/intent1.jpeg",
  "images/intent2.jpeg",
  "images/intent3.jpeg",
  "images/intent4.jpeg",
  "images/intent5.jpeg",
];

let currentIndex2 = 0;
const totalImages2 = imageSources2.length;
const imageCarousel2 = document.getElementById("image-carousel2");

function showSlide2(index) {
  const imagePath2 = imageSources2[index];
  imageCarousel2.innerHTML = `<img class="carousel-image" src="${imagePath2}" alt="Image ${
    index + 1
  }">`;
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % totalImages2;
  showSlide2(currentIndex2);
}

function prevSlide2() {
  currentIndex2 = (currentIndex2 - 1 + totalImages2) % totalImages2;
  showSlide2(currentIndex2);
}

// Initial display
showSlide2(currentIndex2);

//for third project--------------------------------------------------------
const imageSources3 = [
  "images/converter1.jpeg",
  "images/converter2.jpeg",
  "images/converter3.jpeg",
];

let currentIndex3 = 0;
const totalImages3 = imageSources3.length;
const imageCarousel3 = document.getElementById("image-carousel3");

function showSlide3(index) {
  const imagePath3 = imageSources3[index];
  imageCarousel3.innerHTML = `<img class="carousel-image" src="${imagePath3}" alt="Image ${
    index + 1
  }">`;
}

function nextSlide3() {
  currentIndex3 = (currentIndex3 + 1) % totalImages3;
  showSlide3(currentIndex3);
}

function prevSlide3() {
  currentIndex3 = (currentIndex3 - 1 + totalImages3) % totalImages3;
  showSlide3(currentIndex3);
}

// Initial display
showSlide3(currentIndex3);

//for fourth project--------------------------------------------------------
const imageSources4 = [
  "images/didyouknow.png",
  "images/didyouknow2.png",
  "images/didyouknow3.png",
  "images/didyouknow4.png",
  "images/didyouknow5.png",
];

let currentIndex4 = 0;
const totalImages4 = imageSources4.length;
const imageCarousel4 = document.getElementById("image-carousel4");

function showSlide4(index) {
  const imagePath4 = imageSources4[index];
  imageCarousel4.innerHTML = `<img class="carousel-image" src="${imagePath4}" alt="Image ${
    index + 1
  }">`;
}

function nextSlide4() {
  currentIndex4 = (currentIndex4 + 1) % totalImages4;
  showSlide4(currentIndex4);
}

function prevSlide4() {
  currentIndex4 = (currentIndex4 - 1 + totalImages4) % totalImages4;
  showSlide4(currentIndex4);
}

// Initial display
showSlide4(currentIndex4);
