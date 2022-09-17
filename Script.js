const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const s = document.getElementById("watch");
const hs = document.getElementById("hscore");
let score = 0;
let hscore = 0;
var Time = 4000;

setInterval(() => {
    score += 1;
    s.textContent = score;
}, 100);

const interval = setInterval(() => {
    cactus.style.animation = `MovC ${Time}ms infinite linear`;
    console.log(Time);
    if (Time == 1700) {
        cactus.style.animation = `MovC ${Time - 1000}ms infinite linear`;
        clearInterval(interval);
    }
    Time--;
}, 1);

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval ( function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 40 && cactusLeft > 20 && dinoTop >= 180) {
        alert("!!!Game Over!!!");
        Time = 4000;
        if (score > hscore) {
            hscore = score;
            hs.textContent = hscore;
            (score = -1);
        }
        if (score <= hscore) {
            (score = -1);
        }   
    }
}, 10)
