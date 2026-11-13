const btn = document.getElementById("darkMode-btn");
btn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
  if (document.querySelector("html").classList.contains("dark")) {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
});
