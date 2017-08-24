// Dependencies - NPM Packages used
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

// Express Configuration
var app = express();
var PORT = process.env.PORT || 8080;

// Standard code for bodyParser for interpreting data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./app/public"));

// Router
// require("../models/critters")(app);
// require("../models/index")(app);

// Listener
app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
