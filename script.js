/* =========================================================
   CONFIGURATION
========================================================= */

// Change this to the actual date/time you became a couple.
// IMPORTANT:
// JavaScript reads this as:
// YYYY-MM-DDTHH:MM:SS
//
// Example:
// "2024-10-24T18:30:00"
//
// We will replace this with your actual date later.
const relationshipStart = new Date("2026-04-02T23:24:00");

// Current password
const correctPassword = "Mah Shroom";

/* =========================================================
   DOM ELEMENTS
========================================================= */

const loginScreen = document.getElementById("login-screen");
const mainSite = document.getElementById("main-site");

const passwordInput = document.getElementById("password-input");
const togglePassword = document.getElementById("toggle-password");
const enterButton = document.getElementById("enter-button");
const loginStatus = document.getElementById("login-status");

const mobileMenu = document.getElementById("mobile-menu");
const menuButton = document.getElementById("menu-button");

const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

const rotatingMessage = document.getElementById("rotating-message");

const yearsElement = document.getElementById("years");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

const relationshipDateElement = document.getElementById("relationship-date");

const reasonNumberElement = document.querySelector(".reason-number");

const reasonTextElement = document.getElementById("reason-text");

const nextReasonButton = document.getElementById("next-reason");

/* =========================================================
   PASSWORD
========================================================= */

function enterSite() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    loginStatus.textContent = "You remembered. I’m impressed. ♡";

    loginStatus.style.color = "#743f49";
    sessionStorage.setItem("unlocked", "true");

    setTimeout(() => {
      revealWebsite();
    }, 700);

    return;
  }

  loginStatus.textContent = "Hmm. That isn't it... try again 💗";

  loginStatus.style.color = "#9f5967";

  passwordInput.classList.add("shake");

  setTimeout(() => {
    passwordInput.classList.remove("shake");
  }, 500);
}

function revealWebsite() {
  loginScreen.style.transition = "opacity 1s ease, transform 1s ease";

  loginScreen.style.opacity = "0";
  loginScreen.style.transform = "scale(1.03)";

  setTimeout(() => {
    startMusic();
    loginScreen.style.display = "none";

    mainSite.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, 1000);
}

enterButton.addEventListener("click", enterSite);

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enterSite();
  }
});

/* =========================================================
   SHOW / HIDE PASSWORD
========================================================= */

togglePassword.addEventListener("click", function () {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  togglePassword.textContent = isPassword ? "🙈" : "👁";
});

/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
  });
});

/* =========================================================
   ROTATING LOVE MESSAGES
========================================================= */

const loveMessages = [
  "You make everything softer. 💗",

  "My favourite notification. ✨",

  "You feel like home. 🫶",

  "I'd choose you every time. 💞",

  "Always gonna be my cutu patutu. 💕",

  "Meenbu Paani official ambassador. 🌸",

  "Funniest person EVERRRR.",

  "You somehow taught me how to stay Pawsitive. 🐾",

  "Shortest tall person I know.",

  "When you arrive, hawa acha ho jata hai. 🌬️",

  "Even the moon and stars come to see you at night. 🌙",

  "I find pieces of you in every love song I listen to. 🎶",

  "My face lights up when I see your name. 💡",

  "I still fall for you every day, just like the first time. 💘",
];

let currentMessage = 0;

function changeLoveMessage() {
  rotatingMessage.style.opacity = "0";

  setTimeout(() => {
    rotatingMessage.textContent = loveMessages[currentMessage];

    rotatingMessage.style.opacity = "1";

    currentMessage = (currentMessage + 1) % loveMessages.length;
  }, 350);
}

setInterval(changeLoveMessage, 3000);

/* =========================================================
   RELATIONSHIP TIMER
========================================================= */

function updateRelationshipTimer() {
  const now = new Date();

  let difference = now.getTime() - relationshipStart.getTime();

  // Prevent weird negative results if the date
  // hasn't been entered correctly.
  if (difference < 0) {
    difference = 0;
  }

  const totalMinutes = Math.floor(difference / (1000 * 60));

  const totalHours = Math.floor(totalMinutes / 60);

  const totalDays = Math.floor(totalHours / 24);

  const years = Math.floor(totalDays / 365.2425);

  const remainingDays = Math.floor(totalDays - years * 365.2425);

  const remainingHours = totalHours % 24;

  const remainingMinutes = totalMinutes % 60;

  yearsElement.textContent = years;

  daysElement.textContent = remainingDays;

  hoursElement.textContent = remainingHours;

  minutesElement.textContent = remainingMinutes;

  relationshipDateElement.textContent = relationshipStart.toLocaleString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  );
}

updateRelationshipTimer();

setInterval(updateRelationshipTimer, 1000);

/* =========================================================
   100 REASONS
========================================================= */

const reasons = [
  "The way you make ordinary days feel less ordinary.",

  "Your smile.",

  "The way you get excited about little things.",

  "Because you somehow make distance feel smaller.",

  "Your ridiculously cute expressions.",

  "The way you make me laugh when I don't expect it.",

  "How easily you become the best part of my day.",

  "Because talking to you never feels like a chore.",

  "Your eyes.",

  "The way you say certain words.",

  "Because you make me want to become a better version of myself.",

  "Your random thoughts.",

  "The way you care.",

  "Because you understand parts of me I struggle to explain.",

  "Your sense of humour.",

  "Because you feel familiar in the nicest possible way.",

  "The little things you remember.",

  "Your patience.",

  "Your voice.",

  "The way your name still makes me smile.",

  "Because you make silence comfortable.",

  "How you make boring conversations fun.",

  "Because you are unapologetically yourself.",

  "Your tiny habits.",

  "The way you react to things.",

  "Because you somehow became part of my routines.",

  "The way you listen.",

  "Because you make me feel understood.",

  "Your kindness.",

  "Because you can make me forget what I was worrying about.",

  "Your random jokes.",

  "The way you can completely change my mood.",

  "Because I can be weird around you.",

  "Your honesty.",

  "Because you make me feel safe.",

  "The way you look when you're happy.",

  "Because even small memories with you matter to me.",

  "Your enthusiasm.",

  "Because you make me look forward to tomorrow.",

  "The way you make everything feel a little warmer.",

  "Your curiosity.",

  "Because you're impossible to replace.",

  "Your little reactions.",

  "Because you make me want to save memories.",

  "The way you make me feel lucky.",

  "Your determination.",

  "Because you are somehow both chaotic and comforting.",

  "The way you remember tiny details.",

  "Because you bring softness into my life.",

  "Your laugh.",

  "Because you make me want to share things with you.",

  "The way you make me feel seen.",

  "Your confidence.",

  "Because you make even ordinary conversations memorable.",

  "Your kindness to people.",

  "Because you're someone I genuinely admire.",

  "The way you make me smile at my phone.",

  "Because I can tell you stupid things.",

  "Your stubborn little moments.",

  "Because you always manage to surprise me.",

  "Your creativity.",

  "Because you make me feel less alone.",

  "The way you care about things deeply.",

  "Because your happiness matters to me.",

  "Your little victories.",

  "Because I love hearing about your day.",

  "The way you get excited.",

  "Because your presence changes the atmosphere.",

  "Your imperfections.",

  "Because you never have to pretend around me.",

  "Your resilience.",

  "Because you've become part of my future in my head.",

  "The way you make me want to plan things.",

  "Because you have your own weird little universe.",

  "Your opinions.",

  "Because I love discovering new things about you.",

  "The way you make me feel hopeful.",

  "Because I trust you.",

  "Your thoughtful side.",

  "Because you can make me laugh with almost nothing.",

  "The way you make memories without trying.",

  "Because I genuinely miss you.",

  "Your little messages.",

  "Because seeing your name can instantly improve my mood.",

  "The way you make me feel appreciated.",

  "Because I love celebrating you.",

  "Your dreams.",

  "Because I want to see you achieve them.",

  "The way you make me care about little details.",

  "Because you matter to me more than I expected.",

  "Your courage.",

  "Because I love learning your moods.",

  "The way you make distance feel temporary.",

  "Because I love being your person.",

  "Your warmth.",

  "Because somehow you became my favourite human.",

  "Because there are still a hundred more reasons I haven't written yet.",

  "Because after all of this, I still choose you.",

  "Because you're you.",
];

let currentReason = 0;

function showReason(index) {
  if (index < 0 || index >= reasons.length) {
    return;
  }

  reasonTextElement.style.opacity = "0";
  reasonNumberElement.style.opacity = "0";

  setTimeout(() => {
    reasonTextElement.textContent = reasons[index];

    reasonNumberElement.textContent = String(index + 1).padStart(3, "0");

    reasonTextElement.style.opacity = "1";
    reasonNumberElement.style.opacity = "1";
  }, 200);
}

/* =========================================================
   DICE ROLL
========================================================= */

const dice = document.querySelector(".dice");

// how far to turn the cube so each face points at you: [x, y]
const faceAngles = {
  1: [0, 0],
  2: [-90, 0],
  3: [0, -90],
  4: [0, 90],
  5: [90, 0],
  6: [0, 180],
};

let diceX = 0;
let diceY = 0;
let isRolling = false;
let reasonBag = [];

function diceTransform(x, y, lift) {
  return `translateY(${lift}px) rotateX(-22deg) rotateY(-28deg) rotateX(${x}deg) rotateY(${y}deg)`;
}

// random reason, no repeats until all of them have been shown
function pickRandomReason() {
  if (reasonBag.length === 0) {
    reasonBag = reasons.map((_, index) => index);

    for (let i = reasonBag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [reasonBag[i], reasonBag[j]] = [reasonBag[j], reasonBag[i]];
    }
  }

  return reasonBag.pop();
}

nextReasonButton.addEventListener("click", function () {
  if (isRolling) {
    return;
  }

  isRolling = true;

  // fade the old reason out while the dice rolls
  reasonTextElement.style.opacity = "0";
  reasonNumberElement.style.opacity = "0";

  const face = Math.floor(Math.random() * 6) + 1;
  const [faceX, faceY] = faceAngles[face];

  const fromX = diceX;
  const fromY = diceY;

  diceX =
    Math.ceil(fromX / 360) * 360 +
    360 * (2 + Math.floor(Math.random() * 2)) +
    faceX;
  diceY =
    Math.ceil(fromY / 360) * 360 +
    360 * (2 + Math.floor(Math.random() * 2)) +
    faceY;

  const roll = dice.animate(
    [
      { transform: diceTransform(fromX, fromY, 0) },
      {
        transform: diceTransform(
          fromX + (diceX - fromX) * 0.5,
          fromY + (diceY - fromY) * 0.5,
          -34,
        ),
        offset: 0.4,
      },
      { transform: diceTransform(diceX, diceY, 0) },
    ],
    { duration: 1100, easing: "cubic-bezier(0.25, 0.8, 0.35, 1)" },
  );

  dice.style.transform = diceTransform(diceX, diceY, 0);

  roll.onfinish = function () {
    showReason(pickRandomReason());
    isRolling = false;
  };
});

/* =========================================================
   MUSIC
========================================================= */

let musicPlaying = true;

function startMusic() {
  if (!music) {
    return;
  }

  music.volume = 0;

  music
    .play()
    .then(() => {
      musicPlaying = true;

      if (musicToggle) {
        musicToggle.textContent = "❚❚";
      }
      //fade in
      let volume = 0;

      const fadeInInterval = setInterval(() => {
        volume += 0.01;
        if (volume >= 0.1) {
          volume = 0.1;
          clearInterval(fadeInInterval);

          music.volume = volume;
        }
        music.volume = volume;
      }, 400);
      console.log("🎵 Music started");
    })
    .catch((error) => {
      console.log("Autoplay blocked. Waiting for user interaction.", error);
    });
}
document.addEventListener(
  "click",
  function () {
    if (music && !musicPlaying && music.src) {
      music
        .play()
        .then(() => {
          musicPlaying = true;

          if (musicToggle) {
            musicToggle.textContent = "❚❚";
          }
        })
        .catch((error) => {
          console.log("Music could not start:", error);
        });
    }
  },
  { once: true },
);

musicToggle.addEventListener("click", function () {
  if (!music.src) {
    return;
  }

  if (musicPlaying) {
    music.pause();

    musicPlaying = false;

    musicToggle.textContent = "♫";
  } else {
    music.play();

    musicPlaying = true;

    musicToggle.textContent = "❚❚";
  }
});

/* =========================================================
   SCROLL REVEALS
========================================================= */

const revealElements = document.querySelectorAll(
  ".section-heading, .timer-card, .polaroid, .reasons-box, .ordinary-card, .memory-card, .poetry-paper, .letter-paper, .video-placeholder",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.style.opacity = "0";

  element.style.transform = "translateY(30px)";

  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  revealObserver.observe(element);
});

/* =========================================================
   POLAROID RANDOM FLOAT
========================================================= */

const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach((polaroid, index) => {
  let direction = index % 2 === 0 ? 1 : -1;

  setInterval(
    () => {
      if (window.innerWidth > 900) {
        polaroid.animate(
          [
            {
              translate: "0 0",
            },

            {
              translate: `0 ${direction * 5}px`,
            },

            {
              translate: "0 0",
            },
          ],

          {
            duration: 4500 + index * 400,
            easing: "ease-in-out",
          },
        );
      }
    },
    4500 + index * 500,
  );
});

/* =========================================================
   NAV ACTIVE SCROLL
========================================================= */

const sections = document.querySelectorAll(".section");

const navLinks = document.querySelectorAll(".desktop-nav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.45,
  },
);

sections.forEach((section) => {
  navObserver.observe(section);
});

/* =========================================================
   KONAMI-STYLE LITTLE SECRET
========================================================= */

let secretClicks = 0;

document.addEventListener("click", (event) => {
  if (event.target.closest(".primary-button")) {
    return;
  }

  secretClicks++;

  if (secretClicks === 15) {
    createFloatingMessage("You found absolutely nothing. ♡");

    secretClicks = 0;
  }
});

function createFloatingMessage(text) {
  const message = document.createElement("div");

  message.textContent = text;

  message.style.position = "fixed";
  message.style.left = "50%";
  message.style.top = "50%";
  message.style.transform = "translate(-50%, -50%)";

  message.style.zIndex = "9999";

  message.style.padding = "15px 22px";

  message.style.background = "#fffaf6";

  message.style.boxShadow = "0 20px 50px rgba(0,0,0,0.15)";

  message.style.fontFamily = '"Playwrite AU SA", cursive';

  message.style.fontSize = "0.75rem";

  document.body.appendChild(message);

  setTimeout(() => {
    message.style.transition = "opacity 0.7s ease";

    message.style.opacity = "0";

    setTimeout(() => {
      message.remove();
    }, 700);
  }, 1600);
}
/* =========================================================
   CARRY MUSIC TO OTHER PAGES
========================================================= */

function saveMusicState() {
  if (!music) {
    return;
  }

  sessionStorage.setItem("musicTime", String(music.currentTime));
  sessionStorage.setItem("musicPlaying", String(musicPlaying));
}

window.addEventListener("pagehide", saveMusicState);
setInterval(saveMusicState, 2000);

/* Skip the password if she already unlocked it in this tab */

if (sessionStorage.getItem("unlocked") === "true") {
  loginScreen.style.display = "none";
  mainSite.classList.remove("hidden");

  music.currentTime = parseFloat(sessionStorage.getItem("musicTime")) || 0;

  if (sessionStorage.getItem("musicPlaying") !== "false") {
    startMusic();
  } else {
    musicPlaying = false;
    musicToggle.textContent = "♫";
  }
}
