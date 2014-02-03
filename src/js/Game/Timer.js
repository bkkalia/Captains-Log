var Timer = Backbone.Model.extend({
	
	seconds : 0,
	interval : 1,	// Dispatch event on this interval in seconds.
	
	initialize : function (options) {
		
		if (options && options.interval) {
			this.interval = options.interval;
			console.log(this.interval);
		}
		
		
		this.startTimer();
		
		return this;
	},
	
	intervalCallback : function () {
		this.trigger("intervalElapsed");
	},
	
	startTimer : function () {
		// one-second interval callback.
		window.setInterval(this.tick.bind(this), 1000);
	},
	
	tick : function () {
		this.seconds++;
		
		if (this.seconds % this.interval === 0) {
			this.intervalCallback();
		}
	}
});

// From http://stackoverflow.com/a/6313008
Timer.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this.seconds, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}