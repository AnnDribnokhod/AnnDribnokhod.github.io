function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

  $(document).ready(function(){
    $('.slider-first__responsive_items').slick({
      rows: 2,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            rows: 2,
            speed: 300,
            slidesToShow: 2
            ,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 990,
          settings: {
            rows: 2,
            speed: 300,
            slidesToShow: 1,

          }
        },
        {
          breakpoint: 380,
          settings: {
            rows: 1,
            speed: 300, 
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



$(document).ready(function(){
  $('.combo__slider').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '60%',
    prevArrow: false,
    nextArrow: '<button type="button" class="slick-next_combo"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
