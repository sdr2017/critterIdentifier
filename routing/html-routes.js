
// This file will send users to different html files

// Dependencies

var path = require("path");

// Routes

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  // The Index route loads index.html

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // The Category route loads Category.html
  app.get("/category", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/category.html"));
  });

  // The Upload route loads upload.html

  app.get("/upload", function(req, res) {

    res.sendFile(path.join(__dirname, "../views/upload.html"));
  });

};
