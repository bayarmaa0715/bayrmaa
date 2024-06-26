// https://blog.shahednasser.com/how-to-style-an-audio-element
const songList = [
  "./songs/24kGoldn - Mood (Official Video) ft. iann dior.mp3",
  "./songs/Young Wild and Free - Wiz Khalifa (LyricsVietsub).mp3",
  "./songs/Rutuu - Bolowsroltoi Huligaan (Official MV).mp3",
  "./songs/The Royal Heartaches - 6x6 lyrics (үгтэй).mp3",
  "./songs/WILLOW - Wait A Minute! (Lyrics).mp3",
  // {
  //   name: Mood,
  //   src: "./songs/24kGoldn - Mood (Official Video) ft. iann dior.mp3",
  // }
];

const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btn_PP = document.getElementById("btn_PP");
const audio = document.getElementsByTagName("audio")[0];
btnPlay.addEventListener("click", function () {
  audio.play();
  btnPlay.style.display = "none";
  btnPause.style.display = "block";
});

btnPause.addEventListener("click", function () {
  audio.pause();
  btnPause.style.display = "none";
  btnPlay.style.display = "flex";
});

const btnNext = document.getElementById("btnNext");
let currentSong = 0;

btnNext.addEventListener("click", function () {
  currentSong++; //0+1=1 ;1+1=2

  if (currentSong === songList.length) {
    currentSong = songList.length;
  }
  audio.src = songList[currentSong];

  audio.pause();
  btnPause.style.display = "none";
  btnPlay.style.display = "block";
});

const btnBefore = document.getElementById("btnBefore");

btnBefore.addEventListener("click", function () {
  audio.src = "./songs/The Royal Heartaches - 6x6 lyrics (үгтэй).mp3";
  audio.pause();
  btnPause.style.display = "none";
  btnPlay.style.display = "block";
});
