var day = localStorage.getItem('day')

var holidays = ['2022-10-07', '2022-10-10'];
var isShownDateWeekend = false
var isShownDateMonday = false
var isShownDateSunday = false
var isShownDateHoliday = false

var classA = localStorage.getItem('class-a')
var classB = localStorage.getItem('class-b')
var classC = localStorage.getItem('class-c')
var classD = localStorage.getItem('class-d')
var classE = localStorage.getItem('class-e')
var classF = localStorage.getItem('class-f')
var classG = localStorage.getItem('class-g')
var classH = localStorage.getItem('class-h')

classOne = document.getElementById('c1')
classTwo = document.getElementById('c2')
classThree = document.getElementById('c3')
classFour = document.getElementById('c4')


function dayOneNormal() {
    classOne.innerHTML = classA
    localStorage.setItem('p1', "A")

    classTwo.innerHTML = classB
    localStorage.setItem('p3', "B")

    classThree.innerHTML = classC
    localStorage.setItem('p4', "C")

    classFour.innerHTML = classD
    localStorage.setItem('p6', "D")
}

function dayTwoNormal() {
    classOne.innerHTML = classE
    localStorage.setItem('p1', "E")

    classTwo.innerHTML = classF
    localStorage.setItem('p3', "F")

    classThree.innerHTML = classG
    localStorage.setItem('p4', "G")

    classFour.innerHTML = classH
    localStorage.setItem('p6', "H")
}

function dayThreeNormal() {
    classOne.innerHTML = classC
    localStorage.setItem('p1', "C")

    classTwo.innerHTML = classD
    localStorage.setItem('p3', "D")

    classThree.innerHTML = classA
    localStorage.setItem('p4', "A")

    classFour.innerHTML = classB
    localStorage.setItem('p6', "B")
}

function dayFourNormal() {
    classOne.innerHTML = classG
    localStorage.setItem('p1', "G")

    classTwo.innerHTML = classH
    localStorage.setItem('p3', "H")

    classThree.innerHTML = classE
    localStorage.setItem('p4', "E")

    classFour.innerHTML = classF
    localStorage.setItem('p6', "F")
}



function updateShownClasses() {
    if (day == 1) {
        dayOneNormal()
    } else if (day == 2) {
        dayTwoNormal()
    } else if (day == 3) {
        dayThreeNormal()
    } else if (day == 4) {
        dayFourNormal()
    }
    document.getElementById('day').innerHTML = `Day: ${day}`
}


dayAdderCounter = 0
const backOneDay = document.getElementById('backOneDay')
document.addEventListener('DOMContentLoaded', function() {
    backOneDay.addEventListener('click', function() {
        if (!isShownDateSunday && !isShownDateMonday) {
            day = parseInt(day)
            if (day == 1) {
                day = 4
            } else {
                day -= 1
            }
        }
        updateShownClasses()
        dayAdderCounter -= 1
        updateDate(dayAdderCounter)
    }, false)
}, false)

const forwardOneDay = document.getElementById('forwardOneDay')
document.addEventListener('DOMContentLoaded', function() {
    forwardOneDay.addEventListener('click', function() {
        if (!isShownDateWeekend) {
            day = parseInt(day)
            if (day == 4) {
                day = 1
            } else {
                day += 1
            }
        }
        updateShownClasses()
        dayAdderCounter += 1
        updateDate(dayAdderCounter)
    }, false)
}, false)

function updateDate(daysToAdd) {
    var today = new Date()
    newDate = today.setDate(today.getDate() + daysToAdd)

    shownDate = new Date(newDate)
    if (shownDate.getDay() == 0 || shownDate.getDay() == 6) {
        isShownDateWeekend = true
    } else {
        isShownDateWeekend = false
    }
    if (shownDate.getDay() == 1) {
        isShownDateMonday = true
    } else {
        isShownDateMonday = false
    }
    if (shownDate.getDay() == 0) {
        isShownDateSunday = true
    } else {
        isShownDateSunday = false
    }
    document.getElementById('date').innerHTML = shownDate.toDateString()

    // for (let i = 0; i < holidays.length; i++) {
    //     if (`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}` == holidays[i]) {
    //         isShownDateHoliday = true
    //     } else {
    //         isShownDateHoliday = false

    //     }
    // }
    // print(isShownDateHoliday)


}

// Got this all from stackoverflow
function workingDaysBetweenDates(d0, d1) {
    var startDate = parseDate(d0);
    var endDate = parseDate(d1);
    // populate the holidays array with all required dates without first taking care of what day of the week they happen
    // Validate input
    if (endDate < startDate)
        return 0;

    var z = 0; // number of days to substract at the very end
    for (i = 0; i < holidays.length; i++) {
        var cand = parseDate(holidays[i]);
        var candDay = cand.getDay();

        if (cand >= startDate && cand <= endDate && candDay != 0 && candDay != 6) {
            // we'll only substract the date if it is between the start or end dates AND it isn't already a saturday or sunday
            z++;
        }

    }
    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1); // Start just after midnight
    endDate.setHours(23, 59, 59, 999); // End just before midnight
    var diff = endDate - startDate; // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);

    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 3);

    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

    // Remove weekend not previously removed.   
    if (startDay - endDay > 1)
        days = days - 2;

    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6)
        days = days - 1

    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0)
        days = days - 1

    // substract the holiday dates from the original calculation and return to the DOM
    return days - z;
}

function parseDate(input) {
    // Transform date from text to date
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
}

const date = new Date()

const daysSinceStart = workingDaysBetweenDates('2022-09-07', '2022-09-18' /*`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`*/ );

newDay = daysSinceStart % 4
if (newDay == 0) {
    newDay = 4
}


localStorage.setItem('day', newDay)



day = localStorage.getItem('day')
updateShownClasses()
updateDate(0)

// TODO: Make system to load arbitrary date