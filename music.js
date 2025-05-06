document.addEventListener('DOMContentLoaded', function() {
    // Audio setup with Howler.js
    const sounds = {
        classica: new Howl({
            src: ['https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js'], // Placeholder - replace with actual audio file
            format: ['mp3'],
            html5: true,
            volume: 0.7,
            loop: true
        }),
        rock: new Howl({
            src: ['https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js'], // Placeholder - replace with actual audio file
            format: ['mp3'],
            html5: true,
            volume: 0.7,
            loop: true
        }),
        jazz: new Howl({
            src: ['https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js'], // Placeholder - replace with actual audio file
            format: ['mp3'],
            html5: true,
            volume: 0.7,
            loop: true
        }),
        electronic: new Howl({
            src: ['https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js'], // Placeholder - replace with actual audio file
            format: ['mp3'],
            html5: true,
            volume: 0.7,
            loop: true
        }),
        hiphop: new Howl({
            src: ['https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js'], // Placeholder - replace with actual audio file
            format: ['mp3'],
            html5: true,
            volume: 0.7,
            loop: true
        })
    };

    // Animation for section appearance
    const sections = document.querySelectorAll('.section');
    let delay = 300;
    
    // Track which section is currently playing
    let currentPlayingSection = null;

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animate');
        }, delay * (index + 1));

        // Handle hover events for audio
        const audioType = section.getAttribute('data-audio');
        
        section.addEventListener('mouseenter', () => {
            // Play sound
            if (sounds[audioType]) {
                Object.values(sounds).forEach(sound => sound.stop());
                sounds[audioType].play();
                
                // Track the current playing section
                if (currentPlayingSection) {
                    currentPlayingSection.classList.remove('playing-shine');
                }
                currentPlayingSection = section;
                section.classList.add('playing-shine');
            }
            
            // Start visualizer animation
            const bars = section.querySelectorAll('.bar');
            animateVisualizer(bars);
            
            // Add shine effect class (for manual handling)
            section.classList.add('playing-shine');
        });

        section.addEventListener('mouseleave', () => {
            // Stop sound
            if (sounds[audioType]) {
                sounds[audioType].stop();
            }
            
            // Reset visualizer
            const bars = section.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.height = '0px';
            });
            
            // Remove shine effect class when mouse leaves
            section.classList.remove('playing-shine');
            currentPlayingSection = null;
        });

        // Handle click for redirection
        section.addEventListener('click', () => {
            const url = section.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Audio visualizer animation
    function animateVisualizer(bars) {
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 20) + 3;
            bar.style.height = `${randomHeight}px`;
        });
        
        if (document.querySelector('.section:hover')) {
            setTimeout(() => animateVisualizer(bars), 100);
        }
    }
}); 