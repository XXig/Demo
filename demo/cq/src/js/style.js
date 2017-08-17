	document.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);
	document.querySelector(".main").addEventListener("touchmove",function(a){a.stopPropagation()},!1);
	var _ckprice= [
	{
		name: '拟安置房收购价格',
		price: '14200',
	},
	{
		name: '合法房屋与安置房等面积价格',
		price: '2850',
	},
	{
		name: '0.25系数面积价格',
		price: '3800',
	},
	{
		name: '一赠三、人均面积超出产权部分价格',
		price: '5130',
	},
	{
		name: '户增购的30㎡内价格',
		price: '7100',
	},
	{
		name: '户增购的20㎡内价格',
		price: '8520',
	} 
	];
	Vue.component('my-tip', {
		data:function(){
			return {
				baseprice:_ckprice
			}
		},
		template: '<h4>参考价格：</h4><li v-for="base in baseprice">{{base.name}}：<span>{{base.price}}元/㎡</span></li>'
	})
	// 底薪+提成+奖金
	// 1800+
	// 商报0.14
	// 都市报0.12
	// 日报0.1
	// 总共业绩大于2万，奖金200
	// 2万5，500
	// 3万，800
	// 4万，1100

	var vm = new Vue({
		el: '#app',
		data: {
			yes:true,
			no:false,
			fwlx:'15',
			fwlxoptions: [
			{id:'0', text: '住宅用房', value: '15' },
			{id:'1', text: '商业用房', value: '40' },
			{id:'2', text: '办公用房', value: '15' },
			{id:'3', text: '其他用房', value: '15' }
			],
			fwlxtext:'',
			hfarea:'',
			mannum:'',
			czprice: '砖混结构1300元/㎡',
			zgcarea:'0',
			zgprice:'0',
			cqf:'0',
			myazf:'0',
			xsprice:'0',
			jlprice:'0',
			oneallarea:'0',
			onejnprice:'0',
			twoallarea:'0',
			twojnprice:'0',
			threeallarea:'0',
			threejnprice:'0'
		},
		ready: function () { 
			document.querySelector(".load").style.display="none";
			document.querySelector(".wrap").style.opacity="1";
		},
		methods:{
			alerttxt:function(t){
				var _alert=document.querySelector(".alert"),
				click=!0;
				if (click) {
					click=!1;
					_alert.style.display="block";
					_alert.innerHTML=t;
					setTimeout(function(){
						click=!0;
						_alert.style.display="none";
					},1300)
				}
			},
			btn:function(){
				var ua=navigator.userAgent.toLowerCase();
				if ("micromessenger"!=ua.match(/MicroMessenger/i)) return this.alerttxt("请在微信中操作！！！"),!1;
				if (this.hfarea==""||this.mannum==""||this.hfarea=="0"||this.mannum=="0") return this.alerttxt("请输入数据"),!1;
				var _btn=document.querySelector(".btn-calculate");
				if (this.no==!1) {
					var _this=this;
					_btn.innerHTML="计算中...",_btn.style.opacity=".5";
					setTimeout(function(){
						_btn.innerHTML="重新计算",_btn.style.opacity="1";
						_this.no=!0,_this.yes=!1;
					},100)
					switch(!0) {
						case this.hfarea>0&&this.hfarea<100:
						this.cqf=1000;
						break;
						case this.hfarea>=100&&this.hfarea<200:
						this.cqf=1200;
						break;
						case this.hfarea>=200:
						this.cqf=1500;
						break;
						default: 
						this.cqf=0;
						break; 
					}
					var _fw = document.getElementById("fw");
					var _sy = _fw.selectedIndex;
					this.fwlxtext=_fw.options[_sy].text,
					this.myazf=this.hfarea*15;
					this.xsprice=this.hfarea*0.25*3800;
					this.zgprice=this.zgcarea*5130;
					var _czprice=this.czprice.replace(/[^0-9]/ig,"");
					this.jlprice=this.hfarea*(1300 + parseInt(_czprice));
					this.oneallarea=this.hfarea*1.25+50+this.zgcarea;
					this.onejnprice=this.hfarea*2850+this.xsprice+(this.oneallarea-this.hfarea)*5130+this.zgprice+383400-this.jlprice;
					this.twoallarea=this.hfarea*3*1.25+50+this.zgcarea;
					this.twojnprice=this.hfarea*2850+this.xsprice+(this.twoallarea-this.hfarea)*5130+this.zgprice+383400-this.jlprice;
					this.threeallarea=this.mannum*30+50+this.zgcarea;
					this.threejnprice=this.hfarea*2850+this.xsprice+(this.threeallarea-this.hfarea)*5130+this.zgprice+383400-this.jlprice;
				}
				else{
					_btn.innerHTML="立即计算";
					_fw.selectedIndex = 0;
					this.yes=!0;
					this.no=!1;
					this.fwlxtext='',
					this.hfarea='',
					this.mannum='',
					this.zgcarea='',
					this.czprice= '砖混结构1300元/㎡'
				}
			}
		}
	})