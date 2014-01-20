var TitleScreenView = ScreenView.extend({
	template : _.template($("#TitleScreenTemplate").html()),
	events : {
		"click" : "close"
	},	

	initialize : function (options) {

		
	},
	
	close : function (event) {
		alert("CLOSING");
		this.$el.addClass("closing");
	},
	
	render : function () {
		this.$el.html(this.template());
		this.delegateEvents();
	}
})