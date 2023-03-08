const yearsLabel = document.getElementById('years-label');
const yearsNum = document.getElementById('years-num');
const monthsLabel = document.getElementById('months-label');
const monthsNum = document.getElementById('months-num');
const daysLabel = document.getElementById('days-label');
const daysNum = document.getElementById('days-num');
const hoursLabel = document.getElementById('hours-label');
const hoursNum = document.getElementById('hours-num');
const minutesLabel = document.getElementById('minutes-label');
const minutesNum = document.getElementById('minutes-num');
const secondsLabel = document.getElementById('seconds-label');
const secondsNum = document.getElementById('seconds-num');
const startTime = new Date("November 26, 2021 19:13:00");
//if November is 1, monthsw30 holds the indeces of months with 30 days.
const monthsw30 = [1, 6, 8, 11];
let seconds;
let minutes;
let minutesOld;
let hours;
let daysLeft;
let months;
let m;
let y;
setInterval(() => {
    let currentTime = Date.now();
    //Get time in milliseconds between startTime and currentTime
    let dateDifference = currentTime - startTime.getTime();
    seconds = Math.floor((dateDifference / 1000) % 60);
    minutes = Math.floor((dateDifference / 1000 / 60) % 60);
    //To not waste calculations as often, only calculate the rest when the minute changes
    if (minutes != minutesOld) {
        hours = Math.floor((dateDifference / 1000 / 60 / 60) % 24);
        daysLeft = Math.floor((dateDifference / 1000 / 60 / 60 / 24));
        //month counter
        m = 1;
        //year counter
        y = 0;
        //leap year counter
        let lpyr = 0;
        while (daysLeft > 31) {
            if (monthsw30.includes(m - (12 * y))) {
                daysLeft -= 30;
                m++;
            } else if (m - (12 * y) === 4) {
                if (y - (4 * lpyr) === 3) {
                    daysLeft -= 29;
                    lpyr++;
                } else {
                    daysLeft -= 28;
                }
                m++;
            } else {
                daysLeft -= 31;
                m++;
            }
            if (m - (12 * y) === 12) {
                y++;
            }
        }
        months = (m - 1) % 12;
    }
    minutesOld = minutes;
    if (y === 1) {
        yearsLabel.innerHTML = `YEAR`;
        yearsNum.innerHTML = '1';
    } else {
        yearsLabel.innerHTML = 'YEARS';
        yearsNum.innerHTML = `${y}`;
    }
    if (months === 1) {
        monthsLabel.innerHTML = 'MONTH';
        monthsNum.innerHTML = '1';
    } else {
        monthsLabel.innerHTML = 'MONTHS';
        monthsNum.innerHTML = `${months}`;
    }
    if (daysLeft === 1) {
        daysLabel.innerHTML = 'DAY';
        daysNum.innerHTML = '1';
    } else {
        daysLabel.innerHTML = 'DAYS';
        daysNum.innerHTML = `${daysLeft}`;
    }
    if (hours === 1) {
        hoursLabel.innerHTML = 'HOUR';
        hoursNum.innerHTML = '1';
    } else {
        hoursLabel.innerHTML = 'HOURS';
        hoursNum.innerHTML = `${hours}`;
    }
    if (minutes === 1) {
        minutesLabel.innerHTML = 'MINUTE';
        minutesNum.innerHTML = '1';
    } else {
        minutesLabel.innerHTML = 'MINUTES';
        minutesNum.innerHTML = `${minutes}`;
    }
    if (seconds === 1) {
        secondsLabel.innerHTML = 'SECOND';
        secondsNum.innerHTML = '1';
    } else {
        secondsLabel.innerHTML = 'SECONDS';
        secondsNum.innerHTML = `${seconds}`;
    }
}, 250);