var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var spiders = require("./models/spiders");

var PORT = process.env.PORT || 8080;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
debugger;

db.sequelize.sync().then(function(){

	app.listen(PORT, function() {

		console.log("Listening on port %s", PORT);
	});

});
