const className = localStorage.getItem('class-name')

document.getElementById('class-name').innerHTML = className
document.getElementById('dom-title').innerHTML = `${className} Details`

var desc = localStorage.getItem('class-desc')
if (desc == 'null') {
    desc = ''
}
document.getElementById('class-desc').innerHTML = desc

const classNotesView = document.getElementById('class-notes')

var isChangingNotes = false



document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
        // Prevent the Save dialog to open
        e.preventDefault();
        saveNotes();
    }
});

document.getElementById("class-notes")
    .addEventListener("input", (event) => {
        resetSaveAlert()
        isChangingNotes = true
    });

function saveNotes() {
    localStorage.setItem(`class-${localStorage.getItem('class-letter')}-notes`, classNotesView.value)
    document.getElementById('save-alert').classList.remove('alert-secondary')
    document.getElementById('save-alert').classList.add('alert-success')
    document.getElementById('save-alert').innerHTML = "Notes saved!"
}

function resetSaveAlert() {
    document.getElementById('save-alert').classList.remove('alert-success')
    document.getElementById('save-alert').classList.add('alert-secondary')
    document.getElementById('save-alert').innerHTML = "Notes autosave every two seconds after changes are made. (or with CTRL+S)"
}

function showSavedNotes() {
    var classNotes = localStorage.getItem('class-notes')
    if (classNotes == 'null') {
        classNotes = ''
    }
    classNotesView.value = classNotes
}

setInterval(() => {
    if (isChangingNotes) {
        saveNotes()
    }
}, 2000);

showSavedNotes()