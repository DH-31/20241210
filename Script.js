const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-button");

let timer;
let seconds = 25 * 60; // Default: 25 minutes

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener("click", () => {
    if (timer) return; // Prevent multiple timers
    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            timerElement.textContent = formatTime(seconds);
        } else {
            clearInterval(timer);
            alert("時間到！");
        }
    }, 1000);
});
