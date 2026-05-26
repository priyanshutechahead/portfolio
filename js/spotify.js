async function shuffleSong() {
  const iframe = document.getElementById("spotify-player");
  const btn = document.querySelector("#shuffleSongBtn span");
  try {
    if (btn) {
      btn.style.transform = "rotate(180deg)";
      btn.style.transition = "transform 0.3s ease";
    }

    const response = await fetch("songs.txt");
    const text = await response.text();
    const songs = text
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (songs.length > 0 && iframe) {
      const currentSrc = iframe.src;
      const availableSongs = songs.filter((s) => s !== currentSrc);
      const songPool = availableSongs.length > 0 ? availableSongs : songs;
      const randomSong = songPool[Math.floor(Math.random() * songPool.length)];

      iframe.style.opacity = "0.5";
      setTimeout(() => {
        iframe.src = randomSong;
        iframe.onload = () => {
          iframe.style.opacity = "1";
          setTimeout(() => {
            if (btn) btn.style.transform = "rotate(0deg)";
          }, 300);
        };
      }, 300);
    }
  } catch (e) {
    console.error("Failed to load songs", e);
    if (btn) btn.style.transform = "rotate(0deg)";
  }
}

const shuffleBtn = document.getElementById("shuffleSongBtn");
if (shuffleBtn) {
  shuffleBtn.addEventListener("click", shuffleSong);
}
