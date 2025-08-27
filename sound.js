// sound.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");

  // Primary source = GitHub Pages
  audio.src = "/ICStudios/click.mp3";
  audio.preload = "auto";

  // Fallback: raw GitHub file
  audio.addEventListener("error", () => {
    console.warn("Primary audio not found, using raw GitHub link.");
    audio.src = "https://raw.githubusercontent.com/ICSTUDIOSOFFICIAL/ICStudios/main/click.mp3";
  });

  document.body.appendChild(audio);

  // Add click sound to nav links + buttons
  document.querySelectorAll("button, nav a").forEach(el => {
    el.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Sound play failed:", err);
      });
    });
  });
});
