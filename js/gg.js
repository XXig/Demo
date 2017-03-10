!function(n) {
	function t(e) {
		if (o[e]) return o[e].exports;
		var i = o[e] = {
			exports: {},
			id: e,
			loaded: !1
		};
		return n[e].call(i.exports, i, i.exports, t),
		i.loaded = !0,
		i.exports
	}
	var o = {};
	return t.m = n,
	t.c = o,
	t.p = "",
	t(0)
} ([function(n, t, o) {
	"use strict";
	var e = (o(1), o(2), o(3), o(4), o(9)),
	i = o(7),
	a = o(8);
	o(6),
	o(5);
	var l = function() {
		var n = 0;
		document.body.addEventListener("touchstart",
		function(t) {
			if (0 == n) n = (new Date).getTime(),
			console.log(n);
			else {
				if ((new Date).getTime() - n < 500) return t.preventDefault(),
				!1;
				n = (new Date).getTime()
			}
		})
	};
	l();
	var r = {
		loadView: null,
		indexView: null,
		paintView: null,
		endView: null,
		videoView: null
	},
	s = function() {
		r.loadView = r.loadView || new e;
		var n = r.loadView,
		t = function() {
			r.indexView = r.indexView || new a;
			var t = r.indexView;
			t.play(),
			t.onstop = function() {
				r.endView.setZIndex()
			},
			t.onplay = function() {
				n.hide(),
				o()
			}
		},
		o = function() {
			r.endView = r.endView || new i;
			var n = r.endView;
			n.show()
		};
		n.show(),
		n.onstart = t,
		n.load()
	};
	s()
},
function(n, t) {
	"use strict";
	var o = {};
	o.ajax = function(n, t, o) {
		$.ajax({
			type: n.type || "GET",
			url: n.url,
			dataType: "json",
			data: n.data || "",
			success: function(n) {
				1 == n.status ? t && t(n.data) : o && o(n.message)
			},
			error: function(n, t, e) {
				o && o("网络连接不稳定，请重试或刷新页面！")
			}
		})
	},
	o.wxShare = function(n, t) {
		wx.onMenuShareTimeline({
			title: n.title,
			link: n.link,
			imgUrl: n.img,
			success: function() {
				t && t(),
				o.ajax({
					url: "http://click.treedom.cn/log",
					type: "POST",
					data: {
						key: "wechat",
						val: "timeline",
						pro: n.proj
					}
				},
				function(n) {
					console.log(n)
				},
				function(n) {
					console.log(n)
				}),
				_czc && _czc.push(["_trackEvent", "分享", "朋友圈"])
			},
			cancel: function() {}
		}),
		wx.onMenuShareAppMessage({
			title: n.title,
			desc: n.desc,
			link: n.link,
			imgUrl: n.img,
			success: function() {
				t && t(),
				o.ajax({
					url: "http://click.treedom.cn/log",
					type: "POST",
					data: {
						key: "wechat",
						val: "message",
						pro: n.proj
					}
				},
				function(n) {},
				function(n) {
					console.log(n)
				}),
				_czc && _czc.push(["_trackEvent", "分享", "好友"])
			},
			cancel: function() {}
		})
	},
	o.initWxApi = function(n, t, e) {
		o.ajax({
			url: "http://click.treedom.cn/wx/signature",
			type: "POST",
			data: {
				appid: n.appid,
				url: encodeURIComponent(n.link)
			}
		},
		function(t) {
			wx.config({
				debug: !1,
				appId: t.appId,
				timestamp: t.timestamp,
				nonceStr: t.nonceStr,
				signature: t.signature,
				jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType"]
			}),
			wx.ready(function() {
				o.wxShare(n),
				DS.ready(function() {
					wx.onMenuShareAppMessage({
						title: n.title,
						desc: n.desc,
						imgUrl: n.img,
						link: DS.linkChange(n.link),
						success: function() {
							DS.sendRepost("appMessage"),
							_czc && _czc.push(["_trackEvent", "分享", "好友"])
						}
					}),
					wx.onMenuShareTimeline({
						title: n.title,
						desc: n.desc,
						imgUrl: n.img,
						link: DS.linkChange(n.link),
						success: function() {
							DS.sendRepost("timeline"),
							_czc && _czc.push(["_trackEvent", "分享", "朋友圈"])
						}
					})
				}),
				wx.getNetworkType({
					success: function(n) {
						var t = n.networkType;
						_czc && _czc.push(["_trackEvent", t, "网络类型"])
					}
				})
			})
		},
		function(n) {
			console.log(n)
		})
	},
	o.responseBody = function(n) {
		n = n || {},
		n.width = n.width || 375,
		n.height = n.height || 600,
		n.type = n.type || "cover";
		var t, o = $("[data-response]"),
		e = function() {
			var e = window.innerWidth / n.width,
			i = window.innerHeight / n.height;
			switch (n.type) {
			case "cover":
				t = e > i ? e: i;
				break;
			case "contain":
				t = i > e ? e: i;
				break;
			default:
				t = 1
			}
			o.each(function(n) {
				this.style.webkitTransform = "scale(" + t + ")"
			})
		};
		return e(),
		$(window).on("resize",
		function() {
			e()
		}),
		t
	},
	o.portraitTips = function(n) {
		var t = "string" == typeof n ? $(n) : n,
		o = function() {
			90 == window.orientation || -90 == window.orientation ? t.show() : t.hide()
		};
		o(),
		$(window).on("resize",
		function() {
			o()
		})
	},
	n.exports = o
},
function(n, t, o) {
	"use strict";
	var e = o(3),
	i = i || {};
	i.defShare = {
		title: "穿越故宫来看你",
		desc: "皇上，您为何萌性大发",
		link: location.href,
		img: "http://nigg.treedom.cn/dist/img/share_logo.jpg",
		proj: "nigg",
		appid: "wx045f59bcba3061c4"
	},
	i.imgPath = "http://7xvl2z.com1.z0.glb.clouddn.com/",
	i.isAndroid = navigator.userAgent.indexOf("Android") > -1,
	i.scale = 1,
	i.audioPath = {},
	i.audio = {},
	i.Preload = e,
	i.pageImgs = {
		imgs: [{
			name: "bg_end",
			url: i.imgPath + "bg_end.jpg"
		},
		{
			name: "bg_load",
			url: i.imgPath + "bg_load.jpg"
		},
		{
			name: "bg_load_process",
			url: i.imgPath + "bg_load_process.png"
		},
		{
			name: "load_click",
			url: i.imgPath + "load_click.png"
		},
		{
			name: "load_txt2",
			url: i.imgPath + "load_txt2.png"
		},
		{
			name: "load_txt1",
			url: i.imgPath + "load_txt1.png"
		},
		{
			name: "end_body",
			url: i.imgPath + "end_body.png"
		},
		{
			name: "end_btn_in",
			url: i.imgPath + "end_btn_in.png"
		},
		{
			name: "end_btn_share",
			url: i.imgPath + "end_btn_share.png"
		},
		{
			name: "end_cloud_left",
			url: i.imgPath + "end_cloud_left.png"
		},
		{
			name: "end_cloud_right",
			url: i.imgPath + "end_cloud_right.png"
		},
		{
			name: "end_hand_left",
			url: i.imgPath + "end_hand_left.png"
		},
		{
			name: "end_hand_right",
			url: i.imgPath + "end_hand_right.png"
		},
		{
			name: "end_head",
			url: i.imgPath + "end_head.png"
		},
		{
			name: "float_hand_left",
			url: i.imgPath + "float_hand_left.png"
		},
		{
			name: "float_hand_right",
			url: i.imgPath + "float_hand_right.png"
		},
		{
			name: "float_head",
			url: i.imgPath + "float_head.png"
		},
		{
			name: "logo",
			url: i.imgPath + "logo.png"
		},
		{
			name: "sprite_yan",
			url: i.imgPath + "sprite_yan.png"
		},
		{
			name: "sprite_king",
			url: i.imgPath + "sprite_king.png"
		}],
		sprites: [],
		keyimgs: []
	},
	n.exports = i
},
function(n, t, o) {
	"use strict";
	var e = o(1),
	i = function(n, t) {
		var o = this;
		this.onloading = null,
		this.onload = null,
		this.onfail = null;
		var a = n.imgs ? n.imgs.length: 0,
		l = n.sprites ? n.sprites.length: 0,
		r = n.keyimgs ? n.keyimgs.length: 0,
		s = n.ajaxs ? n.ajaxs.length: 0,
		c = t || 7,
		d = a + l + r * c + s,
		u = 0;
		this.getProcess = function() {
			return u
		};
		var f = function() {
			for (var t = function(n) {
				u++,
				i.buffer.imgs[this.bufferName] = this,
				u == d ? (o.onloading && o.onloading(100), o.onload && o.onload()) : o.onloading && o.onloading(Math.round(u / d * 100))
			},
			e = 0; a > e; e++) {
				var l = new Image;
				l.onload = l.onerror = t,
				l.bufferName = n.imgs[e].name,
				l.src = n.imgs[e].url
			}
		},
		g = function() {
			for (var t = function() {
				u++,
				i.buffer.sprites[this.bufferName] = this,
				u == d ? (o.onloading && o.onloading(100), o.onload && o.onload()) : o.onloading && o.onloading(Math.round(u / d * 100))
			},
			e = 0; l > e; e++) {
				var a = new Image;
				a.onload = a.onerror = t,
				a.bufferName = n.sprites[e].name,
				a.src = n.sprites[e].url
			}
		},
		h = function() {
			for (var t = function() {
				u = u + c - this.keyProcess,
				i.buffer.keyimgs = i.loadKeyImgs.buffer,
				u == d ? (o.onloading && o.onloading(100), o.onload && o.onload()) : o.onloading && o.onloading(Math.round(u / d * 100))
			},
			e = function(n) {
				var t = Math.floor(n * c / 100);
				if (t != this.keyProcess) {
					var e = t - this.keyProcess;
					u += e,
					this.keyProcess = t,
					t !== c && o.onloading && o.onloading(Math.round(u / d * 100))
				}
			},
			a = 0; r > a; a++) {
				var l = new i.loadKeyImgs(n.keyimgs[a].el, n.keyimgs[a].pathPrefix, n.keyimgs[a].pad, n.keyimgs[a].postfix);
				l.onload = t,
				l.onloading = e,
				l.keyProcess = 0,
				l.load()
			}
		},
		p = function() {
			var t = function() {
				u++,
				u == d ? (o.onloading && o.onloading(100), o.onload && o.onload()) : o.onloading && o.onloading(Math.round(u / d * 100))
			};
			n.ajaxs.forEach(function(n) {
				e.ajax({
					url: n.url,
					type: n.type || "GET",
					data: n.data || ""
				},
				function(n) {
					return function(o) {
						t(),
						n.succback && n.succback(o)
					}
				} (n),
				function(n) {
					return function(e) {
						t(),
						n.errback && n.errback(e),
						o.onfail && o.onfail({
							msg: e,
							url: n.url
						})
					}
				} (n))
			})
		};
		this.load = function() {
			return 0 == d ? void(this.onload && this.onload()) : (0 !== a && f(), 0 !== l && g(), 0 !== r && h(), void(0 !== s && p()))
		}
	};
	i.buffer = {
		imgs: {},
		sprites: {},
		keyimgs: {}
	},
	i.pad = function() {
		var n = 5,
		t = [];
		return function(o, e) {
			e = e || n;
			var i = e - o.toString().length;
			return 0 >= i ? o: (t[i] || (t[i] = new Array(i + 1).join("0")), t[i] + o)
		}
	} (),
	i.loadKeyImgs = function() {
		var n = function(n, t, o, e) {
			var a = this,
			l = n.attr("data-prefix"),
			r = parseInt(n.attr("data-keyTo")),
			s = [],
			c = 0;
			o = o || 5,
			e = e || "png",
			this.len = r + 1;
			var d = function() {
				c++,
				a.onloading && a.onloading(Math.floor(c / (r + 1) * 100)),
				c == r + 1 && (i.loadKeyImgs.buffer[l.slice(0, l.length - 1)] = s, a.onload && a.onload())
			};
			this.onload = null,
			this.onloading = null,
			this.load = function() {
				for (var n = 0; r + 1 > n; n++) {
					var a = new Image;
					a.src = t + l + i.pad(n, o) + "." + e,
					a.onload = a.onerror = d,
					s.push(a)
				}
			}
		};
		return n.buffer = {},
		n
	} (),
	n.exports = i
},
function(n, t, o) {
	"use strict";
	var e = (o(1),
	function(n, t, o, e) {
		if (!n || !o) throw new Error("el、imgs是必选填参数");
		if ("array" !== t && "sprite" !== t) throw new Error('只支持"array"和"sprite"模式');
		var i = null,
		a = null,
		l = 0,
		r = null,
		s = null,
		c = "stop",
		d = 1e9,
		u = null,
		f = 0,
		g = !1,
		h = t,
		p = {
			cover: 0,
			fps: 24,
			loop: "infinite",
			resolution: 2
		};
		e = e || p,
		e.cover = e.cover || p.cover,
		e.fps = e.fps || p.fps,
		e.loop = e.loop || p.loop,
		e.resolution = e.resolution || p.resolution;
		var m = 0,
		v = null,
		w = e.loop,
		y = function() {
			a = $("<canvas>").get(0),
			r = a.getContext("2d"),
			a.width = 2 * e.width || 2 * n.width(),
			a.height = 2 * e.height || 2 * n.height(),
			a.style.display = "block",
			a.style.width = "100%",
			a.style.height = "100%",
			n.append(a)
		},
		k = function(n) {
			if (r.clearRect(0, 0, a.width, a.height), "array" == h) 0 != o[n].width && r.drawImage(o[n], 0, 0, a.width, a.height);
			else if ("sprite" == h) {
				var t = o.width / i;
				r.drawImage(o, t * n, 0, t, o.height, 0, 0, a.width, a.height)
			} else console.log("没有匹配模式")
		},
		x = function() {
			k(e.cover)
		},
		_ = function() {
			y(),
			i = "array" === h ? o.length: Math.round(2 * o.width / (a.width * e.resolution)),
			console.log("current mode is:" + h),
			v = i - 1,
			x()
		};
		this["goto"] = function(n) {
			k(n),
			l = n
		},
		this.next = function() {
			var n = (l + 1 + i - 1) % (i - 1);
			this["goto"](n)
		},
		this.prev = function() {
			var n = (l - 1 + i - 1) % (i - 1);
			this["goto"](n)
		},
		this.fromTo = function(n, t, o, a) {
			clearInterval(s);
			var l = this,
			r = n,
			h = function() {
				if (!g) {
					if (f >= u) return clearInterval(s),
					s = null,
					f = 0,
					u = 0,
					c = "stop",
					void(a && a());
					r > t && (r = n),
					l["goto"](r),
					r++,
					f++,
					l.playBack && l.playBack(r / i)
				}
			};
			f = 0,
			c = "play",
			o = o && "infinite" != o ? o: d,
			u = (t - n + 1) * o,
			g = !1,
			m = n,
			v = t,
			w = o,
			h(),
			s = setInterval(h, 1e3 / e.fps)
		},
		this.toFrom = function(n, t, o, a) {
			clearInterval(s);
			var l = this,
			r = n,
			h = function() {
				if (!g) {
					if (f >= u) return clearInterval(s),
					s = null,
					f = 0,
					u = 0,
					c = "stop",
					void(a && a());
					t > r && (r = n),
					l["goto"](r),
					r--,
					f++,
					l.playBack && l.playBack(r / i)
				}
			};
			f = 0,
			c = "play",
			o = o && "infinite" != o ? o: d,
			u = (n - t + 1) * o,
			g = !1,
			m = t,
			v = n,
			w = o,
			h(),
			s = setInterval(h, 1e3 / e.fps)
		},
		this.repeatplay = function(n, t, o, e) {
			var i = this,
			a = 0;
			o = o && "infinite" != o ? o: d;
			var l = function() {
				a++,
				a == o ? e && e() : i.fromTo(n, t, 1, r)
			},
			r = function() {
				i.toFrom(t, n, 1, l)
			};
			this.fromTo(n, t, 1, r)
		},
		this.from = function(n, t, o) {
			var e = i - 1;
			this.fromTo(n, e, t, o)
		},
		this.to = function(n, t, o) {
			var e = 0;
			this.fromTo(e, n, t, o)
		},
		this.pause = function() {
			g = !0,
			c = "stop"
		},
		this.play = function(n) {
			"play" != c && (g ? g = !1 : this.fromTo(m, v, w, n))
		},
		this.stop = function() {
			clearInterval(s),
			c = "stop",
			u = null,
			f = 0,
			g = !1,
			m = 0,
			v = i - 1,
			w = e.loop,
			k(e.cover)
		},
		this.getState = function() {
			return c
		},
		this.getLen = function() {
			return i
		},
		this.destroy = function() {
			clearInterval(s),
			s = null,
			r = null,
			$(a).remove(),
			a = null;
			for (var n in this) delete this[n]
		},
		_()
	});
	n.exports = e
},
function(n, t) {},
function(n, t, o) {
	n.exports = o.p + "/dist/js/lib/zepto.min.js"
},
function(n, t, o) {
	"use strict";
	var e = (o(1), o(2), o(3),
	function() {
		var n = this,
		t = {};
		t.pageEl = $(".m-end"),
		t.isInit = !1,
		t.btnShare = t.pageEl.find(".btn-share1"),
		t.btnIn = t.pageEl.find(".btn-in"),
		t.king = t.pageEl.find(".king"),
		t.cloud = t.pageEl.find(".cloud"),
		t.floatwrap = t.pageEl.find(".float-wrap"),
		t.floatking = t.floatwrap.find(".f-king"),
		t.floatyan = t.floatwrap.find(".f-yan");
		t.init = function() {
			t.isInit !== !0 && (t.btnIn.on("click",
			function() {
				window.location.href = "http://nextidea.qq.com/2016/m/index.html"
			}), t.btnShare.on("click",
			function() {
				t.king.addClass("king-fly"),
				t.floatwrap.show(),
				setTimeout(function() {
					t.floatking.addClass("f-king-fly")
				},
				300)
			}), t.floatyan.on("webkitAnimationEnd",
			function() {
				$(this).hide()
			}), t.floatwrap.on("click",
			function() {
				$(this).hide(),
				t.king.removeClass("king-fly"),
				t.floatking.removeClass("f-king-fly"),
				t.floatyan.show()
			}), t.isInit = !0)
		},
		n.setZIndex = function() {
			t.pageEl.css({
				"z-index": 999,
				opacity: 1
			}),
			t.cloud.addClass("cloud-move")
		},
		n.show = function() {
			t.pageEl.show()
		},
		n.hide = function() {
			n.onhide && n.onhide(),
			t.pageEl.hide()
		},
		t.init()
	});
	n.exports = e
},
function(n, t, o) {
	"use strict";
	var e = (o(1), o(2), o(3), o(4),
	function() {
		var n = this,
		t = {};
		t.pageEl = $(".m-index"),
		t.isInit = !1,
		t.videoBox = t.pageEl.find("video");
		t.init = function() {
			if (t.isInit !== !0) {
				t.videoBox.on("ended",
				function() {
					n.onstop && n.onstop(),
					t.pageEl.addClass("index-hide"),
					setTimeout(function() {
						n.hide()
					},
					500)
				}),
				t.isInit = !0;
				var o = function() {
					t.pageEl.css({
						width: "100%",
						height: "100%"
					}),
					t.videoBox.parent().addClass("block"),
					t.videoBox.attr({
						width: 375,
						height: 600
					}),
					$(this).off("timeupdate", o),
					n.onplay && n.onplay()
				};
				t.videoBox.on("timeupdate", o)
			}
		},
		n.play = function() {
			t.videoBox.get(0).play()
		},
		n.show = function() {},
		n.hide = function() {
			t.pageEl.hide(),
			n.onhide && n.onhide()
		},
		t.init()
	});
	n.exports = e
},
function(n, t, o) {
	"use strict";
	var e = o(1),
	i = o(2),
	a = (o(4),
	function() {
		setTimeout(function() {
			i.scale = e.responseBody({
				width: 375,
				height: 600,
				type: "contain"
			})
		},
		300),
		e.initWxApi(i.defShare),
		$(document.documentElement).on("touchmove",
		function(n) {
			n.preventDefault()
		})
	}),
	l = function() {
		var n = this,
		t = {};
		t.pageEl = $(".m-loading"),
		t.isInit = !1,
		t.init = function() {
			t.isInit !== !0 && (a(), t.processLineEl = t.pageEl.find(".loadProcess .inner"), t.processtxtEl = t.pageEl.find(".loadProcess .txt"), t.processtxtbgEl = t.pageEl.find(".loadProcess .txt-bg"), t.processclickEl = t.pageEl.find(".loadProcess .click"), t.loadtxtEl = t.pageEl.find(".loading-txt"), t.musicTipsEl = t.pageEl.find(".music-tips"), t.processnumEl = t.processtxtEl.find(".num"), t.gload = new i.Preload(i.pageImgs), t.gload.onloading = function(n) {
				console.log(n),
				t.processnumEl.html(n)
			},
			t.gload.onload = function() {
				t.loadtxtEl.addClass("complete"),
				t.processtxtEl.hide(),
				t.processclickEl.show(),
				t.musicTipsEl.addClass("move"),
				t.pageEl.on("touchstart",
				function() {
					n.onstart && n.onstart()
				})
			},
			t.gload.onfail = function(n) {
				console.log(n)
			},
			t.isInit = !0)
		},
		n.show = function() {
			t.pageEl.show()
		},
		n.hide = function() {
			var o = function() {
				t.pageEl.hide()
			};
			setTimeout(o, 100),
			n.onhide && n.onhide(),
			t.musicTipsEl.removeClass("move")
		},
		n.load = function() {
			t.gload.load()
		},
		t.init()
	};
	n.exports = l
}]);