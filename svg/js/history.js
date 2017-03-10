if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
}
var Common = (function() {
	var b = function() {
		var h = navigator.userAgent;
		if (h) {
			if (h.toLowerCase().match(/qdreader/i) == "qdreader") {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	};
	var d = function() {
		return navigator.userAgent.toLowerCase().indexOf("android") > -1
	};
	var a = function() {
		return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
	};
	var e = function() {
		return navigator.userAgent.toLowerCase().match(/micromessenger/i) == "micromessenger"
	};
	// var g = function(h, j) {
	// 	var i = document.createElement("script");
	// 	i.src = h;
	// 	i.type = "text/javascript";
	// 	j = j || function() {};
	// 	i.onload = function(k) {
	// 		j();
	// 		this.onload = null
	// 	};
	// 	document.getElementsByTagName("head")[0].appendChild(i)
	// };
	// var f = function(i, k, l, h, j) {
	// 	j = $.extend({
	// 		url: i,
	// 		type: "GET",
	// 		cache: false,
	// 		dataType: "json",
	// 		data: k,
	// 		success: l,
	// 		error: h
	// 	}, j);
	// 	$.ajax(j)
	// };
	// var c = function(l, i, m, k, j, h) {
	// 	if (!e()) {
	// 		return
	// 	}
	// 	g("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", function() {
	// 		var o = "getwxqdzwwjsconfig";
	// 		var n = {
	// 			ajaxMethod: o
	// 		};
	// 		f("/ajax/index.ashx", n, function(p) {
	// 			if (p && p.IsSuccess) {
	// 				wx.config({
	// 					debug: false,
	// 					appId: p.ReturnObject.appId,
	// 					timestamp: p.ReturnObject.timestamp,
	// 					nonceStr: p.ReturnObject.nonceStr,
	// 					signature: p.ReturnObject.signature,
	// 					jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"]
	// 				});
	// 				wx.ready(function() {
	// 					wx.onMenuShareTimeline({
	// 						title: l,
	// 						link: i,
	// 						imgUrl: m,
	// 						success: function() {
	// 							if (typeof j == "function") {
	// 								j()
	// 							}
	// 						},
	// 						cancel: function() {
	// 							if (typeof h == "function") {
	// 								h()
	// 							}
	// 						}
	// 					});
	// 					wx.onMenuShareAppMessage({
	// 						title: l,
	// 						desc: k,
	// 						link: i,
	// 						imgUrl: m,
	// 						type: "",
	// 						dataUrl: "",
	// 						success: function() {
	// 							if (typeof j == "function") {
	// 								j()
	// 							}
	// 						},
	// 						cancel: function() {
	// 							if (typeof h == "function") {
	// 								h()
	// 							}
	// 						}
	// 					});
	// 					wx.onMenuShareQQ({
	// 						title: l,
	// 						desc: k,
	// 						link: i,
	// 						imgUrl: m,
	// 						success: function() {
	// 							if (typeof j == "function") {
	// 								j()
	// 							}
	// 						},
	// 						cancel: function() {
	// 							if (typeof h == "function") {
	// 								h()
	// 							}
	// 						}
	// 					})
	// 				});
	// 				wx.error(function(q) {})
	// 			}
	// 		}, function() {})
	// 	})
	// };
	// return {
	// 	setWeiXinShareConfig: c
	// }
})();
var QDHISTORY = (function(a) {
	var c = "active";
	var b = {
		preload: [],
		range: {
			current: -1,
			min: 2002,
			max: 2016
		},
		eventAnimationEnd: (function() {
			self.isWebkit = "WebkitAppearance" in a.documentElement.style || typeof a.webkitHidden != "undefined";
			return ["animationend", "webkitAnimationEnd"][self.isWebkit * 1]
		})(),
		isMusic: true,
		time: 125,
		smoke: {
			count: 10,
			velocity: 2,
			fps: 20,
			url: "../images/2007-smoke-color.png"
		},
		svg: function(d, e) {
			if (typeof d == "undefined") {
				return
			}
			if (typeof d == "string") {
				d = [d]
			}
			if ([].forEach && d instanceof Array) {
				d.forEach(function(h) {
					var g = h.split("?")[1] || "_null",
						f = h.split("?")[0];
					var i = localStorage.getItem(f + "_v");
					if (i === g) {
						if (typeof e == "function") {
							e(localStorage.getItem(f) || "")
						} else {
							a.body.insertAdjacentHTML("afterBegin", localStorage.getItem(f) || "")
						}
					} else {
						var j = new XMLHttpRequest();
						j.open("GET", h, true);
						j.onload = function(k) {
							if (/svg/.test(j.responseText)) {
								if (typeof e == "function") {
									e(j.responseText)
								} else {
									a.body.insertAdjacentHTML("afterBegin", j.responseText)
								}
								localStorage.setItem(f + "_v", g);
								localStorage.setItem(f, j.responseText)
							}
						};
						j.send()
					}
				})
			}
		},
		pagePlay: function() {
			var e = this;
			if (e.timerPlay) {
				return this
			}
			var d = e.range;
			var h = e.el.oPage;
			if (!h) {
				h = {};
				for (var g = d.min; g <= d.max; g++) {
					h[g] = $("#hYear" + g)
				}
				e.el.oPage = h
			}
			var i = d.current,
				f = h[i];
			if (f) {
				i++
			} else {
				f = e.el.cover;
				i = d.min
			} if (i > d.max) {
				i = d.min
			}
			if (!h[i]) {
				return this
			}
			e.range.current = i;
			f.removeClass(c).hide();
			if (i == 2003 && e.eyeShapeAnimation && e.eyeShapeAnimation._curIconId == "shapeEye") {
				e.eyeShapeAnimation.to("shapeEyeCircle", {
					duration: 0
				})
			}
			h[i].show();
			e.timerPlay = setTimeout(function() {
				e.timerPlay = null;
				e.pagePlay()
			}, e.time);
			return this
		},
		pagePause: function() {
			clearTimeout(this.timerPlay);
			this.timerPlay = null;
			this.onPagePause();
			return this
		},
		onPagePause: function() {
			var o = this;
			var m = o.el.oPage;
			if (o.timerPlay || !m) {
				return this
			}
			var i = o.range;
			var j = i.current,
				n = m[j];
			if (n.css("display") !== "none") {
				a.body.offsetWidth;
				n.addClass("active")
			}
			var e = a.documentElement;
			e.removeAttribute("data-year");
			e.setAttribute("data-year", j);
			switch (j) {
				case 2002:
					var g = $("#shape2002")[0],
						k = $("#shape2002Ball");
					if (g && !g.isBindAnimation) {
						g.addEventListener(o.eventAnimationEnd, function(p) {
							if (!o.eyeShapeAnimation && window.SVGMorpheus) {
								o.eyeShapeAnimation = new SVGMorpheus(g, {}, function() {})
							}
							o.eyeShapeAnimation.to("shapeEye")
						});
						g.isBindAnimation = true
					}
					var l = n.find("img"),
						f = l.attr("data-src");
					if (f) {
						l.attr("src", f).removeAttr("data-src")
					}
					break;
				case 2007:
					o.drawSmoke();
					var h = n.find("img"),
						d = h.attr("data-src");
					if (d) {
						h.attr("src", d)
					}
					break;
				case 2013:
					o.waterWave();
					break;
				case 2014:
					o.clipPath($("#clip2014"));
					break
			}
			this.smileAnimation();
			return this
		},
		// share: function() {
		// 	try {
		// 		if (typeof QidianPlugin !== "undefined" && typeof QidianPlugin.GetVersionCode == "function") {
		// 			var i = "起点大事记 | 2002-2016";
		// 			var f = "2002年，起点中文网开创了网络文学的篇章。悠悠十四年，一起聊聊？";
		// 			var d = location.href;
		// 			var h = location.origin + "/ploy/20160515/qd/images/sharebigdate100.png";
		// 			if (QidianPlugin.GetVersionCode() < 200 && typeof QidianPlugin.showShareDialog == "function") {
		// 				QidianPlugin.showShareDialog(i, f, h, d)
		// 			} else {
		// 				if (QidianPlugin.GetVersionCode() >= 200 && typeof QidianPlugin.share == "function") {
		// 					QidianPlugin.share(i, f, d, h, 5)
		// 				} else {}
		// 			}
		// 		}
		// 	} catch (g) {}
		// 	return this
		// },
		smileAnimation: function() {
			if (!window.SVGMorpheus && this.intervalShare) {
				return this
			}
			var g = this.el.btnShare;
			if (g) {
				g.show()
			}
			var e = new SVGMorpheus("#shapeShare");
			var f = ["shapePoint", "shapeSmile"],
				d = false;
			this.intervalShare = setInterval(function() {
				d = !d;
				e.to(f[d * 1], {
					rotation: "none"
				})
			}, 6000)
		},
		musicPause: function() {
			var d = this;
			d.isMusic = false;
			var e = d.el.audioBg,
				f = e[0];
			if (f) {
				f.pause()
			}
		},
		musicPlay: function() {
			var d = this;
			d.isMusic = true;
			var e = d.el.audioBg,
				g = e[0];
			var f = this.el.btnAudio;
			if (g) {
				g.play();
				g.volume = 0.2;
				f.addClass(c)
			}
		},
		events: function() {
			var f = this;
			var d = this.el.btnGuide,
				j = d[0];
			if (d.length) {
				j.addEventListener("touchstart", function() {
					f.pagePlay();
					a.documentElement.removeAttribute("data-year");
					d.addClass(c);
					if (f.musicReadyPlay) {
						f.musicPlay();
						f.musicReadyPlay = false
					}
					if (f.preload && f.preload.length) {
						f.preload.forEach(function(m) {
							var l = new Image();
							l.src = m
						});
						f.preload = []
					}
				});
				a.addEventListener("touchstart", function(l) {
					l.preventDefault()
				});
				a.addEventListener("touchend", function(l) {
					if (f.timerPlay) {
						d.removeClass(c);
						f.pagePause()
					}
					if (f.el.android) {
						e.removeClass("blink")
					}
					l.preventDefault()
				})
			}
			var k = this.el.cover,
				h = k[0];
			if (k.length) {
				h.addEventListener(f.eventAnimationEnd, function(l) {
					if (l.animationName == "zoomFallDown") {
						k.removeClass("shake");
						h.offsetWidth;
						k.addClass("shake")
					}
				})
			}
			var e = f.el.android;
			if (e) {
				e[0].addEventListener("touchstart", function() {
					e.addClass("blink")
				})
			}
			var g = this.el.btnShare;
			if (g) {
				g.on("touchstart", function() {
					f.share()
				})
			}
			var i = this.el.btnAudio;
			if (i && i.length) {
				i.on("touchstart", function() {
					if (f.isMusic) {
						i.removeClass(c);
						f.musicPause()
					} else {
						i.addClass(c);
						f.musicPlay()
					}
				});
				f.el.audioBg.attr("preload", "auto")
			}
			a.addEventListener("touchmove", function(l) {
				l.preventDefault()
			})
		},
		drawSmoke: function() {
			var k = this;
			if (k.el.canvasSmoke) {
				return this
			}
			var u = [];
			var q = k.smoke.count;
			var n = k.smoke.velocity;
			var p = k.smoke.fps;
			if (!k.el.canvasSmoke) {
				var r = $("#hSmoke").html("<canvas></canvas>");
				k.el.canvasSmoke = r.find("canvas")
			}
			var d = k.el.canvasSmoke,
				l = d[0];
			if (!l) {
				return this
			}
			var t = d.width();
			var e = d.height();
			var g = new Image();
			g.onload = function() {
				u.forEach(function(v) {
					v.setImage(g)
				})
			};
			g.src = k.smoke.url;

			function s(v) {
				this.x = 0;
				this.y = 0;
				this.xVelocity = 0;
				this.yVelocity = 0;
				this.radius = 2;
				this.context = v;
				this.draw = function() {
					if (this.image) {
						this.context.globalAlpha = this.alpha;
						this.context.drawImage(this.image, this.x - this.imageWidth, this.y - this.imageWidth, t, e / 4);
						return
					}
				};
				this.update = function() {
					this.x += this.xVelocity;
					this.y += this.yVelocity;
					if (this.x >= t) {
						this.xVelocity = -this.xVelocity;
						this.x = t
					} else {
						if (this.x <= 0) {
							this.xVelocity = -this.xVelocity;
							this.x = 0
						}
					} if (this.y >= e) {
						this.yVelocity = -this.yVelocity;
						this.y = e
					} else {
						if (this.y <= 0) {
							this.yVelocity = -this.yVelocity;
							this.y = 0
						}
					}
					this.alpha = (1 - Math.abs(t * 0.5 - this.x) / t) * (0.7 - Math.abs(e * 0.5 - this.y) / e)
				};
				this.setPosition = function(w, z) {
					this.x = w;
					this.y = z
				};
				this.setVelocity = function(w, z) {
					this.xVelocity = w;
					this.yVelocity = z
				};
				this.setImage = function(w) {
					this.imageWidth = w.width;
					this.imageHeight = w.height;
					this.image = w
				}
			}

			function m(w, v) {
				return Math.random() * (v - w) + w
			}
			var f;

			function o() {
				var v = l;
				if (v.getContext) {
					f = v.getContext("2d");
					for (var w = 0; w < q; ++w) {
						var x = new s(f);
						x.setPosition(m(0, t), m(0, e));
						x.setVelocity(m(-n, n), m(-n, n) * (e / t));
						u.push(x)
					}
				}
			}

			function i() {
				f.clearRect(0, 0, t, e);
				u.forEach(function(v) {
					v.draw()
				})
			}

			function h() {
				u.forEach(function(v) {
					v.update()
				})
			}
			o();
			if (f) {
				var j = $("#hYear2007");
				setInterval(function() {
					if (j.hasClass(c)) {
						h();
						i()
					}
				}, 1000 / p)
			}
		},
		waterWave: function() {
			var f = this;
			if (!window.SVGMorpheus && this.intervalWater) {
				return this
			}
			if (!f.SVGM_waveG) {
				var k = a.querySelector("#wave2013G");
				f.SVGM_waveG = new SVGMorpheus(k)
			}
			if (!f.SVGM_waveB) {
				var e = a.querySelector("#wave2013B");
				f.SVGM_waveB = new SVGMorpheus(e)
			}
			var d = $("#hYear2013");
			var i = function() {
				if (d.hasClass(c)) {
					f.SVGM_waveG.to("wave2013G1", {
						rotation: "none",
						duration: 2000 + Math.random() * 1000
					}, g)
				} else {
					f.intervalWater = false
				}
			}, g = function() {
					if (d.hasClass(c)) {
						f.SVGM_waveG.to("wave2013G2", {
							rotation: "none",
							duration: 2000 + Math.random() * 1000
						}, i)
					} else {
						f.intervalWater = false
					}
				};
			var j = function() {
				if (d.hasClass(c)) {
					f.SVGM_waveB.to("wave2013B1", {
						rotation: "none",
						duration: 2000 + Math.random() * 1000
					}, h)
				} else {
					f.intervalWater = false
				}
			}, h = function() {
					if (d.hasClass(c)) {
						f.SVGM_waveB.to("wave2013B2", {
							rotation: "none",
							duration: 2000 + Math.random() * 1000
						}, j)
					} else {
						f.intervalWater = false
					}
				};
			j();
			i();
			this.intervalWater = true;
			return this
		},
		clipPath: function(g) {
			if (!g || !g.length) {
				return this
			}
			g.removeAttr("id");
			var h = {
				height: g.height(),
				width: g.width(),
				distance: 50,
				html: g[0].outerHTML
			};
			if (window.getComputedStyle(a.body).webkitClipPath) {
				var d = h.distance,
					f = h.width,
					l = h.height;
				var i = Math.ceil(f / d) * 2;
				var j = "",
					k = 0;
				var e = function() {
					var p = k % 4,
						r = Math.floor(k / 4) + 1;
					var s = (r - 1) * d * 2;
					var v = [
						[
							[s, 0],
							[s, l],
							[s + d, l * 0.5]
						],
						[
							[s, 0],
							[s + d * 2, 0],
							[s + d, l * 0.5]
						],
						[
							[s + d, l * 0.5],
							[s + d * 2, 0],
							[s + d * 2, l]
						],
						[
							[s, l],
							[s + d * 2, l],
							[s + d, l * 0.5]
						]
					];
					var u = v[p];
					var x = u.map(function(z) {
						return z.map(function(A) {
							return A + "px"
						}).join(" ")
					}).join();
					var q = "-webkit-clip-path: polygon(" + x + ");";
					var w = Math.random();
					var o = (w < 0.5) ? -1 : 1;
					var y = [
						[o * (200 + Math.round(500 * w)), -1 * (500 + Math.round(300 * w))],
						[o * (100 + Math.round(500 * w)), -1 * (400 + Math.round(600 * w))],
						[o * (50 + Math.round(500 * w)), -1 * (500 + Math.round(300 * w))],
						[o * (100 + Math.round(400 * w)), 1 * (500 + Math.round(700 * w))]
					];
					var t = y[p];
					var n = "translate(" + t.map(function(z) {
						return z + "px"
					}).join() + ") rotate(" + Math.round(o * 360 * Math.random()) + "deg)";
					var m = "-webkit-transform:" + n + ";transform:" + n + ";";
					j = j + h.html.replace('">', '" style="' + q + m + '">');
					k = k + 1;
					if (k <= i) {
						e()
					}
				};
				e();
				g.parent().html(h.html + j)
			} else {
				g.addClass("no-clipath")
			}
		},
		lock: function() {
			if ("onorientationchange" in window) {
				$(window).bind("orientationchange", function() {
					setTimeout(function() {
						var e = window.innerWidth,
							d = window.innerHeight;
						if (d > e) {
							$(a.body).removeClass("portrait")
						} else {
							$(a.body).addClass("portrait")
						}
					}, 30)
				}).trigger("orientationchange")
			}
			return this
		},
		loading: function(f, h) {
			var d = this;
			var g = $("#hLoadBar"),
				e = $("#hLoadP");
			$(window).on("load", function() {
				if (d.isLoaded == "failed") {
					return false
				}
				e.parent().addClass("finish");
				d.isLoaded = true;
				setTimeout(function() {
					e.parent().hide();
					d.el.cover.show().addClass("active");
					d.el.btnGuide.css("opacity", 1);
					d.musicReadyPlay = true
				}, 110)
			});
			setTimeout(function() {
				if (!d.isLoaded) {
					e.html("still loading")
				}
			}, 18000);
			setTimeout(function() {
				if (!d.isLoaded) {
					e.html('网速慢，<a href="">刷新</a>重试');
					g.css("visibility", "hidden");
					d.isLoaded = "failed"
				}
			}, 30000);
			return this
		},
		init: function() {
			this.el = {
				cover: $("#hCover"),
				btnAudio: $("#hAudioToggle"),
				audioBg: $("#hAudioBg"),
				btnGuide: $("#hTouchGuide"),
				btnShare: $("#hShare"),
				android: $("#hAndroid")
			};
			this.loading().events();
			this.lock();
			return this
		}
	};
	return b
})(document);