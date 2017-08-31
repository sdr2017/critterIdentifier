var Nightmare = require("nightmare");
require('nightmare-upload')(Nightmare);
var nightmare = Nightmare({ show: true });
nightmare
  .goto("http://fierce-meadow-35168.herokuapp.com")
  .wait(1000)
  .click("#finger")
  .wait(1000)
  .type("#inputEmail", 'testemail@testit.com')
  .type("#zipCode", 55555)
  .select("#critterColor", "yellow")
  .wait(1000)
  .select("#critterSize", "medium")
  .wait(1000)
  .select("#critterHairy", "true")
  .wait(1000)
  .select("#critterWeb", "true")
  .wait(1000)
  .checkOption("#checkNo", "false")
  .wait(1000)
  .upload("#imageFile", "../views/images/testImage.JPG")
  .wait(2000)
  .click("#submitButton")
  .wait(2000)

  .evaluate(function(){
    return document.title;
  })
  .end()
  .then(function(title){
    console.log(title);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });

// var Nightmare = require("nightmare");
// var nightmare = Nightmare({ show: true });
// nightmare
//   .goto("https://duckduckgo.com")
//   .type("#search_form_input_homepage", "github nightmare")
//   .click("#search_button_homepage")
//   .wait("#links a")
//   .evaluate(function() {
//     return document.querySelector("#links a").href;
//   })
//   .end()
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.error("Search failed:", error);
//   });