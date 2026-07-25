const heartButton = document.getElementById("heartButton");
const hiddenMessage = document.getElementById("hiddenMessage");
const heartsContainer = document.getElementById("hearts-container");

/* Show the hidden message */

heartButton.addEventListener("click", function () {

    hiddenMessage.classList.toggle("show");

    if (hiddenMessage.classList.contains("show")) {
        heartButton.innerHTML = "<span>♥</span> I meant this...";
    } else {
        heartButton.innerHTML = "<span>♥</span> One more thing...";
    }

});

/* Create floating hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 15 + 10;

    heart.style.fontSize = size + "px";

    const duration = Math.random() * 6 + 7;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}

/* Generate hearts occasionally */

setInterval(createHeart, 1200);

/* Create a few hearts when the page opens */

for (let i = 0; i < 5; i++) {

    setTimeout(function () {
        createHeart();
    }, i * 700);

}