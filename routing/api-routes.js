// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// ===========================================================
// Requiring our model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/spiders/", function(req, res) {
    db.spider.findAll({})
    .then(function(dbSpiders) {
      res.json(dbSpiders);
    });
  });

}
