var ScreenAfterMainView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var allDishImage = [];
//	var imagesStr = "";
	var getDishes = function (category, filter) {
		//console.log($("#dishImage"));
		var dishResults = null;
		model.getAllDishes(category, filter, function(dishes) {
			console.log(dishes)
			if (dishes.ResultCount === 0) {
				dishResults = false;
				this.errorMessage = container.find("#errorMessage");
				this.errorMessage.html("We could not find what you were searching for. Please try again.");
			}
			else {
				dishResults = true;
				for (var i = 0; i < dishes.Results.length; i++) {
					var dish = dishes.Results[i];
					var imageDiv = document.createElement('div');
					imageDiv.className = "dish-container"; //lägger till classname
					imageDiv.id = String(dish.RecipeID);
					imageDiv.innerHTML ='<div class="image col-md-2" id="blaj">'
					 + '<center><img src="'+String(dish.ImageURL)+'"  alt="'+String(dish.Title)+'" style="width: 136px; height: 140px;"></img>'
					 + '<button class="dish" style=" border: 1px solid black; width: 136px;">'+String(dish.Title)+'</button>'	 
					 + '<p class="text-justify description">'+String(dish.Subcategory)+'</p></div></center>';

					 allDishImage.push(imageDiv);
				}		
			}
		this.dishContainer = container.find("#dishImage");		
		this.dishContainer.empty();
		if (dishResults === false){
			console.log("hej")
		}
		else {
			console.log(allDishImage.length)
			for (var j = 0; j < allDishImage.length; j++) {
				console.log("här är den iaf")
					//console.log("alldishes[j]",allDishes[j]);
				this.dishContainer.append(allDishImage[j]);
			}
		}
	});
}
 //ska skicka vidare det inmatade värdet från serach(fixas i controllern)
	//getDishes("main dish", "meat balls");

	this.updateSearch = function(category, filter) {
		allDishImage = [];
		getDishes(category, filter);

	};

this.update = function(obj) {
	};

	model.addObserver(this);
}

