const navHamburgerButtonOpen = document.querySelector(".fa-bars");
console.log(navHamburgerButtonOpen);

const navHamburgerMenu = document.querySelector(".hamburger-menu");
console.log(navHamburgerMenu);

navHamburgerButtonOpen.addEventListener("click" , function() {

    navHamburgerMenu.style.display = "block";

})

const navHamburgerButtonClose = document.querySelector(".fa-times");
console.log(navHamburgerButtonClose);

navHamburgerButtonClose.addEventListener("click" , function() {

    navHamburgerMenu.style.display = "none";

})