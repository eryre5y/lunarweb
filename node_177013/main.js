// wait until DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const warning = document.getElementById("warning");

  // play on first click anywhere
  const startMusic = () => {
    // warning.style.display = "none"; // hide warning
    warning.classList.toggle("hide", true);
    audio.play().catch((err) => {
      console.log("Playback blocked:", err);
    });
    // remove listener so it only triggers once
    document.removeEventListener("click", startMusic);
  };

  document.addEventListener("click", startMusic);
});
