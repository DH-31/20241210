let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function setTimer(mins) {
    clearInterval(timer);
    isRunning = false;
    minutes = mins;
    seconds = 0;
    updateClock();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("時間到！");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateClock();
    }, 1000);
}

function updateClock() {
    const clock = document.getElementById("clock");
    clock.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
