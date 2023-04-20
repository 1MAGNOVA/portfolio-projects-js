const newYear = "1 jan 2024";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecs = (newYearDate - currentDate) / 1000 ;


    const days = Math.floor(totalSecs/ 3600 / 24) ;
    const hours =  Math.floor(totalSecs/3600) % 24 ;
    const mins =  Math.floor(totalSecs/60) % 60 ;
    const secs =  Math.floor(totalSecs) % 60 ;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
}



countdown();

setInterval(countdown, 1000);

