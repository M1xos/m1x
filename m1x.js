document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const introOverlay = document.getElementById('intro-overlay');
    const enterButton = document.getElementById('enter-button');
    const soundToggle = document.getElementById('sound-toggle');
    
    let isPlaying = false;
    
    // Function to start audio with fade in
    function startAudio() {
        if (!isPlaying) {
            audio.volume = 0; // Start with volume at 0
            audio.play()
                .then(() => {
                    isPlaying = true;
                    
                    // Fade in volume gradually
                    let fadeInterval = setInterval(() => {
                        if (audio.volume < 0.9) {
                            audio.volume += 0.1;
                        } else {
                            audio.volume = 1;
                            clearInterval(fadeInterval);
                            soundToggle.classList.remove('pulsing');
                        }
                    }, 100);
                })
                .catch(error => {
                    console.log("Audio playback failed: " + error);
                });
        }
    }
    
    // Enter button click handler
    enterButton.addEventListener('click', function() {
        startAudio();
        
        // Add fade out effect to the intro overlay
        introOverlay.style.transition = 'opacity 1s ease-out';
        introOverlay.style.opacity = '0';
        
        // After fade out is complete, hide the element
        setTimeout(() => {
            introOverlay.classList.add('hidden');
        }, 1000);
    });
    
    // Toggle sound on/off
    soundToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        const icon = soundToggle.querySelector('i');
        
        if (audio.paused) {
            audio.play();
            icon.className = 'fas fa-volume-up';
        } else {
            audio.pause();
            icon.className = 'fas fa-volume-mute';
        }
    });
    
    // Make the volume icon pulse to draw attention
    soundToggle.classList.add('pulsing');
    
    // Ensure the music continues to loop
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
});