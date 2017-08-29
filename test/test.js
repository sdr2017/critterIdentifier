var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
nightmare
  .goto("http://fierce-meadow-35168.herokuapp.com")
  // .type("#search_form_input_homepage", "github nightmare")
  .click("#categoryButton")
  .click("#links")
  .wait("#links")
  .evaluate(function() {
    return document.querySelector("#links").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });