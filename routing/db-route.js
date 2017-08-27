// db-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies

// Requiring our models

var db = require("../models");

// Routes

module.exports = function(app) {

  // POST route for saving a new spider
  app.post("/upload", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Spider.create({
      identified: req.body.text,
      type: req.body.text,
      dangerous: req.body.text
    }).then(function(dbSpider) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbSpider);
    });
  });
  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
  });
  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function(req, res) {
  });
};