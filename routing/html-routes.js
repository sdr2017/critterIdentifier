
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

  // The Category route loads cms.html
  app.get("/category.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/category.html"));
  });

  // The Upload route loads upload.html\
  app.get("/upload.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/upload.html"));
  });
};
