window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__right_links'),
    menuItem = document.querySelectorAll('.nav__right_links-link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__right_links-active');
    });});

/*
  $(".situation__items_item_block-plus").click(function() {
    $(this).closest('.situation__items_item').find('.situation__items_item_content').toggle( );
    $(this).toggleClass('open');return false;
});
*/
$(".situation__left_item_block-plus, .situation__right_item_block-plus").click(function() {
    $(this).closest('.situation__left_item, .situation__right_item').find('.situation__left_item_content, .situation__right_item_content').toggle( );
    $(this).toggleClass('open');return false;
});
