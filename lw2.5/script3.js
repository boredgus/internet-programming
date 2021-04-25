function slideshow(num) {
  let imageItem = document.querySelector(".task3 #image");
  imageItem.src = `./img/${num}.jpg`;
}
function* numberGenerator() {
  while (true) {
    yield 2;
    yield 1;
    yield 4;
    yield 3;
    yield 4;
    yield 1;
  }
}
let gen = numberGenerator();
let imageInterval = setInterval(() => slideshow(gen.next().value), 500);
