$(document).ready(function() {
  // Getting references to the email input and zipCode container, as well as the table body
  var emailInput = $("#inputEmail");
  var zipCodeInput = $("#zipCode");
  var critterType = $("#critterType");
  var critterColor = $("#critterColor");
  var critterSize = $("#critterSize");
  var critterHairy = $("#critterHairy");
  var critterWeb = $("#critterWeb");
  var critterName = $("#critterName");
  var emailForm = $(".submitForm");

  db.sequelize.sync({force:true}).then(function(){
  var user = db.user.build({
    email: emailInput
    .val()
    .trim()
  });
  user.save()
  .then(function() {
    user.CreateSpider({
      name: critterName,
      zip: zipCodeInput,
      size: critterSize,
      color: critterColor,
      hairy: critterHairy,
      web: critterWeb,
      link: critterJpg
    })
    .then(function() {
      console.log("We made a user AND spider!");
    })
  });
});
