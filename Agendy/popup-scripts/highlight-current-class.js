var period = 0

// Highlights the given courses within the period
function highlightPeriod(period) {
    if (!period == 0) {
        document.getElementById(`p${period}time`).classList.add('table-secondary')
        document.getElementById(`p${period}class`).classList.add('table-secondary')
    }
}

var time
var hours24
var secs
var AM_PM
var hours12

function updateTime() {
    time = new Date();

    // Gets the time units
    hours24 = time.getHours()
    mins = time.getMinutes()
    secs = time.getSeconds()
    if (hours24 > 12) {
        AM_PM = "PM"
        hours12 = hours24 - 12
    } else {
        AM_PM = "AM"
        hours12 = hours24
    }
}
updateTime()

function isBetweenTimes(hour1, min1, hour2, min2) {
    if (hours24 >= hour1 && hours24 <= hour2 && !(hours24 == hour2 && mins > min2) && !(hours24 == hour1 && mins < min1)) {
        return true
    }
    return false
}

function isWeekend() {
    if (time.getDay() == 0 || time.getDay() == 6) {
        return true
    }
    return false
}

function updateCurrentClass() {
    if (isBetweenTimes(8, 45, 9, 59) && !isWeekend) {
        period = 1
    } else if (isBetweenTimes(10, 0, 10, 19)) {
        period = 2
    } else if (isBetweenTimes(10, 20, 11, 38)) {
        period = 3
    } else if (isBetweenTimes(11, 39, 12, 59)) {
        period = 4
    } else if (isBetweenTimes(13, 0, 13, 55)) {
        period = 5
    } else if (isBetweenTimes(13, 56, 15, 18)) {
        period = 6
    }
    console.log(period);

    highlightPeriod(period)
}

updateCurrentClass()