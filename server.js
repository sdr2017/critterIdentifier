// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var fileUpload = require('express-fileupload');
var s3 = require('s3');
var keys = require('./keys.js');
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

require("./routing/html-routes.js")(app);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
debugger;

var client = s3.createClient({
	maxAsyncS3: 20, // this is the default
	s3RetryCount: 3, // this is the default
	s3RetryDelay: 1000, // this is the default
	multipartUploadThreshold: 20971520, // this is the default (20 MB)
	multipartUploadSize: 15728640, // this is the default (15 MB)
	s3Options: {
		accessKeyId: keys.s3accesskey,
		secretAccessKey: keys.s3secretaccesskey,
		// any other options are passed to new AWS.S3()
		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
	},
});

app.use(fileUpload());

app.get('/upload', function(req, res) {
	res.sendFile(path.join(__dirname, '/views', 'upload.html'));
});

app.post('/upload', function(req, res) {
	if (!req.files) {
		console.log(req.files);
		return res.status(400).send('No files were uploaded.');
	}

// Critter Upload using S3 client

	// The name of the input field (i.e. "critterUpload") is used to retrieve the uploaded file
	var critterUpload = req.files.critterUpload;
	var timeInMs = Date.now();
	var critterJpg = timeInMs + req.files.critterUpload.name;
	console.log(critterJpg);

	// Use the mv() method to place the file somewhere on your server
	critterUpload.mv('uploads/' + critterJpg, function(err) {
		if (err) {
			return res.status(500).send(err);
		}

		// Upload to S3
		var params = {
			localFile: 'uploads/' + critterJpg,

			s3Params: {
				Bucket: keys.s3bucket,
				Key: critterJpg, // File path of location on S3
			},
		};
		var uploader = client.uploadFile(params);
		uploader.on('error', function(err) {
			console.error("unable to upload:", err.stack);
			res.status(500).send(err.stack);
		});
		uploader.on('end', function() {
			console.log("done uploading");
			res.send('File uploaded!');
		});
	});
});

// End of S3 Client


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



/*
  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};
*/



require('./routing/html-routes')(app);

db.sequelize.sync({force: true}).then(function(){
	var user = db.user.build({
		email: "foo@bar.com"
	});
	user.save()
	.then(function() {
		user.createSpider({
			identified: false,
			name: "mr. spider",
			dangerous: true,
			zipCode: 80303,
			size: "Large",
			color: "black",
			hairy: true,
			web: true,
			link: "https://s3-us-west-2.amazonaws.com/critterbucket/1503777886077bananaSpidy.jpg"
		})
		.then(function() {
			console.log("We made a thing!");
			app.listen(PORT, function() {
				console.log("Listening on port %s", PORT);
			});
		});
	});
});


