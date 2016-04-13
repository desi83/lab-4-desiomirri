var LasagneController = function(view, model) {

		view.update();
		console.log("hej controller");

	var confirmDish = function() {
		
		$("#confirmButton").click(function(){
			var id = model.getPendingDish().id;
			model.removePendingDish();
			model.addDishToMenu(id);
			sidebarview.update();
			$("#LasagneMainView").hide();
			$("#ScreenAfterMainView").show();
			});
	}

	confirmDish();

	var goBack = function() {
		$("#backButton").click(function(){
			console.log('hej från back')
			var id = model.getPendingDish().id;
			model.removePendingDish();
			$("#LasagneMainView").hide();
			$("#ScreenAfterMainView").show();
		});
	}
	goBack();
};