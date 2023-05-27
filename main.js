const nav = document.getElementById("nav");
const nav_img = nav.querySelector("img");

window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
  nav_img.classList.toggle("large", window.scrollY == 0);
});
