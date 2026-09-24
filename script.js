const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("zaheer-theme");

if (savedTheme === "dark") body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("zaheer-theme", body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
const email = "zaheerahmed20018@gmail.com";

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email address copied.";
  } catch {
    copyStatus.textContent = `Copy manually: ${email}`;
  }
});
