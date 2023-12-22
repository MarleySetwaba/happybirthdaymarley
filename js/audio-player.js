// audio-player.js

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById("myAudio");

    // Check if the audio has already been started on another page
    if (sessionStorage.getItem('audioPlaying')) {
        audio.play();
    }

    // Uncomment the line below if you want the audio to loop
    // audio.loop = true;

    // Uncomment the line below if you want to pause the audio after a specific time (in milliseconds)
    // setTimeout(function(){ audio.pause(); }, 5000); // 5000 milliseconds = 5 seconds

    // Store the playback state in sessionStorage when the user navigates away
    window.addEventListener('beforeunload', function () {
        if (!audio.paused) {
            sessionStorage.setItem('audioPlaying', 'true');
        } else {
            sessionStorage.removeItem('audioPlaying');
        }
    });
});
