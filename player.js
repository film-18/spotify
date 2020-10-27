const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['./music/music-i/lany_anything_4_u_official.mp3', './music/music-t/mirrr_nicotine.mp3','./music/music-k/blackpink_selena_gomez_ice_cream_-1366484849609863437.mp3','./music/music-t/perfect_match_mean.mp3','./music/music-i/lany_what_i_wish_just_one_person_would_say_to_me.mp3','./music/music-t/stamp_ost_.mp3','./music/music-k/iu_blueming.mp3','./music/music-i/post_malone_circles.mp3','./music/music-t/คิดถึงแต่.mp3','./music/music-i/attention_charlie_puth.mp3']; // object storing paths for audio objects
thumbnails = ['https://i.scdn.co/image/ab67616d00001e02be813e62b1e1f5b8ea3dcb27', 'https://i.scdn.co/image/ab67616d00001e0287cc1aef411c7e4a4e775a9e', 'https://i.scdn.co/image/ab67616d00001e02dea19d0032ddc086dabbe3c8','https://i.scdn.co/image/ab67616d00001e02a599659cf1d34f824dbc0bd6','https://i.scdn.co/image/ab67616d00001e02be813e62b1e1f5b8ea3dcb27','https://i.scdn.co/image/ab67616d0000b27322b84d45ab6bf0f66417648a','https://i.scdn.co/image/ab67616d00001e02ec2863b64149d3b1f1082006','https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02','https://i.scdn.co/image/ab67616d0000b273684150f9c9327b1a7e8f77e2','https://i.scdn.co/image/ab67616d00001e02897f73256b9128a9d70eaf66']; // object storing paths for album covers and backgrounds
songArtists = ['ํLANY', 'Mirrr', 'BLACKPINK,Selena Gomez','MEAN','LANY','Stamp','IU','Post Malone','BOWKYLION','Charlie Puth']; // object storing track artists
songTitles = ["anything 4 u", "นิโคติน", 'Ice Cream (with Selena Gomez)','เหมาะสม','(what i wish just one person would sat to me)','มันคงเป็นความรัก','Blueming','Circles','คิดถึงแต่','Attention']; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
            thumbnail = document.querySelector('#thumbnail');

        pPause.src = "./pause-circle-solid.png"
        song.play();
        playing = false;
    } else {
        pPause.src = "./play-circle-solid.png"
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function () {
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
    if (songIndex > 10) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 10;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};