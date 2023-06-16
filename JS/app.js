const menu_btn = document.querySelector(".menu-bt-cont");
const navbar = document.querySelector(".header")

const toggleNavbar = () => {
    navbar.classList.toggle("active");
}

menu_btn.addEventListener("click", () => toggleNavbar());