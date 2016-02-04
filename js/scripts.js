$(function(){


function intro(){
  setTimeout(function(){
        $('.intro h1').addClass('show');
  },500);

  setTimeout(function(){
        $('.intro p').addClass('show');
  },1000);

  setTimeout(function(){
        $('.mcbkair').addClass('show');
  },1500);

  setTimeout(function(){
      $('.phone').addClass('show');
  },1900);
}









$(window).scroll(function(){

  var wScroll = $(this).scrollTop(),
      wHeight = $(window).height(),
      navbar = $('#navbar').offset().top;


    function stickNavbar(){
      if(wScroll > navbar){
        $('#navbar2').removeClass('hidden');
        $('#navbar').addClass('hidden');
    // }else{$('#navbar2').addClass('hidden');('#navbar').removeClass('hidden');
    }
    }


/***************************************************
.show = opacity: 1; transform:translate(0);
 ************************************************ */

    function show(element){
      if(( element.offset().top-wScroll) <= (wHeight/1.5) ) {
        element.addClass('show');
      }
    }


    show( $('.about-img') );
    show($('.about p'));
    show($('.about h2'));


    /****************************** PORTFOLIO SLIDE-IN ******************************/
    if(( $('.portfolio').offset().top-wScroll) <= (wHeight/1.55) ) {
      $('.project a').each(function(i){
        setTimeout(function() {
          $('.project a').eq(i).addClass('show');
        }, 250*(i+1));


      });
    }







    stickNavbar();


  });/* scroll fce  */

intro();


}) /* doc.rdy */
