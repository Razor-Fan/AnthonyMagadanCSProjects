// Get Drawing Elements + Canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const logo = document.getElementById('logo');

// Set canvas initial size
let canvasWidth = canvas.parentElement.clientWidth;
let canvasHeight = canvas.parentElement.clientHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// create animated object
let box = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    width: 70,
    height: 50,
    dx: 1,
    dy: 1,
}

// define functions for drawing and movement
function draw() {
    // canvas is cleared
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // start drawing
    ctx.beginPath();

    ctx.drawImage(logo, box.x, box.y);

    ctx.closePath();
}

function update() {
    box.x += box.dx;

    box.y += box.dy;

    if (box.x + box.width > canvasWidth || box.x < 0) {
        box.dx *= -1;
    }

    if (box.y + box.height > canvasHeight || box.y < 0) {
        box.dy *= -1;
    }
}

// animation function
function animate() {
    draw();
    update();

    requestAnimationFrame(animate);
}

// canvas responsiveness
function resizeCanvas() {
    canvasWidth = canvas.parentElement.clientWidth;
    canvas.width = canvasWidth;

    box.x = canvasWidth / 2;
}

window.addEventListener('resize', resizeCanvas());

animate();