/*
    Simple one, just changes the theme of the entire application. This worked very
    well when I first implimented it somehow. Thinking of possibly making more themes as
    time goes on. This all works thanks to bootstrap having both a light default and a
    dark default.
*/

// Checks if theme selector value has changed and if so changes to the respective mode
var themeSelector = document.getElementById("theme-selector");
themeSelector.addEventListener('change', (event) => {
    localStorage.setItem('theme', themeSelector.value)
    var theme = localStorage.getItem('theme')
    if (theme == null || theme == 'light-mode') {
        lightMode()
    } else {
        darkMode()
    }
})

// Script to change all elements that need to be changed to dark mode (default light mode)
const theme = localStorage.getItem('theme')
if (theme == null) {
    lightMode()
} else if (theme == 'light-mode') {
    lightMode()
} else {
    darkMode()
}

// Makes everything dark mode
function darkMode() {
    document.getElementById('body').classList.add('bg-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.add('text-white')
    }
}

// Makes everything light mode
function lightMode() {
    document.getElementById('body').classList.remove('bg-dark')
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].classList.remove('text-white')
    }
}