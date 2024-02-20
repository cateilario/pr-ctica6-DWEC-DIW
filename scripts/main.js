import { drawStars } from "./generateStars.js";
import { createGallery } from "./generateGallery.js";
import { myForm, validateForm } from "./validateForm.js";
import { switchDarkMode } from "./darkMode.js";

const nav = document.getElementById("nav");
const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navLinks = document.querySelectorAll(".nav-list a");

const toggleMenu = () => {
  nav.classList.toggle("visible");
};

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) nav.classList.remove("visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", function () {
  drawStars();
  createGallery();
  switchDarkMode();
});

myForm.addEventListener("submit", validateForm);
