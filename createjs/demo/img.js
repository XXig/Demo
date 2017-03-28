(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bgtop_01 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgtop_02 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bgtop_03 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bgtop_04 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bgtop_05 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._img = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["img_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.view3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		if(model) model.dispatchEvent('complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// 图层 1
	this.instance = new lib.bgtop_01();

	this.instance_1 = new lib.bgtop_02();

	this.instance_2 = new lib.bgtop_03();

	this.instance_3 = new lib.bgtop_04();

	this.instance_4 = new lib.bgtop_05();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,630);


(lib.phone2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._img();
	this.instance.setTransform(0,0,0.58,0.577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,381.9,283.9);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658,492);


(lib.font = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658,658);


(lib.view2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		if(model) model.dispatchEvent('complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// 图层 2
	this.instance = new lib.font();
	this.instance.setTransform(936.2,-244,1,1,0,0,0,329,329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:901.9,y:-200.5},0).wait(1).to({x:867.5,y:-157},0).wait(1).to({x:833.2,y:-113.6},0).wait(1).to({x:798.8,y:-70.1},0).wait(1).to({x:764.5,y:-26.6},0).wait(1).to({x:730.1,y:16.9},0).wait(1).to({x:695.8,y:60.3},0).wait(1).to({x:661.4,y:103.8},0).wait(1).to({x:627.1,y:147.3},0).wait(1).to({x:592.7,y:190.8},0).wait(1).to({x:558.4,y:234.2},0).wait(1).to({x:524,y:277.7},0).wait(1).to({x:489.7,y:321.2},0).wait(1).to({x:455.3,y:364.6},0).wait(1).to({x:421,y:408.1},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.phone2();
	this.instance_1.setTransform(391.1,1064.1,1,1,0,0,0,191,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07,x:390,y:1054.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:389,y:1045.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:387.9,y:1036.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:386.9,y:1027.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:385.9,y:1018.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:384.8,y:1009},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:383.8,y:999.8},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:382.7,y:990.6},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:381.7,y:981.5},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:380.6,y:972.3},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:379.6,y:963.1},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:378.6,y:953.9},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:377.5,y:944.7},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:376.5,y:935.5},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:375.5,y:926.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.1,-573,1065.2,1779.1);


(lib.view1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
		if(model) model.dispatchEvent('complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// 图层 1
	this.instance = new lib.phone();
	this.instance.setTransform(329,1560.2,1,1,0,0,0,329,246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1523.6},0).wait(1).to({y:1487.1},0).wait(1).to({y:1450.5},0).wait(1).to({y:1414},0).wait(1).to({y:1377.5},0).wait(1).to({y:1340.9},0).wait(1).to({y:1304.4},0).wait(1).to({y:1267.8},0).wait(1).to({y:1231.3},0).wait(1).to({y:1194.8},0).wait(1).to({y:1158.2},0).wait(1).to({y:1121.7},0).wait(1).to({y:1085.1},0).wait(1).to({y:1048.6},0).wait(1).to({y:1012.1},0).wait(9));

	// 图层 2
	this.instance_1 = new lib.font();
	this.instance_1.setTransform(-259.1,462.1,1,1,0,0,0,329,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-214.8},0).wait(1).to({x:-170.5},0).wait(1).to({x:-126.2},0).wait(1).to({x:-81.9},0).wait(1).to({x:-37.6},0).wait(1).to({x:6.7},0).wait(1).to({x:51},0).wait(1).to({x:95.3},0).wait(1).to({x:139.6},0).wait(1).to({x:183.9},0).wait(1).to({x:228.2},0).wait(1).to({x:272.5},0).wait(1).to({x:316.8},0).wait(1).to({x:361},0).wait(10));

	// 图层 3
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(0,-251.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.1,-251.8,1246.2,2058);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.view1();
	this.instance.setTransform(126.9,678.4,1,1,0,0,0,34.9,777.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib.view2();
	this.instance_1.setTransform(623.7,572.8,1,1,0,0,0,732.6,316.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 2
	this.instance_2 = new lib.view3();
	this.instance_2.setTransform(375,315,1,1,0,0,0,375,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,252.5,1652.5,2058);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;