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
		
		// Load title screen.
		this.$el.html(this.title.render());
		
		// Run after event data is loaded.
		this.eventCollection = new EventCollection({callback : function() {
			
			
		}})
	}
});