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
  var inputSubmitter = emailInput.val().trim();

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

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts

  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
      case "author":
        queryUrl = "/api/authors/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AuthorId || data.id);

        // If this post exists, prefill our cms forms with its data

        titleInput.val(data.title);
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;

        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit

        updating = true;
      }
    });
  }

  // A function to get Authors and then render our list of Authors

  function getAuthors() {
    $.get("/api/authors", renderAuthorList);
  }

  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first

  function renderAuthorList(data) {
    if (!data.length) {
      window.location.href = "/authors";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createAuthorRow(data[i]));
    }
    authorSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    authorSelect.append(rowsToAdd);
    authorSelect.val(authorId);
  }

  // Creates the author options in the dropdown

  function createAuthorRow(author) {
    var listOption = $("<option>");
    listOption.attr("value", author.id);
    listOption.text(author.name);
    return listOption;
  }

  // Update a given post, bring user to the blog page when done
  
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
    .done(function() {
      window.location.href = "/blog";
    });
  }
});