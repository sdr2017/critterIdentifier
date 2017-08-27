
//need to link all HTML files together using sequelize

///////////////HOMEPAGE///////////////
// on load, need to connect to databse and pull from "Spiders" Table
	// need to pull images and info from database and populate the html:
		// If name identification === FALSE
			// Pull image url, add to CSS Background Image property to post to HTML
// image "on click":
	// modal of info pops up:
		// pulls info from databse and populates modal:
		// Name: (unknown if boolean is FALSE)
		// color: 
		// size:
		// web: 
		// desciption (if we get that far)
		// input field for user to type in name of the spider if uknown
			// submit button
				// submit on click: modal saying "thanks for your sage wisdom!"
				// returns them to search page



///////////////UPLOADING//////////////
//on "upload" click, take user to upload.html, which contains a form
// in the upload form, include the following:
	// button to upload photo file
	//user inputs:
			// zipcode//
			// email//
			// color (dropdown, limit to black, brown, white, yellow, red, orange, green,)//
			// size: (dropdown, limit to small, med, lrg)//
			// Harry (yes or no, maybe a dropdown or tick box?)//
			// Web (yes or no, maybe a dropdown or tick box?)
			// Do you know then name of your spider? (yes or no, maybe a dropdown or tick box?)
				// if yes, prompt for name, identification in DB will be TRUE
				// if no, identification in DB will be FALSE
			// on submit:
				// push all info to database
				// modal says: "your critter's been submitted!"
				// takes you back to homepage


///////////////SEARCHING//////////////
// on "view by category" click, take user to category.html
// automatically display images from the "spiders" table, display name with image?
// at top of page, create drop downs for:
	//search by color
	//search by size
	//search by spider species
	//search harry: yes or no (default no)

	//If search by color === TRUE (true if any input is give, FALSE if nothing)
		//search database for spiders.color.userInput
		//populate HMTL with image, name

	//If search by size === TRUE (true if any input is give, FALSE if nothing)
		//search databse for spiders.size.userInput
		//populate HMTL with image, name

	//If search by species === TRUE (true if any input is give, FALSE if nothing)
		//search databse for spiders.name.userInput
		//populate HMTL with image, name

	//If search by harry === TRUE (True if YES, false if NO)
		//search databse for spider.harry.TRUE
		//populate HMTL with image, name

	//If multiple items are checked, search for all properties that are checked
		//populate HTML with image, name

//image "on click"
	// modal of info pops up:
		// pulls info from databse and populates modal:
		// Name: (unknown if boolean is FALSE)
		// color: 
		// size:
		// web: 
		// desciption (if we get that far)
		// "back" button?


