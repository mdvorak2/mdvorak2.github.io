/*
  Categories list slide-down
*/

$(function(){
  $('.categories-dropdown').click(function(){
    if($('.categories').hasClass('show')){
      $('.categories').removeClass('show');
      $('.content').css('margin-top','0px');


    }else{
        $('.categories').addClass('show');
        $('.content').css('margin-top','150px');
    }
      // $('.categories').addClass('show');

  });

  /*
    scroll functions
  */

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop(),
        categoriesListOffset = $('.categories-list').offset().top;
        sub = wScroll-categoriesListOffset;
        //console.log(sub);


    //
    // if(wScroll > categoriesListOffset - $('.navbar').height()*2){
    //   $('.categories-list').css({
    //     'transform':'translateY('+ sub +'px)'
    //
    //   })
    //
    // }

  console.log($('.categories-list').offset().top);
  console.log('wScroll: '+wScroll);

  // if(wScroll > categoriesListOffset-50 ){
  //   $('.categories-list').css({
  //     'top': wScroll +'px'
  //   })
  // }

  });
});
