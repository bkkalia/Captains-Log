var Application = Backbone.Model.extend({
	defaults : {
		name : "Captain's Log"
	}
});


var ApplicationView = Backbone.View.extend({
	el : '#Application',
	model : new Application(),
	titlescreen : {},
	gamescreen : {},
	
	initialize : function () {
		
		// Remove 300ms click delay on touch devices
		FastClick.attach(document.body);
		
		// Enable CSS state pseudo-classes
		document.addEventListener("touchstart", function() {},false);
				
		this.render();
	},

	
	render: function () {
		var self = this;
		
		// Load title screen.
		this.titlescreen = new TitleScreenView({el : $("section#title-screen")});
		
		// Render and attach extra click event to start button.
		this.titlescreen.render()
		
		// Find start button,
		.$el.find("button#start")
		
		// and add click handler that loads up the actual game.
		.on("click", function (event) {
			
			this.gamescreen = new GameScreenView({el : $("section#game-screen")});
		});
	}
	
});