const navHamburgerButtonOpen = document.querySelector(".fa-bars");
console.log(navHamburgerButton);

const navHamburgerMenu = document.querySelector(".hamburger-menu");
console.log(navHamburgerMenu);

navHamburgerButtonOpen.addEventListener("click" , function() {

    navHamburgerMenu.style.display = "block";

})

const navHamburgerButtonClose = document.querySelector(".fa-times");

navHamburgerButtonClose.addEventListener("click" , function() {

    navHamburgerMenu.style.display = "none";

})