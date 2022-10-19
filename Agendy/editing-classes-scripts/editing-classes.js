const save = document.getElementById('save')
document.addEventListener('DOMContentLoaded', function() {
    save.addEventListener('click', function() {
        updateClasses()
    }, false)
}, false)

function updateClasses() {
    userClassA = document.getElementById('class-a').value
    classADesc = document.getElementById('class-a-desc').value
    userClassB = document.getElementById('class-b').value
    classBDesc = document.getElementById('class-b-desc').value
    userClassC = document.getElementById('class-c').value
    classCDesc = document.getElementById('class-c-desc').value
    userClassD = document.getElementById('class-d').value
    classDDesc = document.getElementById('class-d-desc').value
    userClassE = document.getElementById('class-e').value
    classEDesc = document.getElementById('class-e-desc').value
    userClassF = document.getElementById('class-f').value
    classFDesc = document.getElementById('class-f-desc').value
    userClassG = document.getElementById('class-g').value
    classGDesc = document.getElementById('class-g-desc').value
    userClassH = document.getElementById('class-h').value
    classHDesc = document.getElementById('class-h-desc').value

    if (userClassA == '' || userClassB == '' || userClassC == '' || userClassD == '' || userClassE == '' || userClassF == '' || userClassG == '' || userClassH == '') {
        document.getElementById('save-alert').innerHTML = "Classes not updated, you left some fields blank. (Descriptions are optional)"
        document.getElementById('save-alert').classList.remove('alert-secondary')
        document.getElementById('save-alert').classList.add('alert-danger')
    } else {
        // Clearing the storage and making sure that the theme doesn't go away
        var theme = localStorage.getItem('theme')
        localStorage.clear()
        localStorage.setItem('theme', theme)


        localStorage.setItem('class-a', userClassA)
        localStorage.setItem('class-a-desc', classADesc)
        localStorage.setItem('class-b', userClassB)
        localStorage.setItem('class-b-desc', classBDesc)
        localStorage.setItem('class-c', userClassC)
        localStorage.setItem('class-c-desc', classCDesc)
        localStorage.setItem('class-d', userClassD)
        localStorage.setItem('class-d-desc', classDDesc)
        localStorage.setItem('class-e', userClassE)
        localStorage.setItem('class-e-desc', classEDesc)
        localStorage.setItem('class-f', userClassF)
        localStorage.setItem('class-f-desc', classFDesc)
        localStorage.setItem('class-g', userClassG)
        localStorage.setItem('class-g-desc', classGDesc)
        localStorage.setItem('class-h', userClassH)
        localStorage.setItem('class-h-desc', classHDesc)

        var today = new Date()
        localStorage.setItem('day-of-week', today.getDay())

        document.getElementById('save-alert').innerHTML = "Classes updated! Open the extension to view."
        document.getElementById('save-alert').classList.remove('alert-secondary')
        document.getElementById('save-alert').classList.remove('alert-danger')
        document.getElementById('save-alert').classList.add('alert-success')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('class-a').value = localStorage.getItem('class-a')
    document.getElementById('class-a-desc').value = localStorage.getItem('class-a-desc')
    document.getElementById('class-b').value = localStorage.getItem('class-b')
    document.getElementById('class-b-desc').value = localStorage.getItem('class-b-desc')
    document.getElementById('class-c').value = localStorage.getItem('class-c')
    document.getElementById('class-c-desc').value = localStorage.getItem('class-c-desc')
    document.getElementById('class-d').value = localStorage.getItem('class-d')
    document.getElementById('class-d-desc').value = localStorage.getItem('class-d-desc')
    document.getElementById('class-e').value = localStorage.getItem('class-e')
    document.getElementById('class-e-desc').value = localStorage.getItem('class-e-desc')
    document.getElementById('class-f').value = localStorage.getItem('class-f')
    document.getElementById('class-f-desc').value = localStorage.getItem('class-f-desc')
    document.getElementById('class-g').value = localStorage.getItem('class-g')
    document.getElementById('class-g-desc').value = localStorage.getItem('class-g-desc')
    document.getElementById('class-h').value = localStorage.getItem('class-h')
    document.getElementById('class-h-desc').value = localStorage.getItem('class-h-desc')
}, false)