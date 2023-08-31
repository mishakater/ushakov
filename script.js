const mainMenu = document.querySelector(".header-content-wrapper");
const spacer = document.querySelector(".top-section");
const mainMenuLinks = document.querySelectorAll(".main-menu a");
const menuPhone = document.querySelector(".phone-link");
const svgGroup = document.querySelector(".svg-path");
const scrollThreshold = 350; // Adjust this value as needed
const modalClose = document.querySelector(".modal-close");
const modalWindow = document.querySelector(".contact-us-popup-window");
const modalOpenBtn = document.querySelector(".btn-main-contact");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > scrollThreshold) {
    mainMenu.classList.add("visible");
    mainMenu.classList.add("sticky");
    mainMenu.classList.add("menu-changed");
    mainMenuLinks.forEach((el) => {
      el.classList.add("black");
    });
    menuPhone.classList.add("black");
    svgGroup.classList.add("black");
  } else {
    mainMenu.classList.remove("visible");
    mainMenu.classList.remove("sticky");
    mainMenu.classList.remove("menu-changed");
    mainMenuLinks.forEach((el) => {
      el.classList.remove("black");
    });
    menuPhone.classList.remove("black");
    svgGroup.classList.remove("black");
  }
});

// modalOpenBtn.addEventListener("click", (e) => {
//   modalWindow.classList.toggle("hidden");
// });

// modalClose.addEventListener("click", (e) => {
//   modalWindow.classList.toggle("hidden");
// });
