/*
  This script handles the playback of the logo's audio element
*/
// Get the logo and the audio tag's contents...
var elk = document.getElementById('logo');
var sounds = document.getElementById('elk_bugle');

// ...add the event listener for click event
elk.addEventListener('click', playAudio);

// ...define function for audio playback
function playAudio() {
  sounds.play();
}
