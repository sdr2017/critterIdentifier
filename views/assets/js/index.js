$(document).ready(function() {

	console.log("ready!");
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


	/* Parallax Scroll */
	function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-3').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-1').css('top',(0-(scrolled*.75))+'px');
}

});
