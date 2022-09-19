var day = localStorage.getItem('day')

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

const date = new Date()

var month = date.getMonth()
if (`${date.getMonth() + 1}`.length == 1) {
    month = '0' + `${date.getMonth() + 1}`
}

var dayOfMonth = date.getDate()
if (`${date.getDate() + 1}`.length == 1) {
    dayOfMonth = '0' + `${date.getDate() + 1}`
}

todaysDate = `${date.getFullYear()}${month}${dayOfMonth}`

console.log(todaysDate);

async function getJSON() {
    return fetch('/popup-scripts/showing-classes/dates.json')
        .then((response) => response.json())
        .then((responseJson) => { return responseJson });
}


async function updateThings() {
    const dayNum = await this.getJSON()
    var foundDay = false

    for (let i = 0; i < dayNum.dates.length; i++) {
        if (dayNum.dates[i] == todaysDate) {
            day = dayNum.dates[c + 1]
            foundDay = true
        }
    }
    localStorage.setItem('day', day)

    day = localStorage.getItem('day')
    updateShownClasses()
    updateDate(0)
}

updateThings()

// TODO: Make system to load arbitrary date