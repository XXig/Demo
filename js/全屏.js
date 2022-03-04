function fullScreenStart() {
	fullScreen()
	document.addEventListener("webkitfullscreenchange", function () {
		if (document.webkitIsFullScreen) {
			full()
		} else {
			exitFull()
		}
	}, false);

	document.addEventListener("fullscreenchange", function () {
		if (document.fullscreen) {
			full()
		} else {
			exitFull()
		}
	}, false);

	document.addEventListener("mozfullscreenchange", function () {
		if (document.mozFullScreen) {
			full()
		} else {
			exitFull()
		}
	}, false);

	document.addEventListener("msfullscreenchange", function () {
		if (document.msFullscreenElement) {
			full()
		} else {
			exitFull()
		}
	}, false)

}

//全屏
function fullScreen() {
	var element = document.documentElement;
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	}
}
function exitFull() {
	$('#admin-side,.btn-full').show();
	$('#indexIframe').removeClass('on')
	$('.layui-tab-item').css({
		'position': 'relative',
		'width': 'auto',
		'height': 'auto',
		'z-index': '1'
	})
}
function full() {
	$('#admin-side,.btn-full').hide();
	$('#indexIframe').addClass('on')
	$('.layui-tab-item').css({
		'position': 'fixed',
		'top': '0',
		'left': '0',
		'width': '100%',
		'height': '100%',
		'z-index': '9999'
	})
}
