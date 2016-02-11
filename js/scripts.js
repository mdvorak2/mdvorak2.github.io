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

$('.close').click(function(){
  $('.alert').css({
    'display':'none'
  });
  $('body').css({
    'margin-bottom':'0'
  });
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

      $('.phone').css({
          'transform' : 'translate(0px, '+ wScroll /45 +'%)',
      });

      $('.mcbkair').css({
          'transform' : 'translate(0px, -'+ wScroll /45 +'%)'
      });

  }

    if(( $('.portfolio').offset().top-wScroll) <= (wHeight/1.55) ) {
      $('.project').each(function(i){
        setTimeout(function(){
          $('.project').eq(i).addClass('animate');
        },250*(i+1));
      });

    }

//about



  function active(){
    var s2ot = $('#section2').offset().top,
        s3ot = $('#section3').offset().top,
        s4ot = $('#section4').offset().top;



        if(wScroll < s2ot-300){
          $('#navbar2 ul li a').removeClass('active');
        }else
        if(wScroll >= s2ot-300 && wScroll < s3ot-300){
          $('#navbar2 ul li a').removeClass('active');
          $('#navbar2 ul li:nth-child(1) a').addClass('active');
        }else
          if(wScroll >= (s3ot-300) && wScroll < s4ot-300){
            $('#navbar2 ul li a').removeClass('active');
          $('#navbar2 ul li:nth-child(2) a').addClass('active');
        }else
          if(wScroll >= s4ot-300){
            $('#navbar2 ul li a').removeClass('active');
          $('#navbar2 ul li:nth-child(3) a').addClass('active');
        }
  }




    stickNavbar();
    floating();
    active();

  });/* scroll fce  */

intro();



}) /* doc.rdy */
