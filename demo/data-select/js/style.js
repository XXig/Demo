// ！！-Vue 首字母大写-！！

// 组件先定义
Vue.component('tablelist',{
	template:'#tp-list',
	props:['listdata','bool','tit']
});
// 再new Vue
var vm = new Vue({
	el: '#app',
	data: {
		yes:true,
		no:false,
		base: {data:''},
		compare: {data:''},
		basedata: [],
		comparedata: [],
		resultdata: []
	},
	methods:{
		alerttxt:function(t,h){
			var _alert=document.querySelector(".alert"),
			click=!0;
			if (click) {
				click=!1;
				_alert.style.display="block";
				_alert.innerHTML=t;
				if (h) return _alert.style.animation="none",!1;
				setTimeout(function(){
					click=!0;
					_alert.style.display="none";
				},450)
			}
		},
		createcomparedata:function(){
			if (!this.base.data||!this.compare.data) return this.alerttxt("请输入数据"),!1;
			var strbase= this.base.data;
			strbase= strbase.split(' ');
			this.basedata=strbase;
			this.base = {};

			var strcompare = this.compare.data;
			strcompare = strcompare.split(' ');
			this.comparedata=strcompare;
			this.compare = {};

			this.alerttxt("筛选中，请等待...",1);

			var basestring = this.basedata;
			var comparestring = this.comparedata;
			var resultstring=[];
			for(var s in basestring){
				for(var x in comparestring){
					if(basestring[s].indexOf(comparestring[x])>-1){}
						else{
							resultstring.push(basestring[s]);
						}
					}
				}
				this.resultdata=resultstring;
				console.log(resultstring.toString());
				if (resultstring) {
					this.alerttxt("筛选成功"),this.no=!1,this.yes=!1;
				} 
				else{
					this.alerttxt("筛选失败，请刷新重试")
				}
				document.querySelector('.data-box').scrollTop=0;
				document.querySelector('.result-box').scrollTop=0;
			},
			keycode: function (ev) {             
				if(ev.keyCode==13) return this.createcomparedata()                      
			} 
	}
})