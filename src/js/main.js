import { Howl, Howler } from "howler";

const NeonRidingUrl = require("../assets/music/Neon_Riding.mp3");
const playButton = document.getElementById("playButton");

const music = new Howl({
  src: [NeonRidingUrl],
  html5: true,
  preload: false,
  loop: true,
  onload: () => music.play(),
  onplay: () => (playButton.innerHTML = "> Pause"),
  onpause: () => (playButton.innerHTML = "> Play")
});

playButton.addEventListener("click", () => {
  if (music.state() === "unloaded") {
    playButton.innerHTML = "> Loading...";
    music.load();
  } else {
    if (music.playing()) {
      music.pause();
    } else {
      music.play();
    }
  }
});
