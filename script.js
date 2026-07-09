// ===== TYPEWRITER EFFECT =====
const message =
"Every heartbeat reminds me of you, Cutie ❤️ Thank you for being you. I hope this little surprise brings a smile to your face.";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = function () {
    typeWriter();
    createHearts();
};

// ===== OPEN LETTER =====
function openLetter() {
    document.getElementById("letter").style.display = "block";
    document.querySelector(".hero").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ===== SHOW GALLERY =====
function showGallery() {
    document.getElementById("gallery").style.display = "block";
    document.getElementById("reasons").style.display = "block";

    window.scrollTo({
        top: document.getElementById("gallery").offsetTop,
        behavior: "smooth"
    });
}

// ===== IMAGE SLIDESHOW =====
const images = [
    "images/cutie1.jpg",
    "images/cutie2.jpg"
];

let current = 0;

function nextImage() {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    document.getElementById("slide").src = images[current];
}

// ===== FINAL PAGE =====
function ending() {

    document.getElementById("final").style.display = "block";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    alert("❤️ I hope this made you smile, Cutie ❤️");
}

// ===== FLOATING HEARTS =====
function createHearts() {

    const container = document.getElementById("hearts");

    setInterval(function () {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 10000);

    }, 300);

}