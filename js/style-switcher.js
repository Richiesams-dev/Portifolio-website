/* ================= Toggle Style Switcher ================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

/* ================== Theme Color ================ */
function setActiveStyle(color) {
  console.log("Setting color theme to:", color);

  // Get all alternate style links
  const alternateStyles = document.querySelectorAll(".alternate-style");

  alternateStyles.forEach((styleLink) => {
    const title = styleLink.getAttribute("title");

    if (color === title) {
      // Enable the selected color
      styleLink.removeAttribute("disabled");
      styleLink.disabled = false;
      console.log("✓ Enabled:", title);
    } else {
      // Disable other colors
      styleLink.setAttribute("disabled", "true");
      styleLink.disabled = true;
      console.log("✗ Disabled:", title);
    }
  });

  // Save preference to localStorage
  localStorage.setItem("theme-color", color);
  console.log("💾 Saved to localStorage:", color);
}

/* =============== Theme Light and Dark Mode =============== */
const dayNight = document.querySelector(".day-night");

function toggleDarkMode() {
  const icon = dayNight.querySelector("i");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // Save preference
  localStorage.setItem(
    "theme-mode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

dayNight.addEventListener("click", toggleDarkMode);

// Load saved preferences when page loads
window.addEventListener("DOMContentLoaded", () => {
  console.log("🎨 Loading saved theme preferences...");

  // Load color theme
  const savedColor = localStorage.getItem("theme-color");
  if (savedColor) {
    console.log("📌 Found saved color theme:", savedColor);
    setActiveStyle(savedColor);
  } else {
    console.log("📌 No saved color, using default (color-1)");
  }

  // Load dark mode
  const savedMode = localStorage.getItem("theme-mode");
  if (savedMode === "dark") {
    console.log("🌙 Applying saved dark mode");
    document.body.classList.add("dark");
    const icon = dayNight.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    console.log("☀️ Using light mode");
  }
});
