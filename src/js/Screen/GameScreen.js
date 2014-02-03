
var GameScreenView = ScreenView.extend({

	template : _.template($("#GameScreenTemplate").html()),
	game: {},
	
	initialize : function (options) {
		
		this.render();
		
		
		this.game = new GameView();
		this.game.render();
		
	},
	
	render : function () {
		this.$el.html(this.template());
		
	}
})