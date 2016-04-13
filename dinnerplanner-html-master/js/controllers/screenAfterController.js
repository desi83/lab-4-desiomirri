var ScreenAfterController = function(view, sidebarview, model) {

	$("#buttonSearch").click(function(){
		view.updateSearch($("#typeSearch").val(), $("#searchWord").val());
		selectDish();
		$("#searchWord").val('');
		return false;
	});

	$("#typeSearch").change(function() {
		view.updateSearch($(this).val(), $("#searchWord").val());
		selectDish();
	});

	var selectDish = function() {
		
		$(".image").click(function(){
			var id = $(this).attr('id');
			model.addPendingDish(id);
			$("#ScreenAfterMainView").hide();
			$("#ViewSix").hide();
			$("#LasagneMainView").show();
			sidebarview.updatePending();
		})

	}

	selectDish();

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
			var id = model.getPendingDish().id;
			model.removePendingDish();
			$("#LasagneMainView").hide();
			$("#ScreenAfterMainView").show();
		});
	}
	goBack();
	

};
