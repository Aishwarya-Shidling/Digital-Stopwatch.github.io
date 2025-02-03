let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 10);
        startStopBtn.textContent = "Stop";
        startStopBtn.style.background = "#e74c3c";  // Change button color to red when running
        running = true;
    } else {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        startStopBtn.textContent = "Start";
        startStopBtn.style.background = "#2ecc71";  // Reset to green when stopped
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.textContent = "00:00:00.00";
    startStopBtn.textContent = "Start";
    startStopBtn.style.background = "#2ecc71"; // Reset button color to green
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    let ms = Math.floor((updatedTime % 1000) / 10);
    let sec = Math.floor((updatedTime / 1000) % 60);
    let min = Math.floor((updatedTime / (1000 * 60)) % 60);
    let hr = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);

    display.textContent =
        (hr < 10 ? "0" + hr : hr) + ":" +
        (min < 10 ? "0" + min : min) + ":" +
        (sec < 10 ? "0" + sec : sec) + "." +
        (ms < 10 ? "0" + ms : ms);
}

startStopBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
