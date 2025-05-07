// Ensure the background music plays automatically
window.onload = function() {
    var audio = document.getElementById('background-music');
    audio.volume = 1; // Set volume to 100%
    audio.play().catch(function(error) {
        console.log("Audio playback failed: " + error);
        // Many browsers require user interaction before playing audio
        document.body.addEventListener('click', function() {
            audio.play();
        }, { once: true });
    });

    // Ensure the music loops (in addition to HTML loop attribute)
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}