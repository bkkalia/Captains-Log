var ResourceView = Backbone.View.extend({
	tagName : "li",
	template : _.template($("#ResourceTemplate").html()),
	fart : "butt",
	className: "resource",
	
	events : {
		"click" : "handleClick"
	},
	
	handleClick : function () {
		this.model.set( {
			amount : this.model.get("amount") + 5
		});	
	},
	
	$amount : function () {
		return this.$el.find("figure.amount");	
	},
	
	initialize : function (options) {
		this.model = options.model;	
		
		// Re-render when changing model.
		this.model.on('change', this.render, this);
		
		// Set image from model.
		this.el.style.backgroundImage = 'url("' + this.model.image + '")';
	},
	
	render : function () {
		
		this.$el.html(this.template());	
		
		// Update resource count
		this.$amount().html(this.model.get("amount"));
		
		return this;
	}		
	
});