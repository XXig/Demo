// contract_number =>合同编号
// bp_name =>承租人
// pmt =>每期还款金额

// var url="http://ls.cf-finance.com/hlsprod/autocrud/cont.CON500.con_contract_v/query?pagesize=1&pagenum=1&_fetchall=false&_autocount=true";

function alerttxt(t,showhide){
	this._t     =t;
	this.showhide =showhide;
	this.bind();
}
alerttxt.prototype = {
	// onshow:function(){
	// },
	// onhide:function(){
	// },
	bind:function(){
		var me=this,
		txt=this._t?this._t:"加载中...",
		_alert=document.querySelector(".alert");
		_alert.innerHTML=txt;
		if (this.showhide) {
			_alert.style.display="block";
			setTimeout(function(){
				_alert.style.display="none";
			},1000)
		}
	}
};
new alerttxt('',false)
$(function(){
	new alerttxt('加载成功',true)
})

var i, data=a.result.record;
for (i in data) {
	var num=data[i].contract_number,
	man=data[i].bp_name,
	price=data[i].pmt;
	var price=price ? price : '<span>无数据</span>',
	str = ''; 
	str+="<tr><td>" + num + "</td><td>" + man + "</td><td>" + price + "</td></tr>" ;
	$('#data').append(str);
}
// for (var i = 0; i < data.length; i++) {
// 	var num=data[i].contract_number,
// 	man=data[i].contract_name,
// 	price=data[i].pmt;
// 	var price=price ? price : '<span>无数据</span>',
// 	str = ''; 
// 	str+="<tr><td>" + num + "</td><td>" + man + "</td><td>" + price + "</td></tr>" ;
// 	$('#data').append(str);
// }
var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
//获取相关CSS属性
var getCss = function(o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};

//拖拽的实现
var startDrag = function(bar, target, callback){
	if(getCss(target, "left") !== "auto"){
		params.left = getCss(target, "left");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}
	//o是移动对象
	bar.onmousedown = function(event){
		params.flag = true;
		if(!event){
			event = window.event;
			//防止IE文字选中
			bar.onselectstart = function(){
				return false;
			}  
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
	};
	document.onmouseup = function(){
		params.flag = false;	
		if(getCss(target, "left") !== "auto"){
			params.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			params.top = getCss(target, "top");
		}
	};
	document.onmousemove = function(event){
		var e = event ? event: window.event;
		if(params.flag){
			var nowX = e.clientX, nowY = e.clientY;
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";
			if (event.preventDefault) {
				event.preventDefault();
			}
			return false;
		}
		if (typeof callback == "function") {
			callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
		}
	}	
};
var btn = document.getElementById('btn'),
btncopy = document.getElementById('btn-copy'),
btnmove = document.getElementById('btn-move');
startDrag(btnmove, btn);
var click=!0;
$('.btn-tit').on('click',function(){
	if (click) {
		click=!1;
		$(this).addClass("on")
		$('.tit').hide()
		new alerttxt('不复制标题',true)
	}
	else
	{
		click=!0;
		$(this).removeClass("on")
		$('.tit').show()
		new alerttxt('复制标题',true)
	}
})
btncopy.addEventListener('click', function(){
	document.execCommand("selectAll")
	document.execCommand('copy', true)
	new alerttxt('复制成功',true)
});