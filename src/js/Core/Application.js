var Application = Backbone.Model.extend({
	defaults : {
		name : "Captain's Log"
	}
});


var ApplicationView = Backbone.View.extend({
	el : '#Application',
	model : new Application(),
	eventCollection : {},
	title : {},
	
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
		this.title = new TitleScreenView({el : $("section#title-screen")});
		// Load title screen.
		this.title.render();
		this.delegateEvents();
	}
	
});