var elk = document.getElementById('logo');
var sounds = document.getElementById('elk_bugle');

elk.addEventListener('click', playAudio);

function playAudio() {
  sounds.play();
}
