var largestAssignmentID = localStorage.getItem('largest-assignment-number-' + currClassLetter)
if (largestAssignmentID == null) {
    largestAssignmentID = 1
}

function saveAssignmentInfo() {

    var saveAlert = document.getElementById('save-alert-assignments')

    saveAlert.classList.remove('alert-secondary')
    saveAlert.classList.add('alert-success')
    saveAlert.innerHTML = 'Assignments saved!'
    for (let i = 0; i <= largestAssignmentID; i++) {
        // Title
        localStorage.setItem(`assignment-number-${i + 1}-title-` + currClassLetter, document.getElementById(`assignment-${i + 1}-title-input`).value)
        localStorage.setItem(`assignment-number-${i + 1}-title-` + currClassLetter, document.getElementById(`assignment-${i + 1}-title-input`).value)

        // Date
        localStorage.setItem(`assignment-number-${i + 1}-date-` + currClassLetter, document.getElementById(`assignment-${i + 1}-due-date`).value)
        localStorage.setItem(`assignment-number-${i + 1}-date-` + currClassLetter, document.getElementById(`assignment-${i + 1}-due-date`).value)

        // Desc
        localStorage.setItem(`assignment-number-${i + 1}-desc-` + currClassLetter, document.getElementById(`assignment-${i + 1}-desc`).value)
        localStorage.setItem(`assignment-number-${i + 1}-desc-` + currClassLetter, document.getElementById(`assignment-${i + 1}-desc`).value)
    }

}

function showAssignmentInfo() {
    var title
    var dueDate
    var desc

    for (let i = 0; i <= largestAssignmentID; i++) {
        // Title
        title = localStorage.getItem(`assignment-number-${i + 1}-title-` + currClassLetter)
        document.getElementById(`assignment-${i + 1}-title-input`).value = title

        // Date
        dueDate = localStorage.getItem(`assignment-number-${i + 1}-date-` + currClassLetter)
        document.getElementById(`assignment-${i + 1}-due-date`).value = dueDate

        // Desc
        desc = localStorage.getItem(`assignment-number-${i + 1}-desc-` + currClassLetter)
        document.getElementById(`assignment-${i + 1}-desc`).value = desc
    }
}


const save = document.getElementById('save-assignments')
document.addEventListener('DOMContentLoaded', function() {
    save.addEventListener('click', function() {
        saveAssignmentInfo()
    }, false)
}, false)

document.addEventListener('DOMContentLoaded', function() {
    showAssignmentInfo()
})

document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 's') {
        // Prevent the Save dialog to open
        event.preventDefault();
        saveAssignmentInfo();
    }
});

function resetAssignmentsSaveAlert() {
    var saveAlert = document.getElementById('save-alert-assignments')

    saveAlert.classList.remove('alert-success')
    saveAlert.classList.add('alert-secondary')
    saveAlert.innerHTML = 'Press the button below to save. (or with CTRL + S) ASSIGNMENTS DO NOT AUTOSAVE'
}

setInterval(() => {
    resetAssignmentsSaveAlert()
}, 2000);