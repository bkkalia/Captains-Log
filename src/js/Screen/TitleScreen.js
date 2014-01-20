var TitleScreenView = ScreenView.extend({
	template : _.template($("#TitleScreenTemplate").html()),
	events : {
		"click" : "close"
	},	

	initialize : function (options) {

		
	},
	
	close : function (event) {
		this.$el.addClass("closing");
	},
	
	render : function () {
		this.$el.html(this.template());
		this.delegateEvents();
	}
})