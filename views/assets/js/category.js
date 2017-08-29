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

// comment box
      // $(".commentButton").on("click", function(){
      // 	event.preventDefault();

      // 	var newComment = {
      // 		comment: $(".userComment").val();
      // 	};

      // 	$.post(".commentText", newComment)
      // 	.done(function(data){
      // 		console.log(data);
      // 	});

      // 	$(".userComment").val("");
      // });
