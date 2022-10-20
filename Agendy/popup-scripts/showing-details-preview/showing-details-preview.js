// Detecting when the expand button is clicked for period 1
var p1_counter = 0
const p1_expandButton = document.getElementById("p1-dropdown-button")
document.addEventListener('DOMContentLoaded', function() {
    p1_expandButton.addEventListener('click', function() {
        var p1_classLetter = localStorage.getItem('p1').toLowerCase()
        if (p1_counter % 2 == 0) {
            p1_expand(p1_classLetter)
            var previewArea = document.getElementById('p1-assignments-td')
            previewArea.classList.remove('hidden-div')
            previewArea.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
        } else {
            p1_contract(p1_classLetter)
            document.getElementById('p1-assignments-td').classList.add('hidden-div')
        }
        p1_counter += 1
    }, false)
}, false)

var p1_numberOfShownAssignments = 0

function p1_expand(classLetter) {
    var assignmentsDiv = document.getElementById('p1-assignments')

    var assignmentsLabel = document.createElement('p')
    assignmentsLabel.innerHTML = "Assignments:"
    assignmentsLabel.id = "assignments-label"

    var largestAssignmentNumber = localStorage.getItem('largest-assignment-number-' + classLetter)
    if (largestAssignmentNumber == 'null') {
        largestAssignmentNumber = 1
    }
    assignmentsDiv.appendChild(assignmentsLabel)

    for (let i = 0; i < largestAssignmentNumber; i++) {
        let assignment = document.createElement('p')
        var title = localStorage.getItem(`assignment-number-${i + 1}-title-` + classLetter)
        var date = localStorage.getItem(`assignment-number-${i + 1}-date-` + classLetter)

        assignment.innerHTML = "No Assignments!"
        if (title != null && date != null) {
            if (title == "") {
                title = "Untitled"
            }
            if (date == "") {
                date = "No Due Date"
            }
            assignment.innerHTML = title + ' | Due Date: ' + date
        }

        assignment.id = `shown-assignment-${p1_numberOfShownAssignments}`
        assignmentsDiv.appendChild(assignment)

        p1_numberOfShownAssignments += 1
    }


    document.getElementById('p1-dropdown-button').innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
}

function p1_contract() {
    document.getElementById('p1-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`

    document.getElementById('assignments-label').remove()
    for (let i = 0; i < p1_numberOfShownAssignments; i++) {
        document.getElementById(`shown-assignment-${i}`).remove()
    }
    p1_numberOfShownAssignments = 0
}

// Detecting when the expand button is clicked for period 3
var p3_counter = 0
const p3_expandButton = document.getElementById("p3-dropdown-button")
document.addEventListener('DOMContentLoaded', function() {
    p3_expandButton.addEventListener('click', function() {
        var p3_classLetter = localStorage.getItem('p3').toLowerCase()
        if (p3_counter % 2 == 0) {
            p3_expand(p3_classLetter)
            var previewArea = document.getElementById('p3-assignments-td')
            previewArea.classList.remove('hidden-div')
            previewArea.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
        } else {
            p3_contract(p3_classLetter)
            document.getElementById('p3-assignments-td').classList.add('hidden-div')
        }
        p3_counter += 1
    }, false)
}, false)

var p3_numberOfShownAssignments = 0

function p3_expand(classLetter) {
    var assignmentsDiv = document.getElementById('p3-assignments')

    var assignmentsLabel = document.createElement('p')
    assignmentsLabel.innerHTML = "Assignments:"
    assignmentsLabel.id = "assignments-label"

    var largestAssignmentNumber = localStorage.getItem('largest-assignment-number-' + classLetter)
    if (largestAssignmentNumber == 'null') {
        largestAssignmentNumber = 1
    }
    assignmentsDiv.appendChild(assignmentsLabel)

    for (let i = 0; i < largestAssignmentNumber; i++) {
        let assignment = document.createElement('p')
        var title = localStorage.getItem(`assignment-number-${i + 1}-title-` + classLetter)
        var date = localStorage.getItem(`assignment-number-${i + 1}-date-` + classLetter)

        assignment.innerHTML = "No Assignments!"
        if (title != null && date != null) {
            if (title == "") {
                title = "Untitled"
            }
            if (date == "") {
                date = "No Due Date"
            }
            assignment.innerHTML = title + ' | Due Date: ' + date
        }

        assignment.id = `shown-assignment-${p3_numberOfShownAssignments}`
        assignmentsDiv.appendChild(assignment)

        p3_numberOfShownAssignments += 1
    }


    document.getElementById('p3-dropdown-button').innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
}

function p3_contract() {
    document.getElementById('p3-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`

    document.getElementById('assignments-label').remove()
    for (let i = 0; i < p3_numberOfShownAssignments; i++) {
        document.getElementById(`shown-assignment-${i}`).remove()
    }
    p3_numberOfShownAssignments = 0
}

// Detecting when the expand button is clicked for period 4
var p4_counter = 0
const p4_expandButton = document.getElementById("p4-dropdown-button")
document.addEventListener('DOMContentLoaded', function() {
    p4_expandButton.addEventListener('click', function() {
        var p4_classLetter = localStorage.getItem('p4').toLowerCase()
        if (p4_counter % 2 == 0) {
            p4_expand(p4_classLetter)
            var previewArea = document.getElementById('p4-assignments-td')
            previewArea.classList.remove('hidden-div')
            previewArea.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
        } else {
            p4_contract(p4_classLetter)
            document.getElementById('p4-assignments-td').classList.add('hidden-div')
        }
        p4_counter += 1
    }, false)
}, false)

var p4_numberOfShownAssignments = 0

function p4_expand(classLetter) {
    var assignmentsDiv = document.getElementById('p4-assignments')

    var assignmentsLabel = document.createElement('p')
    assignmentsLabel.innerHTML = "Assignments:"
    assignmentsLabel.id = "assignments-label"

    var largestAssignmentNumber = localStorage.getItem('largest-assignment-number-' + classLetter)
    if (largestAssignmentNumber == 'null') {
        largestAssignmentNumber = 1
    }
    assignmentsDiv.appendChild(assignmentsLabel)

    for (let i = 0; i < largestAssignmentNumber; i++) {
        let assignment = document.createElement('p')
        var title = localStorage.getItem(`assignment-number-${i + 1}-title-` + classLetter)
        var date = localStorage.getItem(`assignment-number-${i + 1}-date-` + classLetter)

        assignment.innerHTML = "No Assignments!"
        if (title != null && date != null) {
            if (title == "") {
                title = "Untitled"
            }
            if (date == "") {
                date = "No Due Date"
            }
            assignment.innerHTML = title + ' | Due Date: ' + date
        }

        assignment.id = `shown-assignment-${p4_numberOfShownAssignments}`
        assignmentsDiv.appendChild(assignment)

        p4_numberOfShownAssignments += 1
    }


    document.getElementById('p4-dropdown-button').innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
}

function p4_contract() {
    document.getElementById('p4-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`

    document.getElementById('assignments-label').remove()
    for (let i = 0; i < p4_numberOfShownAssignments; i++) {
        document.getElementById(`shown-assignment-${i}`).remove()
    }
    p4_numberOfShownAssignments = 0
}

// Detecting when the expand button is clicked for period 4
var p6_counter = 0
const p6_expandButton = document.getElementById("p6-dropdown-button")
document.addEventListener('DOMContentLoaded', function() {
    p6_expandButton.addEventListener('click', function() {
        var p6_classLetter = localStorage.getItem('p6').toLowerCase()
        if (p6_counter % 2 == 0) {
            p6_expand(p6_classLetter)
            var previewArea = document.getElementById('p6-assignments-td')
            previewArea.classList.remove('hidden-div')
            previewArea.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
        } else {
            p6_contract(p6_classLetter)
            document.getElementById('p6-assignments-td').classList.add('hidden-div')
        }
        p6_counter += 1
    }, false)
}, false)

var p6_numberOfShownAssignments = 0

function p6_expand(classLetter) {
    var assignmentsDiv = document.getElementById('p6-assignments')

    var assignmentsLabel = document.createElement('p')
    assignmentsLabel.innerHTML = "Assignments:"
    assignmentsLabel.id = "assignments-label"

    var largestAssignmentNumber = localStorage.getItem('largest-assignment-number-' + classLetter)
    if (largestAssignmentNumber === null) {
        largestAssignmentNumber = 1
    }
    assignmentsDiv.appendChild(assignmentsLabel)

    for (let i = 0; i < largestAssignmentNumber; i++) {
        let assignment = document.createElement('p')
        var title = localStorage.getItem(`assignment-number-${i + 1}-title-` + classLetter)
        var date = localStorage.getItem(`assignment-number-${i + 1}-date-` + classLetter)
        console.log('asdf');

        assignment.innerHTML = "No Assignments!"
        if (title != null && date != null) {
            if (title == "") {
                title = "Untitled"
            }
            if (date == "") {
                date = "No Due Date"
            }
            assignment.innerHTML = title + ' | Due Date: ' + date
        }

        assignment.id = `shown-assignment-${p6_numberOfShownAssignments}`
        assignmentsDiv.appendChild(assignment)

        p6_numberOfShownAssignments += 1
    }


    document.getElementById('p6-dropdown-button').innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
}

function p6_contract() {
    document.getElementById('p6-dropdown-button').innerHTML = `<span class="material-symbols-outlined"> expand_more </span>`

    document.getElementById('assignments-label').remove()
    for (let i = 0; i < p6_numberOfShownAssignments; i++) {
        document.getElementById(`shown-assignment-${i}`).remove()
    }
    p6_numberOfShownAssignments = 0
}