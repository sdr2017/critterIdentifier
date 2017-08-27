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

  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.user.findAll({
      include: [db.spider]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });



  // GET route for getting all of the posts
  app.get("/api/spiders", function(req, res) {
    var query = {};
    if (req.query.userid) {
      query.userid = req.query.userid;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.spider.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbSpider) {
      res.json(dbSpider);
    });
  });


/*
  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
*/

}
