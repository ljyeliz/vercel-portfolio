document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");
});
// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme in local storage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
