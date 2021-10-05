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
})


$(document).ready(function(){
    $('.offers__items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        infinite: false,
        speed: 300,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                infinite: false,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                infinite: false,
                slidesToScroll: 2,
              }
            }
          ]
        });
      });
    