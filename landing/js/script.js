const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links_container');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});