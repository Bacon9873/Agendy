const edit = document.getElementById('edit')
document.addEventListener('DOMContentLoaded', function() {
    edit.addEventListener('click', function() {
        window.open('editing-classes.html', '_blank')
    }, false)
}, false)

const p1_row = document.getElementById('p1class')
document.addEventListener('DOMContentLoaded', function() {
    p1_row.addEventListener('click', function() {
        if (localStorage.getItem('p1') != "Weekend") {
            classToViewDetailsInitialization(localStorage.getItem('p1'))
            window.open('class-details.html', '_blank')
        }
    }, false)
}, false)

const p3_row = document.getElementById('p3class')
document.addEventListener('DOMContentLoaded', function() {
    p3_row.addEventListener('click', function() {
        if (localStorage.getItem('p3') != "Weekend") {
            classToViewDetailsInitialization(localStorage.getItem('p3'))
            window.open('class-details.html', '_blank')
        }
        console.log(localStorage.getItem('p3'));
    }, false)
}, false)
const p4_row = document.getElementById('p4class')
document.addEventListener('DOMContentLoaded', function() {
    p4_row.addEventListener('click', function() {
        if (localStorage.getItem('p4') != "Weekend") {
            classToViewDetailsInitialization(localStorage.getItem('p4'))
            window.open('class-details.html', '_blank')
        }
    }, false)
}, false)
const p6_row = document.getElementById('p6class')
document.addEventListener('DOMContentLoaded', function() {
    p6_row.addEventListener('click', function() {
        if (localStorage.getItem('p6') != "Weekend") {
            classToViewDetailsInitialization(localStorage.getItem('p6'))
            window.open('class-details.html', '_blank')
        }
    }, false)
}, false)


function classToViewDetailsInitialization(classLetter) {
    if (classLetter == 'A') {
        localStorage.setItem('class-name', localStorage.getItem('class-a'))
        localStorage.setItem('class-desc', localStorage.getItem('class-a-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-a-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())
    } else if (classLetter == 'B') {
        localStorage.setItem('class-name', localStorage.getItem('class-b'))
        localStorage.setItem('class-desc', localStorage.getItem('class-b-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-b-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else if (classLetter == 'C') {
        localStorage.setItem('class-name', localStorage.getItem('class-c'))
        localStorage.setItem('class-desc', localStorage.getItem('class-c-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-c-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else if (classLetter == 'D') {
        localStorage.setItem('class-name', localStorage.getItem('class-d'))
        localStorage.setItem('class-desc', localStorage.getItem('class-d-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-d-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else if (classLetter == 'E') {
        localStorage.setItem('class-name', localStorage.getItem('class-e'))
        localStorage.setItem('class-desc', localStorage.getItem('class-e-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-e-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else if (classLetter == 'F') {
        localStorage.setItem('class-name', localStorage.getItem('class-f'))
        localStorage.setItem('class-desc', localStorage.getItem('class-f-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-f-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else if (classLetter == 'G') {
        localStorage.setItem('class-name', localStorage.getItem('class-g'))
        localStorage.setItem('class-desc', localStorage.getItem('class-g-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-g-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    } else {
        localStorage.setItem('class-name', localStorage.getItem('class-h'))
        localStorage.setItem('class-desc', localStorage.getItem('class-h-desc'))
        localStorage.setItem('class-notes', localStorage.getItem('class-h-notes'))
        localStorage.setItem('class-letter', classLetter.toLowerCase())

    }
}