const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackName = document.getElementById('track-name');

const tracks = [
    { name: 'Song 1', src: 'C:\\Users\\Administrator\\Desktop\\project 2\\media\\128-Tune Mere Jana 128 Kbps.mp3' },
    { name: 'Song 2', src: 'C:\\Users\\Administrator\\Desktop\\project 2\\media\\128-Darkhaast - Shivaay 128 Kbps.mp3' }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackName.textContent = track.name;
}

function playTrack() {
    audio.play();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

playButton.addEventListener('click', playTrack);
prevButton.addEventListener('click', prevTrack);
nextButton.addEventListener('click', nextTrack);


loadTrack(currentTrackIndex);
