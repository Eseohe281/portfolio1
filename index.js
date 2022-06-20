const navbar = document.querySelector('#navbar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-link')

function handleClick(){
    menu.querySelector(".fa-bars").classList.toggle('active')
    menu.querySelector(".fa-xmark").classList.toggle('active')
    navbar.classList.toggle('active')
}

function closeNav(){
    handleClick()
}

menu.addEventListener('click', handleClick)

navLinks.forEach(link=>link.addEventListener('click', closeNav))