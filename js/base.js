document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
$(window).on('resize', function() {
	document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
});
// function modifileRootRem () {
//     var root = window.document.documentElement;
//     var fontSize = parseFloat(root.style.fontSize);
//     var finalFontSize = parseFloat(window.getComputedStyle(root).getPropertyValue("font-size"));
//     if(finalFontSize === fontSize) return;
//     root.style.fontSize = fontSize+(fontSize-finalFontSize) + "px";
// }
// if(typeof window.onload === 'function'){
//     var oldFun = window.onload;
//     window.onload = function(){
//         oldFun();
//         modifileRootRem();
//     }
// }else{
//     window.onload = modifileRootRem;
// }
// "use strict"
// // 禁止滑动
// function cancleDocumentScroll () {
// 	document.addEventListener('touchmove', function (e) {
// 		e.preventDefault();
// 		return false;
// 	}, false);
// }
// !function(win, option) {
// 	var count = 0, 
// 	designWidth = option.designWidth, 
// 	designHeight = option.designHeight || 0, 
// 	designFontSize = option.designFontSize || 20, 
// 	callback = option.callback || null,
// 	root = document.documentElement,
// 	body = document.body,
// 	rootWidth, newSize, t, self;
// 	function _getNewFontSize() {
// 		var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
// 		return parseInt( scale * 10000 * designFontSize ) / 10000;
// 	}
// 	!function () {
// 		rootWidth = root.getBoundingClientRect().width;
// 		self = self ? self : arguments.callee;
// 	    //如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试20次，否则使用win.innerWidth计算
// 	    if( rootWidth !== win.innerWidth &&  count < 20 ) {
// 	    	win.setTimeout(function () {
// 	    		count++;
// 	    		self();
// 	    	}, 0);
// 	    } else {
// 	    	newSize = _getNewFontSize();
// 	      //如果css已经兼容当前分辨率就不管了
// 	      if( newSize + 'px' !== getComputedStyle(root)['font-size'] ) {
// 	      	root.style.fontSize = newSize + "px";
// 	      	return callback && callback(newSize);
// 	      };
// 	    };
// 	  }();
// 	  //横竖屏切换的时候改变fontSize，根据需要选择使用
// 	  win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
// 	  	clearTimeout(t);
// 	  	t = setTimeout(function () {
// 	  		self();
// 	  	}, 200);
// 	  }, false);
// 	}(window, {
// 		designWidth: 640, 
// 		designHeight: 1040,
// 		designFontSize: 100,
// 		callback: function (argument) {
// 		}
// 	});


// !function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);  flex(100, 1);


	// var w = document.documentElement.clientWidth || document.body.clientWidth;
	// var h = document.documentElement.clientHeight || document.body.clientHeight;
	// var CWidth = w;
	// document.documentElement.style.fontSize = (CWidth/750*20)+"px";		//需要修改920这个值，此值等于设计稿的宽
	// window.onresize = function()
	// {
	// 	var w = document.documentElement.clientWidth || document.body.clientWidth;
	// 	var h = document.documentElement.clientHeight || document.body.clientHeight;
	// 	var CWidth = w;
	// 	document.documentElement.style.fontSize = (CWidth/750*20)+"px";
	// }
	// html{font-size:20px}/*此值和上面的20对应,一般不需要修改*/
	// 
	// 

//禁止微信下拉
// $(window).on('scroll.elasticity',function(e) {
// 	e.preventDefault();
// }).on('touchmove.elasticity',function(e) {
// 	e.preventDefault();
// });


// function adapt(designWidth, rem2px){
//   var d = window.document.createElement('div');
//   d.style.width = '1rem';
//   d.style.display = "none";
//   var head = window.document.getElementsByTagName('head')[0];
//   head.appendChild(d);
//   var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
//   d.remove();
//   document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
//   var st = document.createElement('style');
//   var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
//   var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
//   st.innerHTML = portrait + landscape;
//   head.appendChild(st);
//   return defaultFontSize
// };
// var defaultFontSize = adapt(640, 100);


	// function parseUA() {
	// 	var u = navigator.userAgent;
	// 	var u2 = navigator.userAgent.toLowerCase();
 //            return { //移动终端浏览器版本信息
 //                trident: u.indexOf('Trident') > -1, //IE内核
 //                presto: u.indexOf('Presto') > -1, //opera内核
 //                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
 //                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
 //                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
 //                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
 //                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
 //                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
 //                iPad: u.indexOf('iPad') > -1, //是否iPad
 //                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
 //                iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
 //                weixin: u2.match(/MicroMessenger/i) == "micromessenger",
 //                ali: u.indexOf('AliApp') > -1,
 //              };
 //            }

 //            var ua = parseUA();
 //            if (!ua.mobile) {
 //            	location.href = './pc.html';
 //            }




// (function(w){
// 	var vp = document.createElement("meta");
// 	vp.setAttribute("name", "viewport");
// 	vp.setAttribute("content", "width=" + (/ip(?=od|ad|hone)/i.test(navigator.userAgent) ? w : w+",target-densitydpi=" + (640 / (navigator.appVersion.indexOf("GT-I9100G") > -1 ? 480 : screen.width) * devicePixelRatio * 160)) + ",user-scalable=no");
// 	document.getElementsByTagName("head")[0].appendChild(vp);
// })(640);
// (function(){
// 	var ua = window.navigator.userAgent;
// 	if(!/Android|iPhone|SymbianOS|Windows\sPhone|iPad|iPod/i.test(ua)) {
// 		window.location.href="../index.html";
// 	}
// })();


// 	(function (doc, win) {
// 	var docEl = doc.documentElement,
// 	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 	recalc = function () {
// 		var clientWidth = docEl.clientWidth;
// 		if (!clientWidth) return;
// 		docEl.style.fontSize = clientWidth / 3.75 + 'px';
// 	};
// 	if (!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

// (function (doc, win) {
// 	var docEl = doc.documentElement,
// 	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 	recalc = function () {
// 		var clientWidth = docEl.clientWidth;
// 		if (!clientWidth) return;
// 		docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
// 	};

// 	if (!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);


// (function() {
//   // deicePixelRatio ：设备像素
//   var scale = 1 / devicePixelRatio;
//   //设置meta 压缩界面 模拟设备的高分辨率
//   document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//   //debounce 为节流函数，自己实现。或者引入underscoure即可。
//   var reSize = _.debounce(function() {
//       var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth;
//       //按照640像素下字体为100px的标准来，得到一个字体缩放比例值 6.4
//       document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
//   }, 50);

//   window.onresize = reSize;
// })();


// var windowHeight = $(window).height();
// var windowWidth = $(window).width();
// var wh = windowWidth / windowHeight;
// if (wh > 0.69) {
//   $('body').addClass('small');
// } else if (wh > 0.66) {
//   $('body').addClass('middle');
// }
// var scale = windowWidth / 375;
// $('section').css('transform', 'scale(' + scale + ')').height(windowHeight / scale)

// document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
// $(window).on('resize', function() {
// 	document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
// })

// !function(e, t) {
// 	var n, i = (navigator.userAgent, t.documentElement),
// 	o = function() {
// 		var e = i.getBoundingClientRect().width || 320,
// 		t = e / 320 * 20;
// 		i.style.fontSize = t + "px"
// 	};
// 	e.addEventListener("resize",
// 	function() {
// 		clearTimeout(n),
// 		n = setTimeout(o, 100)
// 	},!1),
// 	e.addEventListener("pageshow",
// 	function(e) {
// 		e.persisted && (clearTimeout(n), n = setTimeout(o, 100))
// 	},!1),
// 	o()
// } (window, document);


// eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('E(q(p,a,c,k,e,r){e=q(c){s c.y(a)};t(!\'\'.u(/^/,D)){v(c--)r[e(c)]=k[c]||e(c);k=[q(e){s r[e]}];e=q(){s\'\\\\w+\'};c=1};v(c--)t(k[c])p=p.u(z B(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);s p}(\'e k="o"n m?"l":"c";p c(){e a=i.h,0=g,1=d,j=f,b=d;8=f;7(a.5/a.9>1/j){7(a.9<=8){a.4.3=a.9/j*0+"2"}6{a.4.3=8/j*0+"2"}}6{7(a.5<=b){a.4.3=a.5/1*0+"2"}6{a.4.3=b/1*0+"2"}}};c();\',x,x,\'A|H|G|I|J|K|L|t|R|M||C|N|O|P|Q|S|T|U||F|V|W|X|Y|q\'.Z(\'|\'),0,{}))',62,62,'||||||||||||||||||||||||||function||return|if|replace|while||26|toString|new||RegExp||String|eval||px||fontSize|style|clientWidth|else|clientHeight|resize|375|var|604||100|documentElement|document|orientationchange|window|in|onorientationchange|split'.split('|'),0,{}))

// function resize() {
// 	var a = document.documentElement,
// 	b = 100,
// 	c = 375,
// 	d = 604,
// 	e = 375;
// 	hk = 604,
// 	a.clientWidth / a.clientHeight > c / d ? a.clientHeight <= hk ? a.style.fontSize = a.clientHeight / d * b + "px": a.style.fontSize = hk / d * b + "px": a.clientWidth <= e ? a.style.fontSize = a.clientWidth / c * b + "px": a.style.fontSize = e / c * b + "px"
// }
// var evt = "onorientationchange" in window ? "orientationchange": "resize";
// resize();

// var evt = "onorientationchange" in window ? "orientationchange" : "resize";
// function resize() {
// 	var html = document.documentElement,
// 	fontSize = 100,
// 	pageW = 375,
// 	pageH = 604,
// 	wk = 375;
// 	hk = 604;
// 	if (html.clientWidth / html.clientHeight > pageW / pageH) {
// 		if (html.clientHeight <= hk) {
// 			html.style.fontSize = html.clientHeight / pageH * fontSize + "px";
// 		} else {
// 			html.style.fontSize = hk / pageH * fontSize + "px";
// 		}
// 	} else {
// 		if (html.clientWidth <= wk) {
// 			html.style.fontSize = html.clientWidth / pageW * fontSize + "px";
// 		} else {
// 			html.style.fontSize = wk / pageW * fontSize + "px";
// 		}
// 	}
// }
// resize();


// !function(a, b) {
// 	function s() {
// 		var b = d.getBoundingClientRect().width;
// 		b / g > 540 && (b = 540 * g);
// 		var c = b / 10;
// 		d.style.fontSize = c + "px",
// 		j.rem = a.rem = c
// 	}
// 	var i, c = a.document,
// 	d = c.documentElement,
// 	e = c.querySelector('meta[name="viewport"]'),
// 	f = c.querySelector('meta[name="flexible"]'),
// 	g = 0,
// 	h = 0,
// 	j = b.flexible || (b.flexible = {});
// 	if (e) {
// 		var k = e.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
// 		k && (h = parseFloat(k[1]), g = parseInt(1 / h))
// 	} else if (f) {
// 		var l = f.getAttribute("content");
// 		if (l) {
// 			var m = l.match(/initial\-dpr=([\d\.]+)/),
// 			n = l.match(/maximum\-dpr=([\d\.]+)/);
// 			m && (g = parseFloat(m[1]), h = parseFloat((1 / g).toFixed(2))),
// 			n && (g = parseFloat(n[1]), h = parseFloat((1 / g).toFixed(2)))
// 		}
// 	}
// 	if (!g && !h) {
// 		var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
// 		q = a.devicePixelRatio;
// 		g = p ? q >= 3 && (!g || g >= 3) ? 3 : q >= 2 && (!g || g >= 2) ? 2 : 1 : 1,
// 		h = 1 / g
// 	}
// 	if (d.setAttribute("data-dpr", g), !e) if (e = c.createElement("meta"), e.setAttribute("name", "viewport"), e.setAttribute("content", "initial-scale=" + h + ", maximum-scale=" + h + ", minimum-scale=" + h + ", user-scalable=no"), d.firstElementChild) d.firstElementChild.appendChild(e);
// 	else {
// 		var r = c.createElement("div");
// 		r.appendChild(e),
// 		c.write(r.innerHTML)
// 	}
// 	a.addEventListener("resize",
// 		function() {
// 			clearTimeout(i),
// 			i = setTimeout(s, 300)
// 		},!1),
// 	a.addEventListener("pageshow",
// 		function(a) {
// 			a.persisted && (clearTimeout(i), i = setTimeout(s, 300))
// 		},!1),
// 	"complete" === c.readyState ? c.body.style.fontSize = 12 * g + "px": c.addEventListener("DOMContentLoaded",
// 		function(a) {
// 			c.body.style.fontSize = 12 * g + "px"
// 		},!1),
// 	s(),
// 	j.dpr = a.dpr = g,
// 	j.refreshRem = s,
// 	j.rem2px = function(a) {
// 		var b = parseFloat(a) * this.rem;
// 		return "string" == typeof a && a.match(/rem$/) && (b += "px"),
// 		b
// 	},
// 	j.px2rem = function(a) {
// 		var b = parseFloat(a) / this.rem;
// 		return "string" == typeof a && a.match(/px$/) && (b += "rem"),
// 		b
// 	}
// } (window, window.lib || (window.lib = {}));

// var dpr, rem, scale;
// var docEl = document.documentElement;
// var fontEl = document.createElement('style');
// var metaEl = document.querySelector('meta[name="viewport"]');
// dpr = window.devicePixelRatio || 1;
// rem = docEl.clientWidth * dpr / 10;
// scale = 1 / dpr;
// metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
// docEl.setAttribute('data-dpr', dpr);
// docEl.firstElementChild.appendChild(fontEl);
// fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
// window.rem2px = function(v) {
// 	v = parseFloat(v);
// 	return v * rem;
// };
// window.px2rem = function(v) {
// 	v = parseFloat(v);
// 	return v / rem;
// };
// window.dpr = dpr;
// window.rem = rem;