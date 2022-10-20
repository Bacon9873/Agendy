// Gets the +/- buttons from the DOM
const newAssignmentButton = document.getElementById('new-assignment-button')
const removeNewAssignmentButton = document.getElementById('remove-assignment-button')

// Gets the class letter of the class details we are viewing
const currClassLetter = localStorage.getItem('class-letter')

// Gets the largest assignment ID of the last time we accessed the page and sets it to one if it returns null
var largestAssignmentID = localStorage.getItem('largest-assignment-number-' + currClassLetter)
if (localStorage.getItem(largestAssignmentID == null)) {
    localStorage.setItem('largest-assignment-number-' + currClassLetter, '1')
    largestAssignmentID = localStorage.getItem('largest-assignment-number-' + currClassLetter)
}

// Sets the assignment count to one more than the largest assignment ID because it is used by the next one we are making
var assignmentCount = parseInt(largestAssignmentID) + 1


// Adds event listeners for the +/- buttons and calls their respective functions
document.addEventListener('DOMContentLoaded', function() {
    newAssignmentButton.addEventListener('click', function() {
        addNewAssignment()
            // Updating the largest assignment id and the assignment count
        localStorage.setItem('largest-assignment-number-' + currClassLetter, assignmentCount)
        assignmentCount += 1
            // Scrolls the view
        document.getElementById('bottom').scrollIntoView();

    }, false)
}, false)

document.addEventListener('DOMContentLoaded', function() {
    removeNewAssignmentButton.addEventListener('click', function() {
        removeNewAssignment()
    }, false)
}, false)

// Defines the addNewAssignment function which adds a new assignment to the DOM, scolls the view down, and updates all the necessary variables
function addNewAssignment() {
    // Creates a new div for this new assignment
    var assignmentDiv = document.createElement('div')
    assignmentDiv.id = `assignment-${assignmentCount}-div`

    // Creates all the HTML elements
    var heading = document.createElement('h4');
    heading.innerHTML = `Assignment ${assignmentCount}`
    var titleLabel = document.createElement('h5')
    titleLabel.innerHTML = 'Title'
    var titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.id = `assignment-${assignmentCount}-title-input`
    titleInput.maxLength = '10'
    var dueDateLabel = document.createElement('h5')
    dueDateLabel.innerHTML = 'Due Date'
    var dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.id = `assignment-${assignmentCount}-due-date`
    var descLabel = document.createElement('h5')
    descLabel.innerHTML = 'Description'
    var descTextArea = document.createElement('textarea')
    descTextArea.name = `assignment-${assignmentCount}-desc`
    descTextArea.id = `assignment-${assignmentCount}-desc`
    descTextArea.cols = '40'
    descTextArea.rows = '5'
    descTextArea.placeholder = 'What to do, where to find it, etc. (Max 500 characters)'
    descTextArea.maxLength = '500'

    // Gets the assignments div which holds all assignments (mother div if you will)
    assignmentsDiv = document.getElementById('assignments-section')

    // Adds the above HTML elements to the new assignment div
    assignmentDiv.appendChild(heading)
    assignmentDiv.appendChild(titleLabel)
    assignmentDiv.appendChild(titleInput)
    assignmentDiv.appendChild(dueDateLabel)
    assignmentDiv.appendChild(dueDateInput)
    assignmentDiv.appendChild(descLabel)
    assignmentDiv.appendChild(descTextArea)

    // Adds the new assignment to the "mother div"
    assignmentsDiv.appendChild(assignmentDiv)

}

// Function that removes the latest assignment
function removeNewAssignment() {
    if (assignmentCount != 2) {
        assignmentsDiv = document.getElementById('assignments-section')
        assignmentsDiv.removeChild(assignmentsDiv.lastChild)
        assignmentCount -= 1
        localStorage.setItem('largest-assignment-number-' + currClassLetter, parseInt(localStorage.getItem('largest-assignment-number-' + currClassLetter)) - 1)
    } else {
        // Clears the last assignment if you click remove when there is no more to remove
        document.getElementById("assignment-1-title-input").value = ""
        document.getElementById("assignment-1-due-date").value = ""
        document.getElementById("assignment-1-desc").value = ""
    }
}

// Function that creates as many new assignments as the largest assignment number - 1 (because there is already one created by default)
function createNecessaryAssignments() {
    assignmentCount = 2
    for (let i = 0; i < parseInt(localStorage.getItem('largest-assignment-number-' + currClassLetter)) - 1; i++) {
        addNewAssignment()
        assignmentCount += 1
    }
}
createNecessaryAssignments()