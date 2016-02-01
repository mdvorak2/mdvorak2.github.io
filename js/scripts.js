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


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop(),
        wHeight = $(window).height();

    console.log();

    if(wScroll > $('.projects').offset().top - (wHeight/1.25)){
      $('.projects .project').each(function(i){
        setTimeout(function() {
          $('.projects .project').eq(i).addClass('is-showing');
        }, 250*(i+1));


      });


    }

  });


}) /* doc.rdy */
