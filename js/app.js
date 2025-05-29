const timeDisplay = document.getElementById("time");
const dayDisplay = document.getElementById("day");
const weekDay = document.getElementById("weekDay");



function Time() {
    let dateString = new Date().toLocaleString("en-IR");
    let dayOfWeek = new Date().toString().split(" ")[0];
    let secondes = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = secondes;
    dayDisplay.innerHTML = dayOfWeek;
}


setInterval(Time, 1000);