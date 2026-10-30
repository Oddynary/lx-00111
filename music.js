/* Shared music for lyrics.html and catpairs.html */

(function () {
  const music = document.getElementById("background-music");
  const toggle = document.getElementById("music-toggle");

  if (!music) {
    return;
  }

  music.volume = 0.1; // keep same as script.js

  const savedTime = parseFloat(sessionStorage.getItem("musicTime")) || 0;
  let wantPlaying = sessionStorage.getItem("musicPlaying") !== "false";

  function setIcon(playing) {
    if (toggle) {
      toggle.textContent = playing ? "❚❚" : "♫";
    }
  }

  // Jump to where the song was on the previous page
  function restoreTime() {
    if (savedTime && savedTime < music.duration) {
      music.currentTime = savedTime;
    }
  }

  if (music.readyState >= 1) {
    restoreTime();
  } else {
    music.addEventListener("loadedmetadata", restoreTime, { once: true });
  }

  // Try to play. If the browser blocks it, start on her first tap/click.
  if (wantPlaying) {
    music
      .play()
      .then(() => setIcon(true))
      .catch(() => {
        setIcon(false);

        const resume = () => {
          music
            .play()
            .then(() => setIcon(true))
            .catch(() => {});
        };

        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
        document.addEventListener("keydown", resume, { once: true });
      });
  } else {
    setIcon(false);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        wantPlaying = true;
        setIcon(true);
      } else {
        music.pause();
        wantPlaying = false;
        setIcon(false);
      }
    });
  }

  // Save position for the next page
  function save() {
    if (music.readyState >= 1) {
      sessionStorage.setItem("musicTime", String(music.currentTime));
    }

    sessionStorage.setItem("musicPlaying", String(wantPlaying));
  }

  window.addEventListener("pagehide", save);
  setInterval(save, 2000);
  // Silence the song while the YouTube documentary plays
  const ytFrame = document.getElementById("documentary-video");

  if (ytFrame && ytFrame.tagName === "IFRAME") {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function () {
      new YT.Player("documentary-video", {
        events: {
          onStateChange: function (event) {
            // 1 = playing, 3 = buffering, 2 = paused, 0 = ended
            if (event.data === 1 || event.data === 3) {
              music.muted = true;
            }

            if (event.data === 2 || event.data === 0) {
              music.muted = false;
            }
          },
        },
      });
    };
  }
})();
