const toggle = document.getElementById("possToggle");
const stage  = document.querySelector(".stage");

// Start at 0 for everyone who inherits --p
document.documentElement.style.setProperty("--p", "0");

function play(direction /* 'on' | 'off' */) {
  stage.classList.remove("animate-on", "animate-off");
  void stage.offsetWidth; // reset timeline
  stage.classList.add(direction === "on" ? "animate-on" : "animate-off");
}

if (toggle && stage) {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      // ON: 0 → 100, then hold
      play("on");
    } else {
      // OFF: 100 → 0, then hold
      play("off");
    }
  });
}
