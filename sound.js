// sound.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "/ICStudios/click.mp3"; // absolute path for GitHub Pages
  audio.preload = "auto";
  document.body.appendChild(audio);

  // add sound to all buttons + sidebar links
  document.querySelectorAll("button, .sidebar a").forEach(el => {
    el.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Sound play failed:", err);
      });
    });
  });
});
