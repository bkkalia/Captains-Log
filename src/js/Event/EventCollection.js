var EventCollection = Backbone.Collection.extend({
	model : Event,
	url : "dist/data/all.json",

	initialize : function (options) {
		this.fetch().done(function () {
			options.callback();
		});
	},
	
	fetchComplete : function () {
		
	}	
	
});