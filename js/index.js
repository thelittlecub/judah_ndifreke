const navBar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector("nav .close");

hamburger.addEventListener("click", () =>{
    navBar.classList.add('nav-open');

    nav.classList.add('open');
})

closeBtn.addEventListener("click", () =>{
    navBar.classList.remove('nav-open');

    nav.classList.remove('open');
})
