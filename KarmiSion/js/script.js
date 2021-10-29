window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__right_links'),
    menuItem = document.querySelectorAll('.nav__right_links-link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('.nav__right_links_active');
    });})
