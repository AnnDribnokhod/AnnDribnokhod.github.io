window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__right_links'),
    menuItem = document.querySelectorAll('.nav__right_links-link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__right_links-active');
    });});

/*
    $(document).ready(function(){
        $('.situation__items_item_block-plus').click(function(){
            $('.situation__items_item_content').slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $('.situation__items_item_block-plus').removeClass('open');
                } else {
                    $('.situation__items_item_block-plus').addClass('open');
                }							
            });
            return false;
        });
    });

    $(document).ready(function(){
        $('.situation__items_item_block-plus').click(function(){
            $('.situation__items_item_content').slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $(this).removeClass('open');
                } else {
                    $(this).addClass('open');
                }							
            });
            return false;
        });
    });
/*
$(document).ready(function(){
    $('.situation__items_item_block-plus').click(function(){
     $( this ).children(".situation__items_item_content" ).toggle(500);
    });
  });


  $(document).ready(function() {
	$('.situation__items_item_block').on('click', '.situation__items_item_block-plus', function() {
		$(this).toggleClass('.open').siblings('.situation__items_item_content').slideToggle(80);
	});

  });*/