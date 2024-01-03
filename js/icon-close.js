const menuToggle = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".icon-close");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  const isOpen = menu.classList.contains("open");
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : "0";
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("open");
  menu.style.height = "0";
});
