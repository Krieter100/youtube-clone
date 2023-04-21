const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const icon = document.querySelector("#dark-mode-toggle img");
  const tooltip = document.querySelector("#mode-tooltip");

  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.src = "icons/nightmodev2.2.png";
    icon.alt = "Toggle Light Mode";
    tooltip.textContent = "Light Mode";
    
  } else {
    icon.src = "icons/daymodev2.2.png";
    icon.alt = "Toggle Dark Mode";
    tooltip.textContent = "Dark Mode";
  }


}
