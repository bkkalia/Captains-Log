var TitleScreenView = ScreenView.extend({
	template : _.template($("#TitleScreenTemplate").html()),
	initialize : function () {
		console.log("Title screen loaded.");
		
	},
	render : function () {
		return this.template();
	}
})