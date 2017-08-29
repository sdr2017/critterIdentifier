$(document).ready(function() {

  // Getting jQuery references to the form fields for ease of access

  var email = $("#inputEmail");
  var zipCode = $("#zipCode");
  var critterType = $("#critterType");
  var critterColor = $("#critterColor");
  var critterSize = $("#critterSize");
  var critterHairy = $("#critterHairy");
  var critterWeb = $("#critterWeb");
  var critterName = $("#critterName");
  var imageFile = $("#imageFile");
  var uploadSubmitButton = $("#uploadSubmitButton");

  // Adding an event listener for when the form is submitted

  $(uploadSubmitButton).on("click", handleFormSubmit);

  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)

  var url = window.location.search;
  var inputSubmitter = $(email).val().trim();

  // Sets a flag for whether or not we're updating a post to be false initially

  var updating = false;

  // A function for handling what happens when the form to create a new post is submitted

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('User ' + inputSubmitter + ' has pushed information into the databse!');

    // Form will not be submitted if any of the entries are blank

    if (!email.val().trim() || !zipCode.val().trim() || !critterType.val() || !critterColor.val() || !critterSize.val() || !critterHairy.val() || !critterWeb.val() || !critterName.val()) {
      return;
    }

    // Constructing a newSpider object to hand to the database

    var newSpider = {
      userEmail: email
        .val()
        .trim(),
      zipCode: zipCode
        .val()
        .trim(),
      critterType: critterType
        .val()
        .trim(),
      critterColor: critterColor
        .val()
        .trim(),
      critterSize: critterSize
        .val()
        .trim(),
      critterHairy: critterHairy
        .val()
        .trim(),
      critterWeb: critterWeb
        .val()
        .trim(),
      critterName: critterName
        .val()
        .trim(),
      imageFile: imageFile
        .val()
        .trim()
    };

    // Run submit post function

      submitRedirect(newSpider);
  }

  // Submits a new spider and brings user to blog page upon completion

  function submitRedirect(spider) {

      window.location.href = "/";

  }

  /* Parallax Scroll */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-3').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-2').css('top',(0-(scrolled*.5))+'px');
  $('#parallax-1').css('top',(0-(scrolled*.75))+'px');
}

});
