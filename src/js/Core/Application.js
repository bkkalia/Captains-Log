var Application = Backbone.Model.extend({
	defaults : {
		name : "Captain's Log"
	}
});


var ApplicationView = Backbone.View.extend({
	el : '#Application',
	model : new Application(),
	eventCollection : {},
	title : new TitleScreenView(),
	
	initialize : function () {
		
		// Remove 300ms click delay on touch devices
		FastClick.attach(document.body);
		
		// Enable CSS state pseudo-classes
		document.addEventListener("touchstart", function() {},false);
		
		// Load title screen.
		this.$el.html(this.title.render());
		
		// Run after event data is loaded.
		this.eventCollection = new EventCollection({callback : function() {
			
			
		}})
	}
});