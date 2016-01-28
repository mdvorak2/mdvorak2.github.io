$(function(){


  function minimaze(){
    $('#logo-section').css('height','0');
    // $('#logo-section .logo').css('opacity', '0');
    $('#logo-section h1').css('opacity', '0');
    setTimeout(function(){
      $('.navigation').css('opacity', '1');
    },1950)


  }

  setTimeout(minimaze, 2000);


})
