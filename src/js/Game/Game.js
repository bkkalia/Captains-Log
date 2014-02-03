var Game = Backbone.Model.extend({
	resources : {
		pirates : new ResourceView({model : new PirateResource()}),
		cannons : new ResourceView({model : new CannonResource()}),
		food : new ResourceView({model : new FoodResource()})
	}
});