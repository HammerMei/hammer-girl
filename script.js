// Hammer Girl - Music Player Script

const tracks = [
    {
        title: "Low Tide",
        genre: "Deep House",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/low_tide.ogg",
        description: "Sunset beach vibes, melodic chords"
    },
    {
        title: "Cut It",
        genre: "Drum & Bass",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/cut_it.ogg",
        description: "Fast breakbeats, neurofunk bass"
    },
    {
        title: "Lifted Higher",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/lifted_higher.ogg",
        description: "Soaring synths, emotional buildups"
    },
    {
        title: "Low End",
        genre: "Dark Techno",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/low_end.ogg",
        description: "Berlin underground, hypnotic beat"
    },
    {
        title: "This Day",
        genre: "Happy EDM",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/this_day.ogg",
        description: "Summer vibes, celebration"
    },
    {
        title: "还是想你",
        genre: "Mandarin Pop",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/huan_xiang_ni.ogg",
        description: "Chinese pop, emotional ballad"
    },
    {
        title: "We Are The Bass Generation",
        genre: "Bass House",
        file: "https://raw.githubusercontent.com/glin/hammer-girl/main/tracks/bass_generation.ogg",
        description: "Festival anthem, massive drop"
    }
];

let currentTrack = 0;
let isPlaying = false;
let audio = new Audio();

// DOM Elements
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');
const trackList = document.getElementById('track-list');

// Initialize
function init() {
    loadTrackList();
    loadTrack(currentTrack);
    setupEventListeners();
}

function loadTrackList() {
    trackList.innerHTML = '';
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <div class="track-name">${track.title}</div>
                <div class="track-genre">${track.genre}</div>
            </div>
            <span>🎵</span>
        `;
        li.addEventListener('click', () => {
            currentTrack = index;
            loadTrack(currentTrack);
            play();
        });
        trackList.appendChild(li);
    });
}

function loadTrack(index) {
    const track = tracks[index];
    trackTitle.textContent = track.title;
    trackArtist.textContent = `Hammer Girl • ${track.genre}`;
    audio.src = track.file;
    audio.volume = volumeSlider.value;
    updateTrackListUI();
}

function play() {
    isPlaying = true;
    playBtn.textContent = '⏸️';
    audio.play().catch(e => console.log('Playback error:', e));
}

function pause() {
    isPlaying = false;
    playBtn.textContent = '▶️';
    audio.pause();
}

function togglePlay() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    if (isPlaying) play();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    if (isPlaying) play();
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration || 0);
}

function seek(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateTrackListUI() {
    const items = trackList.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentTrack) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Event Listeners
function setupEventListeners() {
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    progressBar.parentElement.addEventListener('click', seek);
    volumeSlider.addEventListener('input', setVolume);
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);
    audio.addEventListener('loadedmetadata', updateProgress);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);