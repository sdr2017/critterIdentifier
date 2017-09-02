$(document).ready(function() {

//MODAL FUNCTIONALITY
	$(document).on('click','.image',function(){

		var comment = '';

		$("#crittersModal").modal("show");

		var url = $(this);
		console.log(this);

		var divImage = $('<div>');
		$(divImage).addClass('modalImage')
		$(divImage).css('width', '100%');
		$(divImage).css('height', '100%');
		$(divImage).css('background-image', url[0].style.backgroundImage);
		$(divImage).css('background-position', 'center');
		$(divImage).css('background-repeat', 'no-repeat');
		$(divImage).css('background-size', 'cover');
		$('#photoImage').html(divImage);

		
		var linkValue = url[0].style.backgroundImage.split('"');

		$('#spiderNaming').val(linkValue[1]);
		console.log("value " + $("#spiderNaming").val());


		var name = url[0].textContent
		var upperName = name.toUpperCase();

		var critterTitle = $('<h5>');
		$(critterTitle).addClass('modal-title');
		$(critterTitle).html('Critter Name: ' + upperName);

		$(".modal-header").html(critterTitle);

		//pulling comment from DB

		fetch('./api/spiders').then(function(response){
			return response.json();
  		}).then(function(json){

			var spiders = json;
			var imageUrl = url[0].style.backgroundImage

			for(var index = 0; index < spiders.length; index++){
				if('url("'+ spiders[index].link +'")' == imageUrl){
					console.log("links match");
					comment = spiders[index].comment;
					console.log(comment);
				};
			};

			var justTheImage = imageUrl.split("url");
			console.log(justTheImage);
				$("#spiderNaming").val(justTheImage);

			if(comment == null || comment == ""){
				$(".commentText").html("<div></div>");
			}
			else{
				$(".commentText").html("<div id='commentStyle'>" + comment + "</div>");
			}

	    });



    });
//END MODAL FUNCTIONALITY

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

				$(row).prepend(divContainer);

				if(index + 1 == identified.length || (index + 1 % 4 == 0))
				{
					$('#critters').prepend(row);
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

            var userComment = $(".userComment").val().trim();
      	$(".commentText").append("<div id='commentStyle'>" + userComment + "</div>");
            $(".userComment").val("");
            console.log(userComment);
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
