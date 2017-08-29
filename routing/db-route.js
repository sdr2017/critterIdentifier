db.sequelize.sync({force: true}).then(function(){
	var user = db.user.build({
		email: "foo@bar.com"
	});
	user.save()
	.then(function() {
		user.createSpider({
			identified: false,
			name: "mr. spider",
			dangerous: true,
			zipCode: 80303,
			size: "Large",
			color: "black",
			hairy: true,
			web: true,
			comment: "Test Comment"
		})
		.then(function() {
			console.log("We made a thing!");
			app.listen(PORT, function() {
				console.log("Listening on port %s", PORT);
			});
		});
	});
});