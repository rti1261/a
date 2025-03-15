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
function checkUrlAndStart() {
  if (window.location.href === "https://www.youtube.com/watch?v=__bNjF-xR1U") {
    console.log("URL matched! Starting 2-minute countdown...");
    setTimeout(playNextVideo, 120000); // 2 minutes = 120,000 milliseconds
  } else {
    console.log("URL does not match. Checking again in 5 seconds...");
    setTimeout(checkUrlAndStart, 5000); // Re-check the URL every 5 seconds
  }
}

// Start checking the URL every 5 seconds
checkUrlAndStart();
