$(document).ready(function() {
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

	var critterSize;
	var critterColor;
	var critterName;

//SEARCH FUNCTION BEGINNING

    $(document).on('click','#submitSearch',function(){
    	critterSize = $("#critterSize").val();
    	critterColor = $("#critterColor").val();
    	critterName = $("#nameInput").val().trim();
    	console.log("Submit Clicked!")
    	console.log(critterSize);
    	console.log(critterColor);
    	console.log(critterName);


    	fetch('./api/spiders').then(function(response)
	{
		return response.json();
  	})
  	.then(function(json) 
	{
		var spiders = json;
		var search = []

		for (var index = 0; index < spiders.length; index++)
		{
			if(spiders[index].color == critterColor || spiders[index].size == critterSize || spiders[index].name == critterName){
				search.push(spiders[index]);
			}
		};

		var row = getRow();
		for(var index = 0; index < search.length; index++)
		{
				var divContainer = $("<div>");
				$(divContainer).addClass('col-sm-12 col-md-3 col-lg-3 photoSpot');

				var divImage = $('<div>');
				$(divImage).addClass('image');
				$(divImage).css('width', '100%');
				$(divImage).css('height', '100%');
				$(divImage).css('background-image', 'url('+ search[index].link + ')');
				$(divImage).css('background-position', 'center');
				$(divImage).css('background-repeat', 'no-repeat');
				$(divImage).css('background-size', 'cover');

				var paragraphName = $('<p>');
				$(paragraphName).addClass('links');
				$(paragraphName).html(search[index].name);

				$(divImage).append(paragraphName);
				$(divContainer).append(divImage);

				$(row).append(divContainer);

				if(index + 1 == search.length || (index + 1 % 4 == 0))
				{
					$('#critters').html(row);
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

    	});

//SEARCH FUNCTION END


//POPULATING HTML FROM DATABASE
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
            var userComment = $(".userComment").val();
      	$(".commentText").append("<div class='commentText'>" + userComment + "</div>");
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
