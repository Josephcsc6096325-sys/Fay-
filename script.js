const heartButton = document.getElementById("heartButton");
const hiddenMessage = document.getElementById("hiddenMessage");
const heartsContainer = document.getElementById("hearts-container");

/* Music Player */

const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const loveSong = document.getElementById("loveSong");
const musicPlayer = document.querySelector(".music-player");

/* Play / Pause Music */

musicButton.addEventListener("click", function () {

    if (loveSong.paused) {

        loveSong.play()
            .then(function () {

                musicPlayer.classList.add("playing");

                musicIcon.textContent = "❚❚";
                musicText.textContent = "Pause music";

            })
            .catch(function () {

                musicText.textContent = "Tap again to play";

            });

    } else {

        loveSong.pause();

        musicPlayer.classList.remove("playing");

        musicIcon.textContent = "▶";
        musicText.textContent = "Play this first...";

    }

});

/* Reset button when song ends */

loveSong.addEventListener("ended", function () {

    musicPlayer.classList.remove("playing");

    musicIcon.textContent = "▶";
    musicText.textContent = "Play again...";

});

/* Show the hidden message */

heartButton.addEventListener("click", function () {

    hiddenMessage.classList.toggle("show");

    if (hiddenMessage.classList.contains("show")) {

        heartButton.innerHTML =
            "<span>♥</span> I meant this...";

    } else {

        heartButton.innerHTML =
            "<span>♥</span> One more thing...";

    }

});

/* Create floating hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    const size =
        Math.random() * 15 + 10;

    heart.style.fontSize =
        size + "px";

    const duration =
        Math.random() * 6 + 7;

    heart.style.animationDuration =
        duration + "s";

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