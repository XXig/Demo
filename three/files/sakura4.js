$(function() {
	// 获取窗口信息
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	// 1、初始化场景
	var camera, scene, renderer;
	function initStage() {
		// fov:相机可视角度，可选参数，默认50，人类正常视角120度（能看到最上面和最下面的角度）
		// aspect:相机可视范围的长宽比，可选参数，默认1
		// near:相机对于深度剪切面的近的距离，必须为正数，可选参数，默认0.1（能看到物体最近的距离）
		// far:相机对于深度剪切面的远的距离，必须为正数，可选参数，
		// 默认2000
		camera = new THREE.PerspectiveCamera(120, viewportWidth / viewportHeight, 1, 5000);
		// 初始化scene场景对象
		scene = new THREE.Scene;
		// 初始化renderer渲染器对象
		renderer = new THREE.WebGLRenderer({
			canvas: document.getElementById("stage"),
			antialias: false,//抗锯齿（设为0，性能消耗小）
			alpha: true//背景透明
		});
		if (!renderer) {
			alert("Your brower not support Webgl")
		}
		//背景色
		renderer.setClearColor("#000", 0);
		//设置屏幕的像素比
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(viewportWidth, viewportHeight)
	}
	initStage();
	// 2、加载外部资源
	var materials = [{
		// 定义物体在场景中的大小位置信息
		x: 480,y: 1700,z: -1e3,scale: 4.2,w: 819,h: 394,rx: 0,ry: 0,
		// 图片地址
		img: "p2_r.png"
		// x,y,z分别表示图片在场景中的位置，scale代表图片在场景中的缩放，w，h表示图片的宽度和高度，rx，ry表示图片的x轴旋转和y轴旋转，img是图片的地址，这里也可以写成网络地址。
	},
	{
		x: 920,y: 800,z: -1200,scale: 3.9,w: 350,h: 298,rx: 0,ry: 30,img: "p2_car1.png"
	},
	{
		x: -40,y: 750,z: -900,scale: 3.9,w: 229,h: 386,rx: 0,ry: -10,img: "p2_car0.png"
	},
	{
		x: -180,y: -730,z: -700,scale: 3.5,w: 555,h: 397,rx: 0,ry: 0,img: "p2_t7.png"
	},
	{
		x: 1550,y: -2e3,z: -1500,scale: 5.5,w: 493,h: 328,rx: 0,ry: 0,img: "p2_t5.png"
	},
	{
		x: 1550,y: -270,z: -1e3,scale: 4,w: 352,h: 265,rx: 0,ry: 0,img: "p2_t4.png"
	},
	{
		x: 120,y: 310,z: 50,scale: .88,w: 384,h: 271,rx: 0,ry: 0,img: "p2_t6.png"
	},
	{
		x: 650,y: -370,z: -400,scale: 2.4,w: 690,h: 270,rx: 0,ry: 0,img: "p2_t2.png"
	},
	{
		x: 780,y: 460,z: -200,scale: 1.72,w: 359,h: 251,rx: 0,ry: 0,img: "p2_t1.png"
	},
	{
		x: -90,y: 535,z: -70,scale: 1.2,w: 382,h: 276,rx: 0,ry: 0,img: "p2_t3.png"
	},
	{
		x: 595,y: 755,z: 0,scale: 1,w: 415,h: 358,rx: 0,ry: 0,img: "p2_t0.png"
	}];
	var loader = new THREE.TextureLoader;
	// 3、通过TextureLoader类中的load方法加载资源
	function addToStage(data) {
		// 传入图片地址（可以是网络地址）
		loader.load("img/" + data.img,
			// 加载成功后的回调函数->将资源转换成3D物体
			function(texture) {
				// material材质（3D物体就好比被罩，花被罩那就是花被子，绿被罩就是绿被子，决定物体表面颜色和花色）
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					transparent: true,
					side: THREE.DoubleSide
				});
				// mesh网格（3D物体就好比被芯，长方形背心那就是长方形，正方形就是正方形，决定物体的形状）
				var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(data.w, data.h, 1, 1), material);
				// 3D物体的基本组成部分，material材质和mesh网格。
				// 将资源显示在场景中
				// 物体的坐标：x，y，z
				mesh.position.set(data.x - viewportWidth * .5, viewportHeight * .5 - data.y + 70, data.z);
				// 物体的旋转：把角度转换为弧度*π再除以180
				mesh.rotation.x = data.rx * Math.PI / 180;
				mesh.rotation.y = data.ry * Math.PI / 180;
				// 物体的缩放：x，y，z三轴的缩放
				var _scale = data.scale;
				mesh.scale.set(_scale, _scale, _scale);
				// 将物体加入3D场景中去
				scene.add(mesh)
			})
	}
	for (var i = 0; i < materials.length; i++) {
		addToStage(materials[i])
	}
	// 4、开始场景渲染（负责把场景中的元素显示出来）
	var angle = 90;// 相机初始化角度，相机面对屏幕方向
	function onTick() {
		// 5.1、移动相机的角度来产生3D效果
		var theta = THREE.Math.degToRad(angle);
		// camera.position.x = 320 * Math.cos(theta)
		// theta相机角度
		// 320相机于聚焦点的半径距离
		// 半径*cos(theta)=x轴的坐标
		// x轴的坐标/320=cos(theta)
		// 邻边/斜边=cos(theta)
		camera.position.x -= (camera.position.x - 320 * Math.cos(theta)) / 7;//x轴坐标缓动算法
		camera.position.y = 46;//y轴坐标写死
		// camera.position.z = 320 * Math.sin(theta)
		// 半径*sin(theta)=z轴的坐标
		// z轴的坐标/320=sin(theta)
		// 对边/斜边=sin(theta)
		camera.position.z -= (camera.position.z - 320 * Math.sin(theta)) / 7;//z轴坐标缓动算法
		// 物体绕x轴旋转的弧度，绕y轴旋转的弧度，绕z轴旋转的弧度
		camera.lookAt(new THREE.Vector3(0, 0, -1200));
		// 开始渲染，传入scene, camera两个对象
		renderer.render(scene, camera);
		// 每隔一个时钟周期就调用本函数，渲染器不停渲染，后续改变或加入物体就不用再去渲染了
		requestAnimationFrame(onTick)
	}
	onTick();
	// 5、添加交互（移动相机，产生3D效果）
	function addInteractEvent() {
		var downX, downLon;
		function handleDown(event) {
			event = event.originalEvent;
			// 触摸事件开始时记录坐标
			downX = event.touches[0].pageX;
			downLon = angle;
			$(document).on("touchmove", handleMove);
			$(document).on("touchend", handleUp)
		}
		function handleMove(event) {
			event = event.originalEvent;
			// 触摸事件移动时通过记录位移来计算镜头的角度
			var delta = event.touches[0].pageX - downX;
			angle = delta * .2 + downLon;//换算成角度的简单算法
			angle = Math.max(angle, 45);//设置最大角度（大于45度）
			angle = Math.min(angle, 135);//设置最小角度（小于135度）
			// 最大135度，最小45度
			event.preventDefault()
		}
		function handleUp(event) {
			// 触摸结束时关闭绑定事件
			$(document).off("touchmove", handleMove);
			$(document).off("touchend", handleUp)
		}
		$(document).on("touchstart", handleDown)
	}
	addInteractEvent()
});