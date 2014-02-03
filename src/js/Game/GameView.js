var GameView = Backbone.View.extend({
	
	model : new Game(),
	
	template : _.template($("#GameTemplate").html()),
	
	el : "#Game",
	
	// All events live in and are managed here.
	eventCollection : {},
	
	initialize : function () {
		
		// Start main timer
		this.timer = new Timer({ interval : 1 })
			.on("intervalElapsed", this.updateGameTimeDisplay.bind(this));
			
		// Load Events
		this.eventCollection = new EventCollection({callback : this.eventsLoaded.bind(this)})
			
		return this;
	},
	
	eventsLoaded : function () {
		// Ready to mess around with and display events!
		
		// Find initial event. The YAML file has initial = true set for it.
		var initialEvent = this.eventCollection.where({
			initial : true
		})[0];
		
		// After a SLIGHT delay, show initial event window.
		var self = this;
		window.setTimeout(function () {
			self.renderEventWindow(initialEvent);
		}, 500);
		
	},
	
	displayEventWindow : function () {
		
	},
	
	// Accepts (expects) event type as paramenter
	renderEventWindow : function (event) {
		
		var ev = new EventView({model : event, el : this.$el.find("#EventWindow")});
		
		
		ev.show();
		
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