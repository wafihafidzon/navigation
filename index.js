const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navigation")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll