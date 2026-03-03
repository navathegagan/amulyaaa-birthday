document.addEventListener("DOMContentLoaded", function () {

const introBtn = document.getElementById("openLetterBtn");
const intro = document.getElementById("introScreen");

introBtn.addEventListener("click", function () {
intro.style.opacity = "0";
setTimeout(() => intro.style.display = "none", 700);
});

const musicBtn = document.getElementById("playMusicBtn");
const music = document.getElementById("bgMusic");

musicBtn.addEventListener("click", function () {
music.play();
});

const text = "Happy Birthday, Amulya";
const typewriter = document.getElementById("typewriter");
let i = 0;

function type() {
if (i < text.length) {
typewriter.innerHTML += text.charAt(i);
i++;
setTimeout(type, 100);
}
}

type();

/* ---------- SURPRISE MESSAGE ON SCROLL ---------- */
const surprise = document.getElementById("surprise");

window.addEventListener("scroll", function () {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
if (surprise) {
surprise.style.opacity = "1";
}
}
});

/* ---------- SCROLL FADE EFFECT ---------- */

const fadeElements = document.querySelectorAll(".fade");

function handleScrollFade() {
fadeElements.forEach(el => {
const rect = el.getBoundingClientRect();
if (rect.top < window.innerHeight - 100) {
el.classList.add("show");
}
});
}

window.addEventListener("scroll", handleScrollFade);
handleScrollFade();

});
