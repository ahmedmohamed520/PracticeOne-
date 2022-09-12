const closeIcon = document.querySelector(".nav-icon");
const sideMenu = document.querySelector(".nav-list");
const openBtn = document.querySelector(".nav-btn");

closeIcon.addEventListener("click", () => {
    sideMenu.classList.remove("show");
});

openBtn.addEventListener("click", () => {
    sideMenu.classList.add("show");
});
