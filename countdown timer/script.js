// get html id
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// target time
const newYears = "1 Jan 2024"


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // Date is ms / 1000 to seconds
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    // if time < 10 is show 0time not just time
    return time < 10 ? `0${time}` : time;
}

// inital call
countdown();

setInterval(countdown, 1000);