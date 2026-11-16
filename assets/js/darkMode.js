const btn = document.getElementById("darkMode-btn");
const html = document.querySelector("html")

if(localStorage.getItem("theme") === "dark"){
  html.classList.add("dark")
  applyTheme(true)
}

btn.addEventListener("click", () => {
  applyTheme(html.classList.toggle("dark"))
});


function applyTheme(isDark) {
  if(isDark) {
    btn.textContent = "Light mode"
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
    btn.textContent = "Dark mode"
  }
}