const navHamburgerButton = document.querySelector(".fa-bars");
console.log(navHamburgerButton);

const navHamburgerMenu = document.querySelector(".hamburger-menu");
console.log(navHamburgerMenu);

navHamburgerButton.addEventListener("click" , function() {

    navHamburgerMenu.style.display = "block";

})


