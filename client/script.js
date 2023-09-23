const checkInput = document.getElementById('darkmode');
const container = document.querySelector("body");
const price = document.getElementById('main-price-to-trade');

document.querySelector("#darkModebutton").addEventListener("click",()=>{
    
    checkInput.checked = !checkInput.checked;
    
    container.style.backgroundColor = checkInput.checked?"white":"var(--dark)";
    price.style.color = checkInput.checked?"black":"white";
    
})

const progressCircle = document.querySelector('.progress-fill');
const countdownElement = document.querySelector('.countdown');

let countdown = 60; // Initial countdown time in seconds

function updateProgressBar() {
    const percent = ((60 - countdown) / 60) * 100; // Calculate percentage for progress
    const dashArray = ((100 - percent) / 100) * 314; // Calculate dash array

    progressCircle.style.strokeDasharray = `${dashArray}, 314`; // Update the dash array
    countdownElement.textContent = countdown; // Update the countdown display

    if (countdown <= 0) {
        clearInterval(interval); // Stop the countdown when it reaches 0
    }

    countdown--;
}

// Initial call to update progress bar and start countdown
updateProgressBar();
const interval = setInterval(updateProgressBar, 1000); // Update every second

$(function() {
    $('.chart').easyPieChart({
        size: 160,
        barColor: "#36e617",
        scaleLength: 0,
        lineWidth: 15,
        trackColor: "#525151",
        lineCap: "circle",
        animate: 2000,
        onStart: function(from, to) {
            $(this.el).find('.percent').text(Math.round(to));
        },
        onStop: function(from, to) {
            $(this.el).find('.percent').text(Math.round(to));
        },
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});


