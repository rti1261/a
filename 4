function setVideoQuality() {
    var qualityMenu = document.querySelector('.ytp-settings-button');

    if (qualityMenu) {
        qualityMenu.click();
        setTimeout(() => {
            let qualityOptions = document.querySelectorAll('.ytp-menuitem');
            qualityOptions[qualityOptions.length - 1].click(); // Open quality menu
            setTimeout(() => {
                let resolutions = document.querySelectorAll('.ytp-menuitem');
                let selected = false;

                resolutions.forEach(item => {
                    if (item.innerText.includes('144p')) {
                        item.click(); // Select 144p if available
                        selected = true;
                    }
                });

                if (!selected) {
                    console.warn("144p not available. Selecting lowest resolution instead.");
                    resolutions[resolutions.length - 1].click(); // Select lowest available quality
                }
            }, 500);
        }, 500);
    } else {
        console.warn("Settings menu not found. Try opening the video first.");
    }
}

// Wait for the first video to start playing
let video = document.querySelector('video');

if (video) {
    video.addEventListener('playing', function () {
        setTimeout(setVideoQuality, 1000); // Delay to allow menu to load properly
    }, { once: true }); // Ensure it only runs once for the first video
} else {
    console.warn("No video found on the page.");
}
