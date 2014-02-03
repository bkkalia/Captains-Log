var EventView = Backbone.View.extend({

	template : _.template($("#EventViewTemplate").html()),
	
	initialize : function () {
		console.log("Init event view");
		
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