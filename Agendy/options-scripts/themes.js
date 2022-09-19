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