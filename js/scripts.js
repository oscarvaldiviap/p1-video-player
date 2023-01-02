/* VARIABLES */

const $video = document.querySelector('#video');
const $play = document.querySelector('.play');
const $pause = document.querySelector('.pause');
const $backward = document.querySelector('.backward');
const $forward = document.querySelector('.forward');
const $progress = document.querySelector('.range');

/* EVENTS */

$play.addEventListener('click', playVideo);
$pause.addEventListener('click', stopVideo);
$backward.addEventListener('click', backwardVideo);
$forward.addEventListener('click', forwardVideo);
$video.addEventListener('loadedmetadata', progressVideo);
$video.addEventListener('timeupdate', progressTimeUpdate);
$progress.addEventListener('input', progressInput);

/* FUNCTIONS */

function playVideo() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function stopVideo() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function backwardVideo() {
    $video.currentTime = $video.currentTime - 10;
}

function forwardVideo() {
    $video.currentTime = $video.currentTime + 10;
}

function progressVideo() {
    $progress.max = $video.duration;
}

function progressTimeUpdate() {
    $progress.value = $video.currentTime;
}

function progressInput() {
    $video.currentTime = $progress.value;
}