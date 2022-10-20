/*
    This is my favourite feature for two reasons: how easy it was to make and how appealing it 
    is to me. All this does is just checks the time, and if it is between the specified times,
    highlights the required period.
*/

// Just sets period to 0 as default (if the period is 0, it doesn't highlight anything)
var period = 0

// Highlights the given courses within the period
function highlightPeriod(period) {
    if (!period == 0) {
        document.getElementById(`p${period}time`).classList.add('table-secondary')
        document.getElementById(`p${period}class`).classList.add('table-secondary')
    }
}

// Variables to be updated by the function below (no clue why I didn't just to a return statement but eh)
var time
var hours24
var secs
var AM_PM
var hours12

// Updates the variables
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

// Uses the variables to check whether the given time 1 is between time 2
function isBetweenTimes(hour1, min1, hour2, min2) {
    if (hours24 >= hour1 && hours24 <= hour2 && !(hours24 == hour2 && mins > min2) && !(hours24 == hour1 && mins < min1)) {
        return true
    }
    return false
}

// Checks to see if the day of the week is a weekend using js's built in date thingy
function isWeekend() {
    if (time.getDay() == 0 || time.getDay() == 6) {
        return true
    }
    return false
}

// Uses the above functions to check what period it is right now (if any)
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

    // Highlights the period based on what it found above
    highlightPeriod(period)
}

// Does everything when you open the popup
updateCurrentClass()