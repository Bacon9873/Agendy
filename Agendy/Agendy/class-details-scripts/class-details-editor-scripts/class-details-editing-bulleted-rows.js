var classNotes = document.getElementById('class-notes')

// Bulleted Row
var isBulletedRow = false
var numOfTimesClicked = 0
const bulletedRowButton = document.getElementById('bulleted-list-button')
document.addEventListener('DOMContentLoaded', function() {
    bulletedRowButton.addEventListener('click', function() {
        if (numOfTimesClicked % 2 == 0) {
            isBulletedRow = true
            bulletedRow()
        } else {
            isBulletedRow = false
            stopBulletedRow()
        }
        updateButton()
        numOfTimesClicked += 1
    }, false)
}, false)

function updateButton() {
    if (isBulletedRow) {
        bulletedRowButton.classList.remove('btn-outline-primary')
        bulletedRowButton.classList.add('btn-primary')
    } else {
        bulletedRowButton.classList.remove('btn-primary')
        bulletedRowButton.classList.add('btn-outline-primary')
    }
}
var count = 1

function keydownHandlerBullet(event) {
    if (event.key === 'Enter' && classNotes === document.activeElement) {
        // Prevent the Save dialog to open
        event.preventDefault();
        count += 1
        classNotes.value = `${classNotes.value}` + '\n' + `    • `
    }

}

function bulletedRow() {

    classNotes.value = `${classNotes.value}` + '\n' + `    • `
    document.addEventListener('keydown', keydownHandlerBullet);
}

function stopBulletedRow() {
    count = 1
    document.removeEventListener('keydown', keydownHandlerBullet)
}