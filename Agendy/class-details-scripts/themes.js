// Script to change all elements that need to be changed to dark mode
const theme = localStorage.getItem('theme')
if (theme == null) {
    lightMode()
} else if (theme == 'light-mode') {
    lightMode()
} else {
    darkMode()
}

function darkMode() {
    document.getElementById('body').classList.add('bg-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.add('text-white')
    }
}

function lightMode() {
    document.getElementById('body').classList.remove('bg-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.remove('text-white')
    }
}