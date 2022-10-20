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


var dayAdderCounter = 0
const backOneDay = document.getElementById('backOneDay')
document.addEventListener('DOMContentLoaded', function() {
    backOneDay.addEventListener('click', function() {
        dayAdderCounter -= 1
        updateSchoolDay(dayAdderCounter)
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

const forwardOneDay = document.getElementById('forwardOneDay')
document.addEventListener('DOMContentLoaded', function() {
    forwardOneDay.addEventListener('click', function() {
        dayAdderCounter += 1
        updateSchoolDay(dayAdderCounter)
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



async function getJSON() {
    return fetch('https://api.jsonbin.io/v3/b/6327dd7ba1610e63862fccec')
        .then((response) => response.json())
        .then((responseJson) => { return responseJson });
}

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


async function updateThings() {
    updateSchoolDay(0)
    updateShownClasses()
}

updateThings()

// TODO: Make system to load arbitrary date