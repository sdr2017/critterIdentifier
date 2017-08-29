$(document).ready(function() {
	$.get("/api/users", function(data) {

  	if (data.length !== 0) {

    for (var i = 0; i < 20; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  };

});
});
