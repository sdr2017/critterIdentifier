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


//SEARCH FUNCTION BEGINNING

	var critterSize;
	var critterColor;
	var critterName;

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
		var booleanSize = !!critterSize
		var booleanColor = !!critterColor
		var booleanName = !!critterName
		var spiders = json;
		var search = []
		console.log(booleanSize);
		console.log(booleanColor);
		console.log(booleanName);

		//If search by size, color and name are selected
		if(booleanSize == true && booleanColor == true && booleanName == true){
			console.log("all selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].size == critterSize && spiders[index].color == critterColor && spiders[index].name == critterName){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				searchResults();
				$("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterColor + ', ' + critterName + '</p>')
			}
			searchReset();
		};


		//If search by size and color are selected
		if(booleanSize == true && booleanColor == true && booleanName == false){
			console.log("size and color selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].size == critterSize && spiders[index].color == critterColor){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterColor + '</p>')
				searchResults();
			}
			searchReset();
		};


		//If search by size is selected
		if(booleanSize == true && booleanColor == false && booleanName == false){
			console.log("size selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].size == critterSize){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterSize + '</p>')
				searchResults()
			}
			searchReset();
		};


		//If search by color is selected
		if(booleanSize == false && booleanColor == true && booleanName == false){
			console.log("color selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].color == critterColor){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterColor + '</p>')
				searchResults()
			}

			searchReset();
		};


		//If search by color and name are selected
		if(booleanSize == false && booleanColor == true && booleanName == true){
			console.log("color and name selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].color == critterColor && spider[index].name == critterName){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterColor + ', ' +critterName + '</p>')
				searchResults()
			}
			searchReset();
		};


		//If search by name is selected
		if(booleanSize == false && booleanColor == false && booleanName == true){
			console.log("name selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].name == critterName){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterName + '</p>')
				searchResults()
			}
			searchReset();
		};


		//If search by name and size are selected
		if(booleanSize == true && booleanColor == false && booleanName == true){
			console.log("name and size selected");

			search = [];

			for (var index = 0; index < spiders.length; index++){
				if(spiders[index].size == critterSize && spider[index].name == critterName){
					search.push(spiders[index]);
				}
			};

			console.log(search);

			if(search.length <= 0){
				$("#searchResults").html('<p>Search returned no results. Please Try again.</p>')
				console.log("working");
			}
			else{
				$("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterName + '</p>')
				searchResults()
			}
			searchReset();
		};




		// for (var index = 0; index < spiders.length; index++)
		// {
		// 	if(spiders[index].color == critterColor && spiders[index].size == critterSize || spiders[index].name == critterName){
		// 		search.push(spiders[index]);
		// 	}
		// };
		// console.log(search);

		//Function Results

		function searchReset(){
			$("#nameInput").val('');
			$("#critterSize").val('');
    		$("#critterColor").val('');
    		$('#submitSearch').removeClass('active');
		};

		function searchResults(){
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

					if(search[index].identified == true){
						$(paragraphName).html(search[index].name);
					}
					else{
						$(paragraphName).html("unidentified");
					};

					$(divImage).append(paragraphName);
					$(divContainer).prepend(divImage);

					$(row).prepend(divContainer);

					if(index + 1 == search.length || (index + 1 % 4 == 0))
					{
						$('#critters').html(row);
						row = getRow();
					}
			};
		};

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

				if(spiders[index].identified == true){
					$(paragraphName).html(spiders[index].name);
				}
				else{
					$(paragraphName).html("unidentified");
				};

				$(divImage).append(paragraphName);
				$(divContainer).append(divImage);

				$(row).prepend(divContainer);

				if(index + 1 == spiders.length || (index + 1 % 4 == 0))
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
};

//POPULATING HTML END

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
    
/* Parallax Scroll */
	function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-3').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-1').css('top',(0-(scrolled*.75))+'px');
}





});
