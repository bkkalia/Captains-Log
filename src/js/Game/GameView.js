var GameView = Backbone.View.extend({
	
	model : new Game(),
	
	template : _.template($("#GameTemplate").html()),
	
	el : "#Game",
	
	initialize : function () {
		
		// Start main timer
		this.timer = new Timer({ interval : 1 })
			.on("intervalElapsed", this.updateGameTimeDisplay.bind(this));
			
		return this;
	},
	
	updateGameTimeDisplay : function () {		
		this.$el.find("time").html(this.timer.toHHMMSS());
	},
	
	renderResources : function () {
		// Clear any existing resources
		$("ul#resources").html('');
		_.each(this.model.resources, function (resource, key) {
			$("ul#resources").append(resource.render().el);
		})
	},
	
	
	
	render : function () {
		this.$el.attr("fart", "butt");
		
		// Load template
		this.$el.html(this.template());
		this.renderResources();
		
	}
	
});