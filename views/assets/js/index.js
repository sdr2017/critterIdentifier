$(document).ready(function() {

	//MODAL
	$(document).on('click','.image',function(){
		$("#crittersModal").modal("show");

		var url = $(this);
		console.log("url ", url);

		var divImage = $('<div>');
		$(divImage).addClass('modalImage')
		$(divImage).css('width', '100%');
		$(divImage).css('height', '100%');
		$(divImage).css('background-image', url[0].style.backgroundImage);
		$(divImage).css('background-position', 'center');
		$(divImage).css('background-repeat', 'no-repeat');
		$(divImage).css('background-size', 'cover');
		$('#photoImage').html(divImage);
		console.log("divImage ", $(divImage));
		console.log(url[0].textContent);

		var name = url[0].textContent
		var upperName = name.toUpperCase();

		var critterTitle = $('<h5>');
		$(critterTitle).addClass('modal-title');
		$(critterTitle).html('Critter Name: ' + upperName);

		$(".modal-header").html(critterTitle)

    });

	//POPULATE HTML FROM DATABASE
	fetch('./api/spiders').then(function(response)
	{
		return response.json();
		console.log("connecting with api");
  	})
  	.then(function(json) 
	{
		var spiders = json;
		var identified = []

		for (var index = 0; index < spiders.length; index++)
		{
			if(spiders[index].identified !== true){
				identified.push(spiders[index]);
			} 
		};
		console.log(identified);

		var row = getRow();
		for(var index = 0; index < identified.length; index++)
		{

				var divContainer = $("<div>");
				$(divContainer).addClass('col-sm-12 col-md-3 col-lg-3 photoSpot');

				var divImage = $('<div>');
				$(divImage).addClass('image');
				$(divImage).css('width', '100%');
				$(divImage).css('height', '100%');
				$(divImage).css('background-image', 'url('+ identified[index].link + ')');
				$(divImage).css('background-position', 'center');
				$(divImage).css('background-repeat', 'no-repeat');
				$(divImage).css('background-size', 'cover');

				var paragraphName = $('<p>');
				$(paragraphName).addClass('links');
				$(paragraphName).html("unidentified");

				$(divImage).append(paragraphName);
				$(divContainer).append(divImage);

				$(row).append(divContainer);

				if(index + 1 == identified.length || (index + 1 % 4 == 0))
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
	}


	// // comment box
      $(".commentButton").on("click", function(){
      	event.preventDefault();
            var userComment = $(".userComment").val();
      	$(".commentText").append("<div class='commentText'>" + userComment + "</div>");
            $(".userComment").val("");
      });


	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });

	//PARALLAX SCROLLING
	function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-3').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-1').css('top',(0-(scrolled*.75))+'px');
}

});

