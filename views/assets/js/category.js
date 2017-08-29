$(document).ready(function() {
      $(".image").on("click", function(){
        $("#crittersModal").modal("show");
      })
});

// // comment box
      $(".commentButton").on("click", function(){
      	event.preventDefault();
      	alert("button Pressed!")
            var userComment = $(".userComment").val();
      	$(".commentText").text(userComment);
            $(".userComment").val("");
      });

/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
    
/* Parallax Scroll */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-3').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-1').css('top',(0-(scrolled*.75))+'px');
}
