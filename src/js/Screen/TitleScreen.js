var TitleScreenView = ScreenView.extend({
	template : _.template($("#TitleScreenTemplate").html()),
	events : {
		"click button#start" : "close"
	},	

	initialize : function (options) {

		
	}
})