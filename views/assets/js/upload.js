$(document).ready(function() {

  /* Parallax Scroll */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-3').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-2').css('top',(0-(scrolled*.5))+'px');
  $('#parallax-1').css('top',(0-(scrolled*.75))+'px');
};

});
