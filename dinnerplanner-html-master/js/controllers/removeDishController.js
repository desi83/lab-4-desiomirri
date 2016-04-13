var RemoveDishController = function(view, model) {
	
	var removeDish = function(){
		$("#dishID").click(function(){
			console.log("removeDish")
			var id = $(this).attr('id');
			model.removeDishFromMenu(id);
			view.update();
		});
	}
	removeDish();

}