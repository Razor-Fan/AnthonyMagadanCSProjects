/**
 * This script waits for the HTML document to be fully loaded before
 * running any code. This is important because it ensures the <canvas>
 * and <button> elements exist before we try to find them.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SETUP ---

    // Get the canvas element and its 2D drawing context
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Keep canvas drawing buffer in sync with CSS size for crisp rendering
    function resizeCanvas() {
        const { clientWidth, clientHeight } = canvas;
        if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
            canvas.width = clientWidth;
            canvas.height = clientHeight;
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- 3. EXAMPLE 2: MULTIPLE BOUNCING BALLS ---

    let balls = []; // An array to hold all of our ball objects. 10 balls total.

    /**
     * This function sets up the state for Animation 2.
     */
    function initAnimation2() {
        balls = []; // Clear any old balls
        // Create 10 balls with random positions and speeds
        for (let i = 0; i < 15; i++) {
            balls.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 10,
                dx: (Math.random() - 0.5) * 4, // Random speed between -2 and 2. Obtained by (random - 0.5) * 4
                dy: (Math.random() - 0.5) * 4,
                // Give it a random color
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
            });
        }
        // Start the animation loop
        animationLoop2();
    }

    /**
     * This is the animation loop for multiple balls.
     */
    function animationLoop2() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // We use a `forEach` loop to draw and update *every* ball in our array.
        balls.forEach(b => {
            // Draw the ball
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
            ctx.fillStyle = b.color;
            ctx.fill();
            ctx.closePath();

            // Update its position
            b.x += b.dx;
            b.y += b.dy;

            // Check for bouncing
            if (b.x + b.radius > canvas.width || b.x - b.radius < 0) {
                b.dx *= -1;
            }
            if (b.y + b.radius > canvas.height || b.y - b.radius < 0) {
                b.dy *= -1;
            }
        });

        // Repeat the loop
        currentAnimationId = requestAnimationFrame(animationLoop2);
    }

    initAnimation2();
});
