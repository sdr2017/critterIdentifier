// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var fileUpload = require('express-fileupload');
var s3 = require('s3');
var keys = require('./keys.js');

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);
require('./routing/db-route.js')(app);
// require('./views/assets/js/upload.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

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

