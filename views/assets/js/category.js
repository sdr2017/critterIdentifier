$(document).ready(function() {
	$(document).on('click','.image',function(){
		$("#crittersModal").modal("show");
        console.log("clicked!")
    });

fetch('./api/spiders').then(function(response)
	{
		return response.json();
  	})
  	.then(function(json) 
	{
		var spiders = json;

		var row = getRow();
		for(var index = 0; index < spiders.length; index++)
		{
				var divContainer = $("<div>");
				$(divContainer).addClass('col-sm-12 col-md-3 col-lg-3 photoSpot');

				var divImage = $('<div>');
				$(divImage).addClass('image');
				$(divImage).css('width', '100%');
				$(divImage).css('height', '100%');
				$(divImage).css('background-image', 'url('+ spiders[index].link + ')');
				$(divImage).css('background-position', 'center');
				$(divImage).css('background-repeat', 'no-repeat');
				$(divImage).css('background-size', 'cover');

				var paragraphName = $('<p>');
				$(paragraphName).addClass('links');
				$(paragraphName).html(spiders[index].name);

				$(divImage).append(paragraphName);
				$(divContainer).append(divImage);

				$(row).append(divContainer);

				if(index + 1 == spiders.length || (index + 1 % 4 == 0))
				{
					$('#critters').append(row);
					row = getRow();
				}
		}
	})
  	.catch(function(error)
  	{ 
  		console.log(error); 
  	});

function getRow()
{
	var containerDiv = $('<div>');
	$(containerDiv).addClass('row');
	return containerDiv;
};


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





});
