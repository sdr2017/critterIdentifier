
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
  app.get("/category", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/category.html"));
  });

  // The Upload route loads upload.html
<<<<<<< HEAD
  app.get("/upload", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/upload.html"));
=======
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/upload.html"));
>>>>>>> e35045799bebb772fabb3f6e052d2a5157456ce5
  });

};
