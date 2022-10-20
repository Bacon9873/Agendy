/*
    This controls the clock you see on the top left of the popup.html
    page. It was the very first thing I made in the entire project.
*/

// Checks if number is one digit so it will add a zero before it
function addZeroBefore(number) {
    if (number.toString().length == 1) {
        let newNum = '0' + number.toString()
        return newNum
    }
    return number.toString()
}

// Puts the time on the clock DOM element and continually updates it
function updateClock() {
    // Gets the Date object
    var time = new Date();

    // Gets the clock DOM element
    var clock = document.getElementById("clock")

    // Gets the time units
    var hours24 = time.getHours()
    var mins = addZeroBefore(time.getMinutes())
    var secs = addZeroBefore(time.getSeconds())

    // Checks to see if it is AM or PM
    if (hours24 >= 12) {
        var AM_PM = "PM"
        var hours12 = hours24 - 12
        if (hours12 == 0) {
            hours12 = 12
        }
    } else {
        var AM_PM = "AM"
        if (hours24 == 0) {
            hours12 = 12
        } else {
            var hours12 = hours24

        }
    }

    // Puts all the data into the clock DOM element
    clock.innerHTML = `${hours12}:${mins}:${secs}${AM_PM}`
}

// Does this when you open the popup.html page
updateClock()

// Keeps updating the clock every second
setInterval(() => {
    updateClock()
}, 1000);