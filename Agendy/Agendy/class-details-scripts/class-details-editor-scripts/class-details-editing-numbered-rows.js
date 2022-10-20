var classNotes = document.getElementById('class-notes')

// Numbered Row
var isNumberedRow = false
var numOfTimesClicked = 0
const numberedRowButton = document.getElementById('numbered-list-button')
document.addEventListener('DOMContentLoaded', function() {
    numberedRowButton.addEventListener('click', function() {
        if (numOfTimesClicked % 2 == 0) {
            isNumberedRow = true
            numberedRow()
            numberedRowButton.classList.remove('btn-outline-primary')
            numberedRowButton.classList.add('btn-primary')
        } else {
            isNumberedRow = false
            stopNumberedRow()
            numberedRowButton.classList.remove('btn-primary')
            numberedRowButton.classList.add('btn-outline-primary')
        }
        updateButton()
        numOfTimesClicked += 1
    }, false)
}, false)


var count = 1

function keydownHandlerNumber(event) {
    if (event.key === 'Enter' && classNotes === document.activeElement) {
        // Prevent the Save dialog to open
        event.preventDefault();
        count += 1
        classNotes.value = `${classNotes.value}` + '\n' + `    ${count}. `
    }

}

function numberedRow() {

    classNotes.value = `${classNotes.value}` + '\n' + `    ${count}. `
    document.addEventListener('keydown', keydownHandlerNumber);
}

function stopNumberedRow() {
    count = 1
    document.removeEventListener('keydown', keydownHandlerNumber)
}