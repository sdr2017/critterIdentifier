// $(document).ready(function() {
// 	var dir = "../../../uploads";
// 	var fileextension = ".jpg";
// 	$.ajax({
// 	    //This will retrieve the contents of the folder
// 	    url: dir,
// 	    success: function (data) {
// 	        //List all .jpg file names in the page
// 	        $(data).find("a:contains(" + fileextension + ")").each(function () {
// 	            // var filename = this.href.replace(window.location.host, "").replace("http://", "");
// 	            $("body").append("<img src='" + dir + filename + "'>");
// 	        });
// 	    }
// 	});

// 	/* Parallax Scroll */
// function parallaxScroll(){
// 	var scrolled = $(window).scrollTop();
// 	$('#parallax-3').css('top',(0-(scrolled*.25))+'px');
// 	$('#parallax-2').css('top',(0-(scrolled*.5))+'px');
// 	$('#parallax-1').css('top',(0-(scrolled*.75))+'px');
// }

// });
$(document).ready(function() {
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



	// <div class="col-sm-12 col-md-3 col-lg-3 photoSpot">
	// 	 				<div class="image" id="id1"><p class="links">Category A
	// 	 				</p></div>
	// 	 			</div>
	// 	 			<div class="col-sm-12 col-md-3 col-lg-3 photoSpot">
	// 	 				<div class="image" id="id2"><p class="links">Category B
	// 	 				</p></div>
	// 	 			</div>
	// 	 			<div class="col-sm-12 col-md-3 col-lg-3 photoSpot">
	// 	 				<div class="image" id="id3"><p class="links">Category C
	// 	 				</p></div>
	// 	 			</div>
	// 	 			<div class="col-sm-12 col-md-3 col-lg-3 photoSpot">
	// 	 				<div class="image" id="id4"><p class="links"><p class="links">Category D
	// 	 				</p></div>
	// 	 			</div>
 //  				</div>
});

function getRow()
{
	var containerDiv = $('<div>');
	$(containerDiv).addClass('row');
	return containerDiv;
}
