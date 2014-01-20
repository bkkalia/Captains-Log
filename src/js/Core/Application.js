var Application = Backbone.Model.extend({
	defaults : {
		name : "Captain's Log"
	}
});


var ApplicationView = Backbone.View.extend({
	el : '#Application',
	model : new Application(),
	eventCollection : {},
	titlescreen : {},
	gamescreen : {},
	
	initialize : function () {
		
		// Remove 300ms click delay on touch devices
		FastClick.attach(document.body);
		
		// Enable CSS state pseudo-classes
		document.addEventListener("touchstart", function() {},false);
		
		var self = this;
		
		// Run after event data is loaded.
		this.eventCollection = new EventCollection({callback : function() {		
			self.render();
		}})
	},

	
	render: function () {
		var self = this;
		
		// Load title screen.
		this.titlescreen = new TitleScreenView({el : $("section#title-screen")});
		// Render and attach extra click event to start button.
		this.titlescreen.render().$el.find("button#start").on("click", function (event) {
			this.gamescreen = new GameScreenView({el : $("section#game-screen")}).render();
		});
	}
	
});