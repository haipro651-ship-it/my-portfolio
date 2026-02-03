document.addEventListener("DOMContentLoaded", () => {
    const lantern = document.querySelector(".lantern");

    let isPaused = false;
    let angle = 0;

    function rotateLantern() {
        if (!isPaused) {
            angle += 0.3; // tốc độ quay
            lantern.style.transform = `rotateY(${angle}deg)`;
        }
        requestAnimationFrame(rotateLantern);
    }

    lantern.addEventListener("mouseenter", () => {
        isPaused = true;
    });

    lantern.addEventListener("mouseleave", () => {
        isPaused = false;
    });

    rotateLantern();
});
