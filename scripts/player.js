const audio = document.querySelector("audio");
const playPause = document.querySelector("#playPause");
const stopSong = document.querySelector("#stopSong");
const nextSong = document.querySelector("#nextSong");
const prevSong = document.querySelector("#prevSong");


const songs = [
  "01 - Like A Stone",
  "02 - Prisoner Of Your Eyes",
  "03 - Black Diamond",
  "04 - Righteous Glory",
  "05 - Forever And One",
  "06 - Dreaming",
  "07 - Still Loving You",
  "08 - A Tale that wasn't right",
  "09 - Dust in the Wind",
  "10 - Rainbow Eyes",
  "11 - This Is Your Life",
  "12 - Vermillion Pt. 2",
  "13 - Lake Of Tears",
  "14 - Wind Of Change",
  "15 - Still Got The Blues",
  "16 - Forever One",
  "17 - Careless Whisper",
  "18 - Dream_On",
  "19 - Wasting Love",
  "20 - Last Drop Falls",
  "21 - Catch The Rainbow",
  "22 - Bridge To Cross"

];

let songIndex = 0;
let count = 0 

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `./assets/songs/${song}.mp3`
};

playPause.addEventListener("click", () => {
  // audio.play();
  if (count == 0) {
    count = 1;
    audio.play();
    playPause.src = "./assets/pause.png";
  } else {
    count = 0;
    audio.pause();
    playPause.src = "./assets/play-button.png";
  }
});

stopSong.addEventListener("click", () => {
  playPause.src="./assets/play-button.png";
  audio.pause();
  count = 0;
  audio.currentTime = 0;
});

nextSong.addEventListener("click", () => {
  songIndex ++;

  if( songIndex > songs.length - 1) {
    songIndex = 0;
  }
  count = 1;
  playPause.src="./assets/pause.png";
  loadSong(songs[songIndex]);
  audio.play();
})

prevSong.addEventListener("click", () => {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  count = 1;
  playPause.src="./assets/pause.png";
  loadSong(songs[songIndex]);
  audio.play();
})

audio.addEventListener('ended', () => {
  songIndex ++;

  if( songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  audio.play();
});

