var windowHeight = $(window).height(),windowWidth = $(window).width();
document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
$(window).on('resize', function() {
	document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
});
function player(audio,musicbtn){
	this._btn     =$(musicbtn);
	this._audio   =$(audio)[0];
	this._playing =false;
	this.bind();
}
player.prototype = {
	__wechat:function(){
		var ua=navigator.userAgent.toLowerCase();"micromessenger"==ua.match(/MicroMessenger/i)&&(console.log("wechat"),true);
	},
	__onplay:function(){
		this._btn.addClass("on");
		this._playing=true;
	},
	__onpause:function(){
		this._btn.removeClass("on");
		this._playing=false;
	},
	bind:function(){
		var me=this, clickEvent = (document.ontouchstart!==null) ? 'click' : 'touchstart';
		$(this._audio).on("play",function(){
			me.__onplay();
		});
		$(this._audio).on("pause",function(){
			me.__onpause();
		});
		this._btn.on(clickEvent,function(){
			me._playing?me._audio.pause():me._audio.play();
		});
		this.__wechat()?($(document).on("WeixinJSBridgeReady",function(){me._audio.play(),$(document).off("WeixinJSBridgeReady")})):this._audio.play();
	}
};
function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}
$$('.logo path').forEach(function(path) {
	var p = path.style;
	p.strokeDasharray=p.strokeDashoffset = path.getTotalLength();
});
$$('.one li').forEach(function(li) {
	var len = li.textContent.length, s = li.style;
	s.width = len + 'ch';
	s.animationTimingFunction ="steps("+len+"),steps(1)";
});
$('#path3').one('webkitAnimationEnd animationend',function(){
	$(".load-l").addClass("on"),
	$(".load-btn").show().one("touchstart",function(){
		$(this).hide(),
		$(".load ul").addClass("fadeOut"),
		$(".load").addClass("load-acitve"),
		$(".one").addClass(function(){
			new player('#audio','.load-btn')
			return 'one-a';
		});
	});
});
$(".one li:nth-child(10)").on('webkitAnimationEnd animationend',function(){
	setTimeout(function(){
		$(".one-a,.one-a+div").remove();
	},2500)
	setTimeout(function(){
		$(".two").show();
	},1500)
});