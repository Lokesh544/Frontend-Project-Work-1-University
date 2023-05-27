let nav = document.getElementById("nav");
let nav_img = nav.querySelector("img");

window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
  nav_img.classList.toggle("large", window.scrollY == 0);
});

function click_shop_item_1() {
  alert("No");
}
