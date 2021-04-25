let status = "very nice text";
let direction = "right";
let rowTask1 = document.querySelector(".task1 .row");

function moveStr() {
  if (direction === "right" && status.length < 300) {
    status = "&nbsp;" + status;
    direction = "right";
  } else if (status.length >= 15) {
    status = status.slice(6);
    direction = "left";
  } else {
    status = "&nbsp;" + status;
    direction = "right";
  }
  rowTask1.innerHTML = status;
}

setInterval(moveStr, 50);

const sinTan = (x) => Math.sin(x / 2) * Math.tan(x / 2);
const STEP = 10;
const step = Math.PI / 12;
let phi = 0;
let element = document.querySelector(".task1 #move");

function moveByTrajectory() {
  element.style.left = STEP * phi + "px";
  if (sinTan(phi) < 0) element.style.top = 100 + STEP * Math.abs(sinTan(x)) + "px";
  else element.style.top = 100 + STEP * sinTan(phi) + "px";
  phi += step;
}

function textBlink(elem) {
  let textInterval = setInterval(() => {
    if (elem.style.visibility == "" || elem.style.visibility == "visible")
      elem.style.visibility = "hidden";
    else elem.style.visibility = "visible";
  }, 100);
}

textBlink(element);
let moveInterval = setInterval(moveByTrajectory, 200);

