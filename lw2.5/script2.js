let ball = document.querySelector(".task2 .container .ball");

ball.style.left = '40px';
ball.style.bottom = '0px';

function moveBall(xStep, yStep) {
  ball.style.left = Number(ball.style.left.substr(0, ball.style.left.length - 2)) + xStep + "px";
  ball.style.bottom = Number(ball.style.bottom.substr(0, ball.style.bottom.length - 2)) + yStep + "px";
}

let x = 2;
let y = 2;

let gameInterval = setInterval(() => {
  if (ball.style.left == '0px') {
    x = 2;
    y = -2
  } else if (ball.style.left == '180px') {
    x = -2;
    y = 2
  } else if (ball.style.bottom == '0px') {
    x = 2;
    y = 2
  } else if (ball.style.bottom == '180px') {
    x = -2;
    y = -2
  }
  moveBall(x, y);
}, 30);
console.log(12)