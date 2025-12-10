const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const songs = playlist.getElementsByTagName("li");

// Hàm phát nhạc
function playSong(song) {
  for (let s of songs) {
    s.classList.remove("active");
  }
  song.classList.add("active");
  audio.src = song.getAttribute("data-src");
  audio.play();
}

// Gán sự kiện click cho từng bài hát
for (let song of songs) {
  song.addEventListener("click", function() {
    playSong(this);
  });
}

// Tự động phát bài tiếp theo
audio.addEventListener("ended", function() {
  let current = document.querySelector("#playlist .active");
  let next = current.nextElementSibling;
  if (next) {
    playSong(next);
  }
});
