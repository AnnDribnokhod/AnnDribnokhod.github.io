window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__center_links'),
    menuItem = document.querySelectorAll('.navigation__center_links-link'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation__center_links_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('.hamburger_active');
            menu.classList.toggle('navigation__center_links_active');
        })
    })
  });