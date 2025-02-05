function startTimer() {
    let time = document.getElementById("timeInput").value;
    let countdownDisplay = document.getElementById("countdownDisplay");

    if (time && time > 0) {
        let timer = setInterval(function() {
            countdownDisplay.innerHTML = "Time remaining: " + time + " seconds";
            time--;

            if (time < 0) {
                clearInterval(timer);
                countdownDisplay.innerHTML = "Time's up!";
            }
        }, 1000);
    } else {
        countdownDisplay.innerHTML = "Please enter a valid number greater than 0!";
    }
}
