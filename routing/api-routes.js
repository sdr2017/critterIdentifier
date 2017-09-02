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
    db.User.findAll({
      include: [db.Spider]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Spider]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {

    db.User.create(req.body).then(function(dbUser) {
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
    db.Spider.findAll({
      where: query,
      order: [['id', 'ASC']],
      include: [db.User]
    }).then(function(dbSpider) {
      res.json(dbSpider);
    });
  });

  app.get("/api/spiders/:id", function(req, res) {
    db.Spider.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbSpider) {
      res.json(dbSpider);
    });
  });

  app.get("/api/spiders/:name", function(req, res) {
    db.Spider.update({
      where: {
        name: req.params.name,
        identified: req.params.identified
      },
      include: [db.User]
    }).then(function(dbSpider) {
      res.json(dbSpider);
      console.log("This is the req for spider names" + req.params);
    });
  });

  app.put("/:name", function (req, res, next) {
    var spiderName = find(req.body.name);
    spiderName.id = req.body.id; 
  })

  app.post("api/spiders", function(req, res) {
    db.Spider.create(req.body).then(function(dbSpider) {
      res.json(dbSpider);
  });
});

};
