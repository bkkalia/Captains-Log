var EventView = Backbone.View.extend({

	template : _.template($("#EventViewTemplate").html()),
	
	events : {
		"click li.option" : "handleOptionClick"
	},
	
	handleOptionClick : function (event) {
		// Determine option index from click/tapped <li> index		
		var optionIndex = $(event.currentTarget).index();
		// Add a descriptive class to our chosen <li>.
		event.currentTarget.classList.add("chosen");
		// Store our results to pass along to our showResults method.
		var resultsToShow = this.model.get("options")[optionIndex].results;

		this.showResults(resultsToShow);
		

	},
	
	showResults : function (resultList) {
		console.log(resultList);
		
		// Hide everything else we don't care about in the event view.
		//this.$el.find("h5#description").addClass("collapse");
		
		
		// Let's see if Greensock's library does any better than native CSS
		// transitions.
		TweenMax.to([this.$el.find("h5#description"), this.$el.find("li.option:not(.chosen)")], 0.5, {
				height : 0,
				marginTop: 0,
				marginBottom: 0,
				opacity: 0,
				padding: 0
		});
		/*
		TweenMax.to(this.$el.find("li.option:not(.chosen)"), 1, {
				height : 0,
				marginTop: 0,
				marginBottom: 0,
				opacity: 0,
				padding: 0
		});*/
	},
	
	initialize : function () {
		// Render on init, but don't show self until asked to do so by instantiator.
		this.render();
	},
	
	show : function () {
		var self = this;
		this.el.style.display = "block";
		window.setTimeout(function() {
			self.el.classList.remove("hidden");			
		}, 10)
	},
	
	hide : function () {
		
	},
	
	render : function () {
		this.$el.html(this.template());
	}
})