$(document).ready(function(){

  var critterZipCode = $("#zipCode");
  var critterColor = $("#critterColor");
  var critterSize = $("#critterSize");
  var critterHairy = $("#critterHairy");
  var critterWeb = $("#critterWeb");
  var critterName = $("#critterName");
  // var critterJpg = $("#imageFile");

  $(document).on("submit", "#spiderForm", handleSpiderFormSubmit);

  function handleSpiderFormSubmit(event) {
    event.preventDefault();
    if(!critterName.val().trim().trim()) {
      return;
    }

    insertSpider({
      name: critterName
      .val()
      .trim(),
      zipCode: critterZipCode
      .val()
      .trim(),
      size: critterSize,
      color: critterColor,
      hairy: critterHairy,
      web: critterWeb
      // link: critterJpg
    });
  };

  function insertSpider(spiderData) {
    $.post("/api/spiders", spiderData)
  };
});
