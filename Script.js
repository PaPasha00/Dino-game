const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const s = document.getElementById("watch");
let score = 0;

setInterval(() => {
    score += 1;
    s.textContent = score;
}, 200);

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

    if (cactusLeft < 60 && cactusLeft > 20 && dinoTop >= 170) {
        alert("!!!Game Over!!!")
        score = -1
    }
}, 10)

