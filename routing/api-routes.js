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
//   app.get("/api/spiders/", function(req, res) {
//     db.spider.findAll({})
//     .then(function(dbSpiders) {
//       res.json(dbSpiders);
//     });
//   });
//
}

//   app.get("/api/users", function(req, res) {
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.user.findAll({
//       include: [db.spider]
//     }).then(function(dbSpider) {
//       res.json(dbSpider);
//     });
//   });
//
// }
