// Dark mode toggle with saved preference (localStorage)
const toggleBtn = document.getElementById("theme-toggle");

function setButtonText() {
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
  }
  setButtonText();
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setButtonText();
});

loadTheme();
