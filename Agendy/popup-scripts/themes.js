/*
    Changes all the themes inside of the popup based on what it recieved from the 
    themes selector in the options menu.
*/

// Gets the theme from the db and if returns null defaults to light mode (ew but idc)
const theme = localStorage.getItem('theme')
if (theme == null) {
    lightMode()
} else if (theme == 'light-mode') {
    lightMode()
} else {
    darkMode()
}

// Function that makes everything dark mode (thanks bootstrap)
function darkMode() {
    document.getElementById('body').classList.add('bg-dark')
    document.getElementById('table-classes').classList.add('table-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.add('text-white')
    }
}

// Function that makes everything light mode (thanks bootstrap)
function lightMode() {
    document.getElementById('body').classList.remove('bg-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.remove('text-white')
    }
}