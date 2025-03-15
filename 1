(function autoNextVideo() { 
    let autoNextInterval;
    let specialVideoTriggered = false; // Ensure special video runs only once
    const specialVideoURL = "https://www.youtube.com/watch?v=__bNjF-xR1U"; // Full URL
    const specialVideoID = new URL(specialVideoURL).searchParams.get("v"); // Extract special video ID

    function getCurrentVideoID() {
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("v"); // Extracts the video ID from YouTube URL
    }

    function playNext() {
        let currentVideoID = getCurrentVideoID();

        // Stop execution if the special video is playing
        if (currentVideoID === specialVideoID) {
            console.log("Special video is playing. Stopping auto next.");
            clearTimeout(autoNextInterval); // Stop the loop completely
            return;
        }

        let nextButton = document.querySelector(".ytp-next-button");
        if (nextButton) {
            nextButton.click();
            console.log("Playing next video...");
            scheduleSpecialVideo();
        } else {
            console.log("Next button not found.");
        }
    }

    function checkIfPlaying() {
        let playButton = document.querySelector(".ytp-play-button");
        return playButton && playButton.getAttribute("data-title-no-tooltip") === "Pause";
    }

    function loop() {
        let currentVideoID = getCurrentVideoID();

        if (currentVideoID === specialVideoID) {
            console.log("Special video detected in loop. Stopping script.");
            clearTimeout(autoNextInterval); // Stop any future executions
            return;
        }

        if (checkIfPlaying()) {
            let waitTime = Math.floor(Math.random() * (120 - 60 + 1) + 60) * 1000;
            console.log(`Waiting for ${waitTime / 1000} seconds...`);
            autoNextInterval = setTimeout(() => {
                playNext();
                loop();
            }, waitTime);
        } else {
            console.log("No video detected, retrying in 5 seconds...");
            setTimeout(loop, 5000);
        }
    }

    function playSpecialVideo() {
        clearTimeout(autoNextInterval); // Stop autoNextVideo function
        console.log("Redirecting to special video...");
        window.location.href = specialVideoURL; // Redirect to special video
    }

    function scheduleSpecialVideo() {
        if (!specialVideoTriggered) {
            specialVideoTriggered = true; // Mark that special video is triggered once
            let waitTime = Math.floor(Math.random() * (360 - 120 + 1) + 120) * 1000;
            console.log(`Special video will play in ${waitTime / 1000} seconds...`);
            setTimeout(playSpecialVideo, waitTime);
        }
    }

    console.log("YouTube Auto Next Video Script Started...");
    loop();
})();
