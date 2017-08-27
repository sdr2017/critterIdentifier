$(document).ready(function() {
      $(".image").on("click", function(){
        $("#crittersModal").modal("show");
      })
});

// comment box
      $(".commentButton").on("click", function(){
      	event.preventDefault();
      	$(".commentText").text(".userComment").val();
      });
