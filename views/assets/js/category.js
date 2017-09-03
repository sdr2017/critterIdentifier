$(document).ready(function() {
    populateHTML();

    //MODAL FUNCTIONALITY
    $(document).on('click', '.image', function() {

        $("#crittersModal").modal("show");

        var url = $(this);
        console.log(this);

        var divImage = $('<div>');
        $(divImage).addClass('modalImage')
        $(divImage).css('width', '100%');
        $(divImage).css('height', '100%');
        $(divImage).css('background-image', url[0].style.backgroundImage);
        $(divImage).css('background-position', 'center');
        $(divImage).css('background-repeat', 'no-repeat');
        $(divImage).css('background-size', 'cover');
        $('#photoImage').html(divImage);

		      // $('.actionBox').append('<form id="spiderNaming" ref="spiderNaming" action="/update" method="post" enctype="multipart/form-data" value="'+linkValue[1]+'"><div class="col-lg-12 modalForms"><div class="input-group submitName"><input type="text" name="userIdentify" class="form-control" placeholder="Submit a Name for this Critter"><span class="input-group-btn" class="submitName"><button class="btn btn-secondary" type="submit" id="submitName">Submit</button></span></div></div></form>')

        var linkValue = url[0].style.backgroundImage.split('"');
        $('#critterImage[name="critterImage"]').val(linkValue[1]);
        console.log("value " + $("#critterImage").val());


        var name = url[0].textContent
        var upperName = name.toUpperCase();

        var critterTitle = $('<h5>');
        $(critterTitle).addClass('modal-title');
        $(critterTitle).html('Critter Name: ' + upperName);

        $(".modal-header").html(critterTitle);

        //pulling comment from DB
        var comment

        fetch('./api/spiders').then(function(response) {
            return response.json();
        }).then(function(json) {

            var spiders = json;
            var imageUrl = url[0].style.backgroundImage

            for (var index = 0; index < spiders.length; index++) {
                if ('url("' + spiders[index].link + '")' == imageUrl) {
                    console.log("links match");
                    comment = spiders[index].comment;
                    console.log(comment);
                };
            };

            if (comment == null || comment == "") {
                $(".commentText").html("<div></div>");
            } else {
                $(".commentText").html("<div id='commentStyle'>" + comment + "</div>");
            }
        });
    });
    //END MODAL FUNCTIONALITY

    //SEARCH FUNCTIONALITY BEGINNING
    var critterSize;
    var critterColor;
    var critterName;

    $(document).on('click', '#submitSearch', function() {
        critterSize = $("#critterSize").val();
        critterColor = $("#critterColor").val();
        critterName = $("#nameInput").val().trim();
        console.log("Submit Clicked!")
        console.log(critterSize);
        console.log(critterColor);
        console.log(critterName);

        fetch('./api/spiders').then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var booleanSize = !!critterSize
                var booleanColor = !!critterColor
                var booleanName = !!critterName
                var spiders = json;
                var search = []
                console.log(booleanSize);
                console.log(booleanColor);
                console.log(booleanName);

                //If search by size, color and name are selected
                if (booleanSize == true && booleanColor == true && booleanName == true) {
                    console.log("all selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].size == critterSize && spiders[index].color == critterColor && spiders[index].name == critterName) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        searchResults();
                        $("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterColor + ', ' + critterName + '.</p><p class="viewAll">VIEW ALL</p>')
                    }
                    searchReset();
                };

                //If search by size and color are selected
                if (booleanSize == true && booleanColor == true && booleanName == false) {
                    console.log("size and color selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].size == critterSize && spiders[index].color == critterColor) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterColor + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults();
                    }
                    searchReset();
                };

                //If search by size is selected
                if (booleanSize == true && booleanColor == false && booleanName == false) {
                    console.log("size selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].size == critterSize) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterSize + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults()
                    }
                    searchReset();
                };

                //If search by color is selected
                if (booleanSize == false && booleanColor == true && booleanName == false) {
                    console.log("color selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].color == critterColor) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterColor + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults()
                    }

                    searchReset();
                };

                //If search by color and name are selected
                if (booleanSize == false && booleanColor == true && booleanName == true) {
                    console.log("color and name selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].color == critterColor && spider[index].name == critterName) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterColor + ', ' + critterName + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults()
                    }
                    searchReset();
                };

                //If search by name is selected
                if (booleanSize == false && booleanColor == false && booleanName == true) {
                    console.log("name selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].name == critterName) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterName + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults()
                    }
                    searchReset();
                };

                //If search by name and size are selected
                if (booleanSize == true && booleanColor == false && booleanName == true) {
                    console.log("name and size selected");

                    search = [];

                    for (var index = 0; index < spiders.length; index++) {
                        if (spiders[index].size == critterSize && spider[index].name == critterName) {
                            search.push(spiders[index]);
                        }
                    };

                    console.log(search);

                    if (search.length <= 0) {
                        $("#searchResults").html('<p>Search returned no results. Please Try again.</p><p class="viewAll">VIEW ALL</p>')
                        hideImages();
                    } else {
                        $("#searchResults").html('<p>Displaying results for ' + critterSize + ', ' + critterName + '.</p><p class="viewAll">VIEW ALL</p>')
                        searchResults()
                    }
                    searchReset();
                };

                function hideImages() {
                    $(".photoSpot").hide();
                };

                function searchReset() {
                    $("#nameInput").val('');
                    $("#critterSize").val('');
                    $("#critterColor").val('');
                    $('#submitSearch').removeClass('active');
                };

                //Actually displaying search results
                function searchResults() {
                    var row = getRow();
                    for (var index = 0; index < search.length; index++) {
                        var divContainer = $("<button>");
                        $(divContainer).addClass('col-sm-12 col-md-3 col-lg-3 photoSpot');

                        var divImage = $('<div>');
                        $(divImage).addClass('image');
                        $(divImage).css('width', '100%');
                        $(divImage).css('height', '100%');
                        $(divImage).css('background-image', 'url(' + search[index].link + ')');
                        $(divImage).css('background-position', 'center');
                        $(divImage).css('background-repeat', 'no-repeat');
                        $(divImage).css('background-size', 'cover');

                        var paragraphName = $('<p>');
                        $(paragraphName).addClass('links');

                        if (search[index].identified == true) {
                            $(paragraphName).html(search[index].name);
                        } else {
                            $(paragraphName).html("unidentified");
                        };

                        $(divImage).append(paragraphName);
                        $(divContainer).prepend(divImage);

                        $(row).prepend(divContainer);

                        if (index + 1 == search.length || (index + 1 % 4 == 0)) {
                            $('#critters').html(row);
                            row = getRow();
                        }
                    };
                };

            })
            .catch(function(error) {
                console.log(error);
            });

        function getRow() {
            var containerDiv = $('<div>');
            $(containerDiv).addClass('row');
            return containerDiv;
        };

    });

    $(document).on('click', '.viewAll', function() {
        $("#searchResults").hide();
        populateHTML();
    });
    //SEARCH FUNCTION END

    //POPULATING HTML FROM DATABASE
    function populateHTML() {
        fetch('./api/spiders').then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var spiders = json;

                var row = getRow();
                for (var index = 0; index < spiders.length; index++) {
                    var divContainer = $("<button>");
                    $(divContainer).addClass('col-sm-12 col-md-3 col-lg-3 photoSpot');

                    var divImage = $('<div>');
                    $(divImage).addClass('image');
                    $(divImage).css('width', '100%');
                    $(divImage).css('height', '100%');
                    $(divImage).css('background-image', 'url(' + spiders[index].link + ')');
                    $(divImage).css('background-position', 'center');
                    $(divImage).css('background-repeat', 'no-repeat');
                    $(divImage).css('background-size', 'cover');

                    var paragraphName = $('<p>');
                    $(paragraphName).addClass('links');

                    if (spiders[index].identified == true) {
                        $(paragraphName).html(spiders[index].name);
                    } else {
                        $(paragraphName).html("unidentified");
                    };

                    $(divImage).append(paragraphName);
                    $(divContainer).append(divImage);

                    $(row).prepend(divContainer);

                    if (index + 1 == spiders.length || (index + 1 % 4 == 0)) {
                        $('#critters').prepend(row);
                        row = getRow();
                    }
                }
            })
            .catch(function(error) {
                console.log(error);
            });

        function getRow() {
            var containerDiv = $('<div>');
            $(containerDiv).addClass('row');
            return containerDiv;
        };
    };

    //POPULATING HTML END
    // // comment box
    $(".commentButton").on("click", function() {
        event.preventDefault();

        var userComment = $(".userComment").val().trim();
        $(".commentText").append("<div id='commentStyle'>" + userComment + "</div>");
        $(".userComment").val("");
        console.log(userComment);
    });

    /* Scroll event handler */
    $(window).bind('scroll', function(e) {
        parallaxScroll();
    });

    /* Parallax Scroll */
    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('#parallax-3').css('top', (0 - (scrolled * .25)) + 'px');
        $('#parallax-2').css('top', (0 - (scrolled * .5)) + 'px');
        $('#parallax-1').css('top', (0 - (scrolled * .75)) + 'px');
    }
});
