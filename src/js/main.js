(function() {
  const state = {
    musicLoading: false,
    musicLoaded: false,
    musicPlaying: false
  }
  
  // Music player
  const playButton = document.getElementById('playButton');
  const musicEle = document.getElementById('music');

  playButton.addEventListener('click', () => {
    if (!state.musicLoaded) {
      state.musicLoading = true;
      playButton.innerHTML = 'Loading...';
      musicEle.load();
    } else {
      if (state.musicPlaying) {
        musicEle.pause();
      }

      if (!state.musicPlaying) {
        musicEle.play();
      }
    }
  });

  musicEle.addEventListener('canplay', () => {
    musicEle.play();
    state.musicLoaded = true;
  });

  musicEle.addEventListener('play', () => {
    state.musicPlaying = true;
    playButton.innerHTML = 'Pause';
  });

  musicEle.addEventListener('pause', () => {
    state.musicPlaying = false;
    playButton.innerHTML = 'Play';
  });


})();
