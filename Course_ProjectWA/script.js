window.onload = function() {
    // Get Canvas and Drawing Tool
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    let canvasWidth = canvas.parentElement.clientWidth;
    let canvasHeight = canvas.parentElement.clientHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let particle = {
        x: canvasWidth / 2,
        y: canvasHeight / 2,
        radius: 50,
        dx: 2,
        dy: 1,
        color: '#1DEA3C'
    };

    function draw() {
        // Cleans Canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Starts Drawing
        ctx.beginPath();

        // Defines Circle
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        // Defines Color
        ctx.fillStyle = particle.color;

        // Fill Circle
        ctx.fill();

        // Stops Drawing
        ctx.closePath();
    };

    function update() {
        // Applies New Coordinates
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Check for edge
        if (particle.x + particle.radius > canvasWidth || particle.x - particle.radius < 0) {
            particle.dx *= -1;
        }

        if (particle.y + particle.radius > canvasHeight || particle.y - particle.radius < 0) {
            particle.dy *= -1;
        }
    };

    function animate() {
        update();
        draw();

        requestAnimationFrame(animate);
    };

    function resizeCanvas() {
        // update width
        canvasWidth = canvas.parentElement.clientWidth;
        canvas.width = canvasWidth;

        // update height
        canvasHeight = canvas.parentElement.clientHeight;
        canvas.height = canvasHeight
    };

    // Call function when window is resized
    window.addEventListener('resize', resizeCanvas);

    animate();
};