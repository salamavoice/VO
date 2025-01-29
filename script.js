const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const trackTitle = document.getElementById('track-title');

// List of audio tracks
const tracks = [
  { title: 'بودكاست تخليد لذكري جدي', src: 'track1.mp3' },
  { title: 'السيدة خديجة رضي الله عنها', src: 'track2.mp3' },
  { title: 'اعلان غير رسمي بالفصحي', src: 'track3.mp3' },
  { title: 'اعلان غير رسمي بالعامية', src: 'track4.mp3' },
  { title: 'ملخص رواية', src: 'track5.mp3' },
  { title: 'اعلان غير رسمي (Buffalo Burger)', src: 'track6.mp3' },
  { title: 'رد آلي', src: 'track7.mp3' },
  { title: 'تمثيل اذاعي لدور الزوج (مسلسل شقة بن الحجة)', src: 'track9.mp3' }
];

let currentTrack = 0;
let isPlaying = false;
let isShuffle = false;

// Load the current track
function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
}

// Play or Pause the audio
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
}

// Move to the previous track
function playPrev() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = '⏸️';
  isPlaying = true;
}

// Move to the next track
function playNext() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = '⏸️';
  isPlaying = true;
}

// Shuffle the track order
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.style.backgroundColor = isShuffle ? '#ff6347' : '#666';
  if (isShuffle) {
    currentTrack = Math.floor(Math.random() * tracks.length);
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
  }
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);
shuffleBtn.addEventListener('click', toggleShuffle);

// Load the first track initially
loadTrack(currentTrack);

document.getElementById('image').addEventListener('click', function() {
  const audio = document.getElementById('WelcomeAudio');
  audio.play().then(() => {
    console.log("Audio played successfully.");
  }).catch(error => {
    console.error("Error playing audio", error)
  })
});

document.getElementById('logo').addEventListener('click', function() {
  currentTrack = 7; // Track 8 (0-based index)
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = '⏸️';
  isPlaying = true;
});

// Video player functionality
const video = document.getElementById('video');
const playPauseVideoBtn = document.getElementById('play-pause-video');
const prevVideoBtn = document.getElementById('prev-video');
const nextVideoBtn = document.getElementById('next-video');
const videoTitle = document.getElementById('video-title');

let currentVideo = 0;
let isVideoPlaying = false;

// List of video tracks
const videos = [
  { title: 'Video 1', src: 'vid1.mp4' }
];

// Load the current video
function loadVideo(index) {
  const videoTrack = videos[index];
  video.src = videoTrack.src;
  videoTitle.textContent = videoTrack.title;
}

// Play or Pause the video
function togglePlayPauseVideo() {
  if (isVideoPlaying) {
    video.pause();
    playPauseVideoBtn.textContent = '▶️';
  } else {
    video.play();
    playPauseVideoBtn.textContent = '⏸️';
  }
  isVideoPlaying = !isVideoPlaying;
}

// Move to the previous video
function playPrevVideo() {
  currentVideo = (currentVideo - 1 + videos.length) % videos.length;
  loadVideo(currentVideo);
  video.play();
  playPauseVideoBtn.textContent = '⏸️';
  isVideoPlaying = true;
}

// Move to the next video
function playNextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  loadVideo(currentVideo);
  video.play();
  playPauseVideoBtn.textContent = '⏸️';
  isVideoPlaying = true;
}

// Event Listeners for video player
playPauseVideoBtn.addEventListener('click', togglePlayPauseVideo);
prevVideoBtn.addEventListener('click', playPrevVideo);
nextVideoBtn.addEventListener('click', playNextVideo);

// Load the first video initially
loadVideo(currentVideo);