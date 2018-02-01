
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
