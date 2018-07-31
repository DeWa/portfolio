import { Howl, Howler } from 'howler';

const musicUrl = require('../assets/music/Herr_Doktor_-_06_-_Revenge.mp3');
const playButton = document.getElementById('playButton');

const music = new Howl({
  src: [musicUrl],
  html5: true,
  preload: false,
  loop: true,
  onload: () => music.play(),
  onplay: () => (playButton.innerHTML = '> Pause'),
  onpause: () => (playButton.innerHTML = '> Play'),
});

playButton.addEventListener('click', () => {
  if (music.state() === 'unloaded') {
    playButton.innerHTML = '> Loading...';
    music.load();
  } else {
    if (music.playing()) {
      music.pause();
    } else {
      music.play();
    }
  }
});
