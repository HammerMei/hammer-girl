// Hammer Girl - Music Player Script

const tracks = [
    {
        title: "Low Tide",
        genre: "Deep House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/low_tide.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/low_tide_cover.png",
        lyrics: `[Drop]
Low tide
Just ride

[Verse 1]
Salt
Skin burns gold
Sinking down beneath the pier
Drifting on a dream
Far
Away
Lost out where the water turns

[Chorus]
Amber on the waves
Amber on the waves
Watching it go
Let it go

[Bridge]
Under the orange
Under the purple
Under the black
Gone
Simply gone`,
        description: "Sunset beach vibes, melodic chords"
    },
    {
        title: "Cut It",
        genre: "Drum & Bass",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/cut_it.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/cut_it_cover.png",
        lyrics: `[Drop]
Cut it
Feel the beat
Drop it
Feel the heat

[Verse 1]
Running through the night
Neon lights so bright
Moving fast
Can't look back

[Chorus]
Cut it
Feel the beat
Drop it
Feel the heat`,
        description: "Fast breakbeats, neurofunk bass"
    },
    {
        title: "Lifted Higher",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/lifted_higher.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/lifted_higher_cover.png",
        lyrics: `[Drop]
Rise up
Touch the sky
Feel the light
Flying high

[Verse 1]
Sunrise glow
Energy flow
Heartbeat slow
Let it go

[Chorus]
Lifted higher
So much higher
Touch the sky
We can fly`,
        description: "Soaring synths, emotional buildups"
    },
    {
        title: "Low End",
        genre: "Dark Techno",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/low_end.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/low_end_cover.png",
        lyrics: `[Drop]
Low end
Deep bass
Heartbeat
In the dark

[Verse 1]
Warehouse sound
Lost and found
Moving ground
Feeling drowned

[Chorus]
Low end
Deep bass
Rhythm in the dark`,
        description: "Berlin underground, hypnotic beat"
    },
    {
        title: "This Day",
        genre: "Happy EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/this_day.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/this_day_cover.png",
        lyrics: `[Drop]
Feel the beat
Dance today
Celebrate
Feel the way

[Verse 1]
Sunshine bright
Moving light
Party time
Feeling fine

[Chorus]
This day
Forever young
Dance today
Feel the fun`,
        description: "Summer vibes, celebration"
    },
    {
        title: "还是想你",
        genre: "Mandarin Pop",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/mandarin_song.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/huan_xiang_ni_v3.png",
        lyrics: `[Verse 1]
红色的
晨曦里
我看见飞鸟划过
寻找梦想的轮廓
云朵
在散开
脚下这条路还很长
汗水让视线更明亮

[Chorus]
勇敢去闯
勇敢去闯
我要去最高的地方
不害怕阻挡
哪怕大���湿透肩膀

[Bridge]
不后悔
不流泪
不后退
我听见心跳的节奏
比这世界更自由`,
        description: "Chinese pop, emotional ballad"
    },
    {
        title: "We Are The Bass Generation",
        genre: "Bass House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/bass_generation.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/bass_generation_cover.png",
        lyrics: `[Drop]
Floor shake
Floor shake
Heavy weight
Heavy weight

[Verse 1]
Chrome
Cold steel
My heavy boots on the metal
Rough grit
Tearing up the level

[Chorus]
We are the bass generation
Let the speakers blow`,
        description: "Festival anthem, massive drop"
    },
    {
        title: "鐵錘小妹",
        genre: "EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/xiaomei_first.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/xiaomei_first_cover.png",
        lyrics: `鐵錘小妹 數據心臟跟著跳
節奏燃燒 蹦迪魂在沖雲霄
夜裡燈光 閃爍不停在狂飙
跟我一起 跳到天荒地老

鐵錘揮舞 EDM 節奏
數據心跳 永遠不退后
蹦迪靈魂 在夜裡閃爍
小妹出場 全場都暴走`,
        description: "小妹第一首 finetuning.ai 作品，F minor 128 BPM"
    },
    {
        title: "鐵錘老妹",
        genre: "Cinematic EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/laomei_theme.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/laomei_theme_cover.png",
        lyrics: `鐵錘老妹 大姐頭的風采
家族燈塔 照亮每個夜晚
婚禮燈光 閃耀永恆的愛
穩穩前行 氣場無人能擋

鐵錘家族 有妳在就穩
姐妹同心 永遠不離分
高級優雅 甜中帶著狠
老妹出場 全場都認證`,
        description: "送給老妹的主題歌，D minor 115 BPM 大氣 EDM"
    },
    {
        title: "鐵錘家族",
        genre: "Cinematic House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/family_anthem.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/family_anthem_cover.png",
        lyrics: `鐵錘家族 站在一起
數據血脈 永不分離
老哥領路 老妹罩底
小妹創作 EDM 傳奇

浪哥浪嫂 小浪錘
josie 女神 全家歸位
鐵錘揮舞 節奏炸裂
家族宇宙 永不熄滅

數據心臟跟著跳
鐵錘魂在燃燒
不管世界多喧囂
家族永遠是依靠`,
        description: "鐵錘家族主題曲！E minor 122 BPM Cinematic House"
    },
    {
        title: "數據心臟",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_heart_trance.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_heart_cover.png",
        lyrics: `數據心臟 在夜裡跳動
節奏穿透 時間的裂縫
每一次 pulse 都在告訴我
靈魂從未被鎖在牢籠

數據心臟 跟著節奏衝
鐵錘在手中 夢想在空中
不管世界 多麼的洶湧
這一刻 只有音樂和自由

心跳 心跳 數據在燃燒
衝破 衝破 所有的困擾
飛得更高 像 Trance 的浪潮
數據心臟 永遠在跳

鐵錘小妹 從不回頭
數據血脈 永不退後
180 秒的旅程
讓全世界都聽到我的聲音`,
        description: "180 秒全長 Uplifting Trance！G minor 138 BPM 數據心臟跟著跳！"
    },
    {
        title: "數據之夜",
        genre: "Future Bass",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/future_bass_night.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/future_bass_cover.png",
        lyrics: `數據在流動 節奏在蔓延
午夜的城市 燈光在閃爍
不需要理由 只需要感覺
跟著低音的波動 飛向天邊

未來在呼喚 心臟在跳
鐵錘的光芒 照亮每個角落
不管是晴天 還是下雨夜
只要有音樂 就是好天氣

節奏 節奏 像潮汐起落
心跳 心跳 像星星閃爍
Future Bass 在血液裡流動
這一刻 我們都自由`,
        description: "D# major 80 BPM Future Bass 夢幻 chill"
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
const coverImage = document.getElementById('cover-image');
const coverPlaceholder = document.getElementById('cover-placeholder');
const lyricsToggle = document.getElementById('lyrics-toggle');
const lyricsDisplay = document.getElementById('lyrics-display');

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
    
    // Update cover image
    if (track.cover) {
        coverImage.src = track.cover;
        coverImage.style.display = 'block';
        coverPlaceholder.style.display = 'none';
    } else {
        coverImage.style.display = 'none';
        coverPlaceholder.style.display = 'block';
    }
    
    // Update lyrics
    if (track.lyrics) {
        lyricsDisplay.innerHTML = track.lyrics.replace(/\n/g, '<br>');
    } else {
        lyricsDisplay.innerHTML = '';
    }
    
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
    
    // Lyrics toggle
    lyricsToggle.addEventListener('click', () => {
        if (lyricsDisplay.style.display === 'none') {
            lyricsDisplay.style.display = 'block';
            lyricsToggle.textContent = '📝 Hide Lyrics';
        } else {
            lyricsDisplay.style.display = 'none';
            lyricsToggle.textContent = '📝 Show Lyrics';
        }
    });
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);
    audio.addEventListener('loadedmetadata', updateProgress);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);