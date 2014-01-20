var ScreenView = Backbone.View.extend({
		
	close : function (event) {
		var self = this;
		// Add class, when animation is done, remove element from DOM
		this.$el.addClass("closing").one("webkitTransitionEnd", function(event) {
			self.remove();
		});
	},
	
	
	render : function () {
		this.$el.html(this.template());
		this.delegateEvents();
		return this;
	}	
});