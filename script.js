let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("playBtn");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");

const playIcon = '<i class="fa-solid fa-play"></i>';
const pauseIcon = '<i class="fa-solid fa-pause"></i>';

/* <img src="Change.jfif" alt="" class="song-img">
        <h1>Change (In The House Of Flies)</h1>
        <p>Deftones</p> */

const music = [
  {
    img: 'Change.jfif',
    SongName: 'Change (In The House Of Flies)',
    Artist: 'Deftones'
  },

  {
    img: 'Change.jfif',
    SongName: 'Digital Bath',
    Artist: 'Deftones'
  },

  {
    img: 'Around the fur.jfif',
    SongName: 'Be Quiet And Drive (Far Away)',
    Artist: 'Deftones'
  },

  {
    img: 'Around the fur.jfif',
    SongName: 'My Own Summer (Shove It)',
    Artist: 'Deftones'
  }
]

const songs = ['Deftones - Change (In The House Of Flies) [Official Music Video].mp3',
  'Digital Bath.mp3',
  'Deftones - Be Quiet And Drive (Far Away) (Official Video) [HD Remaster].mp3',
  'Deftones - My Own Summer (Official Music Video) [HD Remaster].mp3'];

let currentSong = 0;
song.src = songs[currentSong];
songImg.classList.add("song-img")
songImg.src = music[currentSong].img;
songTitle.textContent = music[currentSong].SongName;
songArtist.textContent = music[currentSong].Artist;


song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

function loadSong(index) {
  currentSong = index;
  song.src = songs[currentSong];
  song.load();
  song.play();
}

function nextSong() {
  if (currentSong < songs.length) {
    loadSong(currentSong + 1);
    songImg.src = music[currentSong].img;
    songTitle.textContent = music[currentSong].SongName;
    songArtist.textContent = music[currentSong].Artist;
  }
}

function prevSong() {
  if (currentSong > 0 && currentSong < songs.length) {
    loadSong(currentSong - 1);
    songImg.src = music[currentSong].img;
    songTitle.textContent = music[currentSong].SongName;
    songArtist.textContent = music[currentSong].Artist;
  }

}
// The icon always follows the audio's real state
song.addEventListener("play", () => {
  playBtn.innerHTML = pauseIcon;
});

song.addEventListener("pause", () => {
  playBtn.innerHTML = playIcon;
});

song.addEventListener("ended", () => {
  playBtn.innerHTML = playIcon;
});

// Move the progress bar as the song plays
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

// Drag the progress bar to seek
progress.oninput = function () {
  song.currentTime = progress.value;
};

