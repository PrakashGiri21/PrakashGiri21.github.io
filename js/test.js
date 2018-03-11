
$(function(){
  workBelt();
});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px,'+ wScroll/2 +'%)'
    //'transform': 'skew(0deg,40deg)'
  });
  $('.fore-bird').css({
    'transform': 'translate(0px,-'+ wScroll/40+'%)'
  });
  $('.back-bird').css({
    'transform': 'translate(0px,'+ wScroll/4+'%)'
  });
});

$(function(){
  $('.signup-b').click(function(){
    $('.login-box').animate({left:"0%"},400);
    $('.login-box').animate({left:"4%"},400);
    $('.login_form').css("visibility","hidden");
    $('.signup_form').css("visibility","visible");

    $('.signup_form').animate({left:"0%"},400);
    $('.signup_form').animate({left:"4%"},400);
    $('.login_form').animate({left:"4%"},400);
  });
  $('.login-b').click(function(){
    $('.login-box').animate({left:"51%"},400);
    $('.login-box').animate({left:"45%"},400);
    $('.signup_form').css("visibility","hidden");
    $('.login_form').css("visibility","visible");

    $('.login_form').animate({left:"51%"},400);
    $('.login_form').animate({left:"45%"},400);
    $('.signup_form').animate({left:"45%"},400);


  });
});

//workBelt
function workBelt(){
  $('thumbnail').click(function(){
    $('.work-belt').css({'left':'-100%'});
  });
}
