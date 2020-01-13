const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = "`/images/${imgNumber +1}.jpg`";
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
