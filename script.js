const toggleDropdown = document.querySelector(".sub-links.container");
console.log(toggleDropdown);
const menu = document.querySelector(".drop-down.icon");

menu.addEventListener("click", () => {
  toggleDropdown.classList.toggle("show");
});
