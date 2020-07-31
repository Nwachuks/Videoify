const video = document.getElementById('video');
const play = document.getElementById('play');
const stopped = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Update progress and timestamp
function updateProgress() {
    
}

// Set video time to progress
function setVideoProgress() {

}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopped.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
