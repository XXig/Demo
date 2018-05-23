function alerttxt(t,showhide){
	this._t     =t;
	this.showhide =showhide;
	this.bind();
};
alerttxt.prototype = {
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
var click=!0;
$('#btn-tit').on('click',function(){
	if (click) {
		click=!1;
		$(this).addClass("on").text('显示标题').attr("title","复制标题")
		$('.tit').hide()
		new alerttxt('不复制标题',true)
		return localStorage.fz='bfz';
	}
	else
	{
		click=!0;
		$(this).removeClass("on").text('去除标题').attr("title","不复制标题")
		$('.tit').show()
		new alerttxt('复制标题',true)
		return 	localStorage.removeItem("fz");
	}
})
var datasele;
if (xjl) {
	datasele='xjl';
}
else if (dbr) {
	datasele='dbr';
}
else if (kp) {
	datasele='kp';
}
else{
	datasele=!1;
}
$(function(){
	if (localStorage.fz) {
		click=!1;
		$('#btn-tit').addClass("on").text('显示标题').attr("title","复制标题")
		$('.tit').hide()
	}
	if (!datasele) {
		new alerttxt('data数据错误，请联系XXig')
	}
	else{
		new alerttxt('加载成功',true),
		$('.btn').css('opacity','1')
	}
})
switch(datasele) {
	case 'xjl':
	datashow('xjl');
	var data=xjl.result.record;
	for (var i = 0; i < data.length; i++) {
		var num=data[i].contract_number,
		man=data[i].bp_name,
		price=data[i].pmt,
		price=price ? price : '<span>无数据</span>',
		str = ''; 
		str+="<tr><td width='150px'>" + num + "</td><td width='400px'>" + man + "</td><td width='250px'>" + price + "</td></tr>" ;
		$('#xjl').append(str);
	}
	break;
	case 'dbr':
	datashow('dbr');
	var data=dbr.result.record;
	for (var i = 0; i < data.length; i++) {
		var name=data[i].bp_name,
		numbb=data[i].last_contract_number;
		numbb=numbb ? numbb : '<span>无数据</span>',
		str = ''; 
		str+="<tr><td width='50%'>" + name + "</td><td width='50%'>" + numbb + "</td></tr>";
		$('#dbr').append(str);
	}  
	break;
	case 'kp':
	datashow('kp');
	var data=kp.result.record;
	for (var i = 0; i < data.length; i++) {
		var num=data[i].contract_number,
		kpgz=data[i].billing_method_desc,
		kpname=data[i].billing_object_name,
		fptt=data[i].invoice_title,
		nsrnum=data[i].object_tax_registry_num,
		email=data[i].email,
		empemail=data[i].emp_email;
		fptt=fptt ? fptt : '<span>无数据</span>';
		nsrnum=nsrnum ? nsrnum : '<span>无数据</span>';
		email=email ? email : '<span>无数据</span>';
		empemail=empemail ? empemail : '<span>无数据</span>';
		str = ''; 
		str+="<tr><td width='150px'>" + num + "</td><td>" + kpgz + "</td><td width='300px'>" + kpname + "</td><td width='300px'>" + fptt + "</td><td>" + nsrnum + "</td><td>" + email + "</td><td>" + empemail + "</td></tr>";
		$('#kp').append(str);
	}  
	break;
}
$('table').on("click",function(){
	document.execCommand("selectAll")
	document.execCommand('copy', true)
	new alerttxt('复制成功',true)
})
function datashow(a){
	$('#'+a).show().find('.tit').show();
	if ($('.btn-tit').hasClass('on')) {
		$('#'+a).find('.tit').hide();
	}
}

// contract_number =>合同编号
// bp_name =>承租人
// pmt =>每期还款金额

// var url="http://ls.cf-finance.com/hlsprod/autocrud/cont.CON500.con_contract_v/query?pagesize=1&pagenum=1&_fetchall=false&_autocount=true";

// 商业伙伴名称 =>bp_name
// 合同号 =>last_contract_number
// "bp_type" =>"GUTA_NP",
// "bp_type_desc" =>"自然人保证",
// http://ls.cf-finance.com/hlsprod/autocrud/hls.HLS212.hls_bp_master_all_data_v/query?pagesize=1&pagenum=1&_fetchall=false&_autocount=true