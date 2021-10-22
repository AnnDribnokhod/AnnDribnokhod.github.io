window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__center_links'),
    menuItem = document.querySelectorAll('.nav__center_links-link'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__center_links_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('.hamburger_active');
            menu.classList.toggle('nav__center_links_active');
        });
    });
  });


  const swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });