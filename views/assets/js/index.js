$(document).ready(function() {
	var dir = "../../../uploads";
	var fileextension = ".jpg";
	$.ajax({
	    //This will retrieve the contents of the folder
	    url: dir,
	    success: function (data) {
	        //List all .jpg file names in the page
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            // var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            $("body").append("<img src='" + dir + filename + "'>");
	        });
	    }
	});
});