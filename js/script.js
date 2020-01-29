$('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 500);
    $('.navContainer').toggleClass('auto');
    $('body').toggleClass('hidden');
    $(this).toggleClass('open');
    
  })