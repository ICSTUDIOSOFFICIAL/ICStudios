// sound.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "click.mp3"; // file is in root
  audio.preload = "auto";
  document.body.appendChild(audio);

  // add sound to all buttons + sidebar links
  document.querySelectorAll("button, .sidebar a").forEach(el => {
    el.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });
  });
});
