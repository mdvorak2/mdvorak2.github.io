$(function(){


function intro(){
  setTimeout(function(){
        $('.intro h1').addClass('show');
  },500);

  setTimeout(function(){
        $('.intro p').addClass('show');
  },800);

  setTimeout(function(){
        $('.mcbkair').addClass('show');
  },1100);

  setTimeout(function(){
      $('.phone').addClass('show');
  },1350);
}



$('.form .input-group input').focusout(function(){
  var text_val = $(this).val();

  if(text_val === ""){
    $(this).removeClass('has-value');
  }else{
    $(this).addClass('has-value');
  }
});





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

    function floating(){
      $('.intro h1, .intro p').css({
          'transform' : 'translate(0px, '+ wScroll /25 +'%)'
      });

      $('.phone').css({
          'transform' : 'translate(0px, '+ wScroll /85 +'%)'
      });

      $('.mcbkair').css({
          'transform' : 'translate(0px, -'+ wScroll /85 +'%)'
      });

      $('.about-img').css({
          'transform' : 'translate(0px, -'+ wScroll /55 +'%)'
        });
  }

  floating();

    /****************************** PORTFOLIO SLIDE-IN ******************************/
    // if(( $('.portfolio').offset().top-wScroll) <= (wHeight/1.55) ) {
    //   $('.project a').each(function(i){
    //     setTimeout(function() {
    //       $('.project a').eq(i).addClass('show');
    //     }, 250*(i+1));
    //
    //
    //   });
    // } animation: bounceInDown 1s 1
    if(( $('.portfolio').offset().top-wScroll) <= (wHeight/1.55) ) {
      $('.project').each(function(i){
        setTimeout(function(){
          $('.project').eq(i).addClass('animate');
        },250*(i+1));
      });

    }






    stickNavbar();


  });/* scroll fce  */

intro();


}) /* doc.rdy */
