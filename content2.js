function playNextVideo() {
  const nextButton = document.querySelector('a.ytp-next-button');
  if (nextButton) {
    nextButton.click();
    console.log("Next video played. Generating random wait time...");

    // Generate a random wait time between 60 and 120 seconds (in milliseconds)
    let waitTime = Math.floor(Math.random() * (120 - 60 + 1) + 60) * 1000;
    console.log(`Waiting for ${waitTime / 1000} seconds before playing the next video.`);

    // Schedule the next video play after the random interval (NO URL CHECK HERE)
    setTimeout(playNextVideo, waitTime);
  } else {
    console.log("Next button not found, stopping execution.");
  }
}

// Function to check the URL every 5 seconds
function getYouTubeVideoId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

function checkVideoIdAndStart() {
  if (getYouTubeVideoId() === "__bNjF-xR1U") {
    console.log("Video ID matched! Starting 2-minute countdown...");
    setTimeout(playNextVideo, 120000); // 2 minutes = 120,000 milliseconds
  } else {
    console.log("Video ID does not match. Checking again in 5 seconds...");
    setTimeout(checkVideoIdAndStart, 5000); // Re-check the video ID every 5 seconds
  }
}

checkVideoIdAndStart();

