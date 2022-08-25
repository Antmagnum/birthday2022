const music = new Audio('song.mp3');

function start() {
    music.play();
    music.volume = .5;
    music.loop = true;
    document.getElementById("click").style.display = "none";
    document.getElementById("start").classList.add("animation");
    document.getElementById("band").classList.add("bandAnimation");
}