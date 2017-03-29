(function() {
	var dom = $("<div><div class='i'></div></div>").addClass("count-down").appendTo("body");
	var script = $("script").last();
	var time = parseInt(script.attr("time"), 10);
	var style = script.attr("style");
	if (style == "light") {
		dom.addClass("light")
	}
	dom = $(".i", dom);
	if (time) {
		dom.html("体验倒计时:" + time + "秒");
		var timer = setInterval(function() {
			dom.html("体验倒计时:" + --time + "秒");
			if (time == 0) {
				clearInterval(timer);
				dom.html("体验结束")
				console.log("体验结束，大家赶紧回去继续听课吧。");
				wx.closeWindow()
			}
		},
		1e3)
	}
	function initWxShare() {
		wx.config({
			debug: false,
			appId: APPID,
			timestamp: TIME,
			nonceStr: RANDOM,
			signature: WXTOKEN,
			jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
		})
	}
	window.CALL_INIT_WEIXIN_SHARE = function() {
		initWxShare()
	}
})();
$(function() {
	var hm = document.createElement("script");
	hm.src = "http://www.5r5x.com/wxtoken/?f=" + encodeURIComponent(window.location.href) + "&t=" + (new Date).getTime();
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s)
});