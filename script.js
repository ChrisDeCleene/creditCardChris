//Open & Close Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}





























// Dark Theme Button
function changeTheme () {
    document.body.style.backgroundColor = 'black';
    document.querySelector('main').className = 'easterEgg';
    document.querySelector('header').className = 'easterEgg';
    document.querySelector('h1').className = 'easterEgg';
    let h2 = document.querySelectorAll('h2')
    for (let i = 0; i < h2.length; i++) {
        h2[i].className = 'easterEgg';
    }
    let button = document.querySelectorAll('button')
    for (let i = 0; i < button.length; i++) {
        button[i].className = 'easterEgg';
    }
    let contactMe = document.getElementById('contactme')
    contactMe.className = 'easterEgg';
    document.querySelector('footer').className = 'easterEgg';
}

document.getElementById('easterEgg').onclick = changeTheme;