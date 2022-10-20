// Initializes variables
var day = localStorage.getItem('day')

var classA = localStorage.getItem('class-a')
var classB = localStorage.getItem('class-b')
var classC = localStorage.getItem('class-c')
var classD = localStorage.getItem('class-d')
var classE = localStorage.getItem('class-e')
var classF = localStorage.getItem('class-f')
var classG = localStorage.getItem('class-g')
var classH = localStorage.getItem('class-h')

var classOne = document.getElementById('c1')
var classTwo = document.getElementById('c2')
var classThree = document.getElementById('c3')
var classFour = document.getElementById('c4')

// Function that displays day one on the popup by getting the variables from the db
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

// Function that displays day two on the popup same way as day one
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

// Function that displays day three on the popup same way as day one
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

// Function that displays day four on the popup same way as day one
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

// Function that displays weekend everywhere on weekends
function weekend() {
    classOne.innerHTML = "Weekend"
    localStorage.setItem('p1', "Weekend")

    classTwo.innerHTML = "Weekend"
    localStorage.setItem('p3', "Weekend")

    classThree.innerHTML = "Weekend"
    localStorage.setItem('p4', "Weekend")

    classFour.innerHTML = "Weekend"
    localStorage.setItem('p6', "Weekend")
}

// Shows the proper classes based on the current day
function updateShownClasses() {
    if (day == 1) {
        dayOneNormal()
    } else if (day == 2) {
        dayTwoNormal()
    } else if (day == 3) {
        dayThreeNormal()
    } else if (day == 4) {
        dayFourNormal()
    } else {
        weekend()
    }
    document.getElementById('day').innerHTML = `Day: ${day}`
}

// Adds/subtracts days when the buttons are pressed

// Subtracts a day
var dayAdderCounter = 0
const backOneDay = document.getElementById('backOneDay')
document.addEventListener('DOMContentLoaded', function() {
    backOneDay.addEventListener('click', function() {
        dayAdderCounter -= 1
        updateSchoolDay(dayAdderCounter)

        // Gets rid of the assignments preview if they're open
        document.getElementById('p1-assignments-td').classList.add('hidden-div')
        document.getElementById('p3-assignments-td').classList.add('hidden-div')
        document.getElementById('p4-assignments-td').classList.add('hidden-div')
        document.getElementById('p6-assignments-td').classList.add('hidden-div')

        document.getElementById('p1-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p3-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p4-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p6-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
    }, false)
}, false)

// Adds a day
const forwardOneDay = document.getElementById('forwardOneDay')
document.addEventListener('DOMContentLoaded', function() {
    forwardOneDay.addEventListener('click', function() {
        dayAdderCounter += 1
        updateSchoolDay(dayAdderCounter)

        // Gets rid of the assignments preview if they're open
        document.getElementById('p1-assignments-td').classList.add('hidden-div')
        document.getElementById('p3-assignments-td').classList.add('hidden-div')
        document.getElementById('p4-assignments-td').classList.add('hidden-div')
        document.getElementById('p6-assignments-td').classList.add('hidden-div')

        document.getElementById('p1-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p3-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p4-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
        document.getElementById('p6-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`
    }, false)
}, false)

/* 
    I don't know how I wrote this and I never want to touch it again but this basically
    takes the info from the json and changes the day to the proper one given today's date
*/

// Gets todays date and puts it into a format that is readable for the computer
function findDate(daysToAdd) {
    var today = new Date()
    newDate = today.setDate(today.getDate() + daysToAdd)

    date = new Date(newDate)
    document.getElementById('date').innerHTML = date.toDateString()

    var month = date.getMonth() + 1
    if (`${month}`.length == 1) {
        month = '0' + `${date.getMonth() + 1}`
    }

    var dayOfMonth = date.getDate()
    if (`${date.getDate() + 1}`.length == 1) {
        if (!dayOfMonth == 1) {
            dayOfMonth = '0' + `${date.getDate() + 1}`
        } else {
            dayOfMonth = '0' + `${date.getDate()}`
        }
    }

    return `${date.getFullYear()}${month}${dayOfMonth}`
}


// Gets the json that is kindly hosted on jsonbin
async function getJSON() {
    return fetch('https://api.jsonbin.io/v3/b/6327dd7ba1610e63862fccec')
        .then((response) => response.json())
        .then((responseJson) => { return responseJson });
}

// Updats the current day
async function updateSchoolDay(daysToAdd) {
    const dayNum = await this.getJSON()
    var foundDay = false
    findDate(daysToAdd)


    for (let i = 0; i < dayNum.record.dates.length; i++) {
        if (dayNum.record.dates[i] == findDate(daysToAdd)) {
            day = dayNum.record.dates[i + 1]
            foundDay = true
        }
    }
    if (!foundDay) {
        day = "Weekend"
    }

    localStorage.setItem('day', day)
    day = localStorage.getItem('day')
    updateShownClasses()
}

// Makes everything pretty when user opens app
async function updateThings() {
    updateSchoolDay(0)
    updateShownClasses()
}

updateThings()

// TODO: Make system to load arbitrary date (Shouldn't be too hard)