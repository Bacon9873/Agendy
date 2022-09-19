console.log(currClassLetter);
var largestAssignmentID = localStorage.getItem('largest-assignment-number-' + currClassLetter)
console.log(largestAssignmentID);

function saveAssignmentInfo() {
    for (let i = 0; i <= largestAssignmentID; i++) {
        localStorage.setItem(`assignemnt-number-${i}-title`, document.getElementById(`assignment-${i + 1}-title-input`).value)
        localStorage.setItem(`assignemnt-number-${i}-due-date`, document.getElementById(`assignment-${i + 1}-due-date`).value)
        localStorage.setItem(`assignemnt-number-${i}-desc`, document.getElementById(`assignment-${i + 1}-desc`).value)
    }
}

function showAssignmentInfo() {
    var title
    var dueDate
    var desc
    for (let i = 0; i <= largestAssignmentID; i++) {
        title = localStorage.getItem(`assignemnt-number-${i}-title`)
        document.getElementById(`assignemnt-number-${i}-title`).value = title

        dueDate = localStorage.getItem(`assignemnt-number-${i}-due-date`)
        document.getElementById(`assignemnt-number-${i}-due-date`).value = dueDate

        desc = localStorage.getItem(`assignemnt-number-${i}-desc`)
        document.getElementById(`assignemnt-number-${i}-desc`).value = desc
    }
}


const save = document.getElementById('save-assignments')
document.addEventListener('DOMContentLoaded', function() {
    save.addEventListener('click', function() {
        saveAssignmentInfo()
        console.log(localStorage.getItem(`assignemnt-number-1-title`));
    }, false)
}, false)

showAssignmentInfo()