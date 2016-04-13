$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and view

	var homeView = new HomeView($("#HomeView"), model);
	var homeController = new HomeController(homeView, model);


	var exampleView = new ExampleView($("#ExampleView"), model);
	var lasagneMainView = new LasagneMainView($("#LasagneMainView"), model);
	var screenAfterMainView = new ScreenAfterMainView($("#ScreenAfterMainView"), model);
	var screenAfterController = new ScreenAfterController(screenAfterMainView, exampleView, model);

	var viewSix = new ViewSix($("#ViewSix"), model);
	var sixController = new SixController(viewSix, model);

	var sidebarController = new SidebarController(exampleView, viewSix, model);
//	var removeDishController = new RemoveDishController(exampleView, model);

	var loadingView = new LoadingView($("#LoadingView"), model);
	var viewSeven = new ViewSeven($("#ViewSeven"), model);

//	var lasagneController = new LasagneController(lasagneMainView, model);

	// masterController();

});

/*var masterController = function(model) {
	console.log("go")
	$("#HomeView").show()
	$("#ExampleView").hide()
	$("#ScreenAfterMainView").hide()
	$("#LasagneMainView").hide()
	$("#ViewSix").hide()
	$("#ViewSeven").hide()
	

	};*/