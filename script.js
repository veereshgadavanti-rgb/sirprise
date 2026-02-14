// floating flowers on load
function startFlowers() {
  setInterval(function () {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 7000);
  }, 300);
}
startFlowers();

// NO button runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES click logic
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("music");
const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const typeText = document.getElementById("typeText");
const photo = document.getElementById("photo");

const fullMessage =
"I knew you would say YES ❤️\n\n" +
"My Paapu, My Kanda, My Darling, My Wife ❤️ You are my happiness, my peace, and my entire life. " +
"With you, every moment feels magical and complete. You are not just my love… you are my forever, my home, and my future. " +
"I promise to love you, protect you, and stand beside you in every situation forever. " +
"I love you more than words can ever express. 🌹";

const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let charIndex = 0;
let photoIndex = 0;

yesBtn.addEventListener("click", () => {
  // start music
  music.play().catch(err => console.log("play error", err));

  // switch screens
  questionBox.classList.add("hidden");
  messageBox.classList.remove("hidden");

  typeText.innerHTML = "";
  charIndex = 0;
  photoIndex = 0;
  photo.src = photos[photoIndex];

  typeMessage();
  cyclePhotos();
});

// typing effect
function typeMessage() {
  if (charIndex < fullMessage.length) {
    typeText.innerHTML += fullMessage.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 40);
  }
}

// change photos one by one
function cyclePhotos() {
  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    photo.src = photos[photoIndex];
  }, 2500);
}
