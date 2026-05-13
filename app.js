const moods = {
  happy: {
    emoji: "😊",
    label: "Fröhlich",
    color: "#ffd166",
  },
  tired: {
    emoji: "😴",
    label: "Müde",
    color: "#7ca7d8",
  },
  bored: {
    emoji: "😐",
    label: "Gelangweilt",
    color: "#b5bd68",
  },
  stressed: {
    emoji: "😵‍💫",
    label: "Gestresst",
    color: "#ff6b6b",
  },
  okay: {
    emoji: "🙂",
    label: "Geht so",
    color: "#4ecdc4",
  },
};

const pickerView = document.querySelector(".picker-view");
const displayView = document.querySelector(".display-view");
const displayEmoji = document.querySelector("#display-emoji");
const displayLabel = document.querySelector("#display-label");
const backButton = document.querySelector(".back-button");

function showMood(moodKey) {
  const mood = moods[moodKey];

  if (!mood) {
    return;
  }

  displayEmoji.textContent = mood.emoji;
  displayLabel.textContent = mood.label;
  displayView.style.setProperty("--display-bg", mood.color);
  pickerView.hidden = true;
  displayView.hidden = false;
  backButton.focus({ preventScroll: true });
}

function showPicker() {
  displayView.hidden = true;
  pickerView.hidden = false;
  const activeCard = document.querySelector(".mood-card");
  activeCard?.focus({ preventScroll: true });
}

document.querySelectorAll(".mood-card").forEach((button) => {
  button.addEventListener("click", () => showMood(button.dataset.mood));
});

backButton.addEventListener("click", showPicker);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !displayView.hidden) {
    showPicker();
  }
});
