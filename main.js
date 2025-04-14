let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;



const music_list = [
  {
    img: "./images/P18.png",
    name: "Mayi_Ri",
    artist: "",
    music: "./music/Mayi_Ri_-_OST_Asrar_Waqar_Ali_ARY_Digital.mp3",
  },
  {
    img: "./images/P1.png",
    name: "Apni ByIdhi Zindagi",
    artist: "",
    music: "./music/Apni_Bhi_Zindagi_Mein(128k).mp3",
  },
  {
    img: "./images/P6.png",
    name: "Dil Ki Jo Manoon To",
    artist: "",
    music: "./music/Dil_Ki_Jo_Maanoon_To(128k).mp3",
  },
  {
    img: "./images/P2.png",
    name: "Dil Ne Yeh Kaha Hai",
    artist:"",
    music: "./music/Dil_Ne_Yeh_Kaha_Hain_Dil_Se(128k).mp3",
  },
  {
    img: "./images/P7.png",
    name: "Main Ladki Ka Deewana",
    artist: "",
    music: "./music/Main_Ladki_Ka_Deewana(128k).mp3",
  },
  {
    img: "./images/P11.png",
    name: "Radhe Braj Jan Man",
    artist: "",
    music: "./music/Radhe_Braj_Jan_Man_Sukhkari(128k).mp3",
  },
  {
    img: "./images/P10.png",
    name: "Radhe Radhe",
    artist: "",
    music: "./music/Radhe_Radhe(128k).mp3",
  },
  {
    img: "./images/P12.png",
    name: "Sandese Aate Hai",
    artist: "",
    music: "./music/Sandese_Aate_Hai(128k).mp3",
  },
  {
    img: "./images/P8.png",
    name: "Sun Meri Shehzadi",
    artist: "",
    music: "./music/Sun_Meri_Shehzadi_From_Dilwale(128k).mp3",
  },
  {
    img: "./images/P9.png",
    name: "Tere Dard Se Dil",
    artist: "",
    music: "./music/Tere_Dard_Se_Dil(128k).mp3",
  },
  {
    img: "./images/P13.png",
    name: "To Chalun",
    artist: "",
    music: "./music/To_Chalun(128k).mp3",
  },
  {
    img: "./images/P5.png",
    name: "Tum To Thehre Pardesi",
    artist: "",
    music: "./music/Tum_To_Thehre_Pardesi(128k).mp3",
  },
  {
    img: "./images/P3.png",
    name: "Us Ladki Pe Dil Aaya",
    artist: "",
    music: "./music/US_LADKI_PE_DIL_AAYA(128k).mp3",
  },
  {
    img: "./images/P4.png",
    name: "Woh Ladki Yaad Aati Hai",
    artist: "",
    music: "./music/Woh_Ladki_Bahut_Yaad_Aati(128k).mp3",
  },
  {
    img: "./images/P14.png",
    name: "Uhe Liwaj Me",
    artist: "",
    music: "./music/A_janu_uhe_liwaj_me_hmra_se_mile_hhhh.mp3",
  },
  {
    img: "./images/P17.png",
    name: "Jaa Bewafa Jaa",
    artist: "",
    music: "./music/Jaa_Bewafa_Jaa(128k).mp3",
  },
  {
    img: "./images/P15.png",
    name: "Main Sehra Bandh Ke",
    artist: "",
    music: "./music/Main_Sehra_Bandh_Ke(128k).mp3",
  },
  {
    img: "./images/P16.png",
    name: "O Lal Dupatte Wali",
    artist: "",
    music: "./music/O_Lal_Dupatte_Wali(128k).mp3",
  },
];

// const music_list = [
//   {
//     img: "./images/P18.png",
//     name: "Mayi_Ri",
//     artist: "",
//     music: "./music/Mayi_Ri_-_OST___Audio_🎧___Asrar___Waqar_Ali___ARY_Digital(128k).mp3",
//   },
//   {
//     img: "./images/P1.png",
//     name: "Apni ByIdhi Zindagi",
//     artist: "",
//     music: "./music/Apni_Bhi_Zindagi_Mein(128k).mp3",
//   },
//   {
//     img: "./images/P6.png",
//     name: "Dil Ki Jo Manoon To",
//     artist: "",
//     music: "./music/Dil_Ki_Jo_Maanoon_To(128k).mp3",
//   },
//   {
//     img: "./images/P2.png",
//     name: "💞 ne yeh kaha hai 💞",
//     artist:"",
//     music: "./music/Dil_Ne_Yeh_Kaha_Hain_Dil_Se(128k).mp3",
//   },
//   {
//     img: "./images/P7.png",
//     name: "Main Ladki Ka Deewana",
//     artist: "",
//     music: "./music/Main_Ladki_Ka_Deewana(128k).mp3",
//   },
//   {
//     img: "./images/P11.png",
//     name: "Radhe Braj Jan Man",
//     artist: "",
//     music: "./music/Radhe_Braj_Jan_Man_Sukhkari(128k).mp3",
//   },
//     {
//     img: "./images/P10.png",
//     name: "Radhe Radhe",
//     artist: "",
//     music: "./music/Radhe_Radhe(128k).mp3",
//   },
//     {
//     img: "./images/P12.png",
//     name: "Sandese aate hai",
//     artist: "",
//     music: "./music/Sandese_Aate_Hai(128k).mp3",
//   },
//   {
//     img: "./images/P8.png",
//     name: "Sun merishehjadi",
//     artist: "",
//     music: "./music/Sun_Meri_Shehzadi__From__Dilwale__(128k).mp3",
//   },
//   {
//     img: "./images/P9.png",
//     name: "Tere dard se dil",
//     artist: "",
//     music: "./music/Tere_Dard_Se_Dil(128k).mp3",
//   },
//   {
//     img: "./images/P13.png",
//     name: "To Chalun",
//     artist: "",
//     music: "./music/To_Chalun(128k).mp3",
//   },
//   {
//     img: "./images/P5.png",
//     name: "Tum yo thehre pardesi",
//     artist: "",
//     music: './music/Tum_To_Thehre_Pardesi(128k).mp3",
//   },
//     {
//     img: "./images/P3.png",
//     name: "us ladki pe dil aaya",
//     artist: "",
//     music: "./music/US_LADKI_PE_DIL_AAYA(128k).mp3",
//   },
//     {
//     img: "./images/P4.png",
//     name: "ladki yad aati hai",
//     artist: "",
//     music: "./music/Woh_Ladki_Bahut_Yaad_Aati(128k).mp3",
//   },
//   {
//     img: "./images/P14.png",
//     name: "Uhe liwaj me ",
//     artist: "",
//     music: "./music/A janu uhe liwaj me hmra se mile hhhh.mp3",
//   },
//     {
//     img: "./images/P17.png",
//     name: "Jaa_Bewafa_Jaa",
//     artist: "",
//     music: "./music/Jaa_Bewafa_Jaa(128k).mp"',
//   },
//  {
//     img: "./images/P15.png",
//     name: "Ladki_Ka_Deewana",
//     artist: "",
//     music: "./music/Main_Sehra_Bandh_Ke(128k).mp3",
//  },
//  {
//     img: "./images/P16.png",
//     name: "O_Lal_Dupatte_Wali",
//     artist: "",
//     music: "./music/O_Lal_Dupatte_Wali(128k).mp3",
//  },
// ];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      (curr_track.duration - durationMinutes * 60)
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
