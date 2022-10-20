var classNotes = document.getElementById('class-notes')

var currentAlignment = localStorage.getItem('class-notes-alignment')

var firstTimeClicking = true

if (currentAlignment == null) {
    localStorage.setItem('class-notes-alignment', 'left')
    currentAlignment = 'left'
}

function turnButtonPrimary(button) {
    button.classList.remove('btn-primary')
    button.classList.add('btn-outline-primary')
}

function turnButtonSecondary(button) {
    button.classList.add('btn-primary')
    button.classList.remove('btn-outline-primary')
}

const leftAlignButton = document.getElementById('align-left-button')
const centerAlignButton = document.getElementById('align-center-button')
const rightAlignButton = document.getElementById('align-right-button')

// Align Left
document.addEventListener('DOMContentLoaded', function() {
    leftAlignButton.addEventListener('click', function() {
        alignLeft()
        firstTimeClicking = false
    }, false)
}, false)

function alignLeft() {
    localStorage.setItem('class-notes-alignment', 'left')

    classNotes.classList.add('left')
    classNotes.classList.remove('center')
    classNotes.classList.remove('right')
    turnButtonPrimary(centerAlignButton)
    turnButtonPrimary(rightAlignButton)
    turnButtonSecondary(leftAlignButton)
}


// Align Center
document.addEventListener('DOMContentLoaded', function() {
    centerAlignButton.addEventListener('click', function() {
        alignCenter()
        firstTimeClicking = false
    }, false)
}, false)

function alignCenter() {
    localStorage.setItem('class-notes-alignment', 'center')

    classNotes.classList.add('center')
    classNotes.classList.remove('left')
    classNotes.classList.remove('right')
    turnButtonPrimary(leftAlignButton)
    turnButtonPrimary(rightAlignButton)
    turnButtonSecondary(centerAlignButton)
}

// Align Right
document.addEventListener('DOMContentLoaded', function() {
    rightAlignButton.addEventListener('click', function() {
        alignRight()
        firstTimeClicking = false
    }, false)
}, false)

function alignRight() {
    localStorage.setItem('class-notes-alignment', 'right')

    classNotes.classList.remove('center')
    classNotes.classList.remove('left')
    classNotes.classList.add('right')
    turnButtonPrimary(leftAlignButton)
    turnButtonSecondary(rightAlignButton)
    turnButtonPrimary(centerAlignButton)
}

// Setting it to the previous alignment
if (currentAlignment == 'left') {
    alignLeft()
    localStorage.setItem('class-notes-alignment', 'left')
} else if (currentAlignment == 'right') {
    alignRight()
    localStorage.setItem('class-notes-alignment', 'right')
} else {
    alignCenter()
    localStorage.setItem('class-notes-alignment', 'center')
}