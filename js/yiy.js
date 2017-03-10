var rootPath = getRootPath();
var loadImgsArr=[
    //将需要loading的图片放到此数组
    rootPath+'/res/img/p2_animes/home_0000.png',
    rootPath+'/res/img/p2_animes/home_0001.png',
    rootPath+'/res/img/p2_animes/home_0002.png',
    rootPath+'/res/img/p2_animes/home_0003.png',
    rootPath+'/res/img/p2_animes/home_0004.png',
    rootPath+'/res/img/p2_animes/home_0005.png',
    rootPath+'/res/img/p2_animes/home_0006.png',
    rootPath+'/res/img/p2_animes/home_0007.png',
    rootPath+'/res/img/p2_animes/home_0008.png',
    rootPath+'/res/img/p2_animes/home_0009.png',
    rootPath+'/res/img/p2_animes/home_00010.png',
    rootPath+'/res/img/p2_animes/home_00011.png',
    rootPath+'/res/img/p2_animes/home_00012.png',
    rootPath+'/res/img/p2_animes/home_00013.png',
    rootPath+'/res/img/p2_animes/home_00014.png',
    rootPath+'/res/img/p2_animes/home_00015.png',
    rootPath+'/res/img/p2_animes/home_00016.png',
    rootPath+'/res/img/p2_animes/home_00017.png',
    rootPath+'/res/img/p2_animes/home_00018.png',
    rootPath+'/res/img/p2_animes/home_00019.png',
    rootPath+'/res/img/p2_animes/home_00020.png',
    rootPath+'/res/img/p2_animes/home_00021.png',
    rootPath+'/res/img/p2_animes/home_00022.png',
    rootPath+'/res/img/p2_animes/home_00023.png',
    rootPath+'/res/img/p2_animes/home_00024.png',
    rootPath+'/res/img/p2_animes/home_00025.png',
    rootPath+'/res/img/p2_animes/home_00026.png',
    rootPath+'/res/img/p2_animes/home_00027.png',
    rootPath+'/res/img/p2_animes/home_00028.png',
    rootPath+'/res/img/p2_animes/home_00029.png',
    rootPath+'/res/img/p2_animes/home_00030.png',
    rootPath+'/res/img/p2_animes/home_00031.png',
    rootPath+'/res/img/p2_animes/home_00032.png',
    rootPath+'/res/img/p2_animes/home_00033.png',
    rootPath+'/res/img/p2_animes/home_00034.png',
    rootPath+'/res/img/p2_animes/home_00035.png',
    rootPath+'/res/img/p2_animes/home_00036.png',
    rootPath+'/res/img/p2_animes/home_00037.png',
    rootPath+'/res/img/p2_animes/home_00038.png',
    rootPath+'/res/img/p2_animes/home_00039.png',
    rootPath+'/res/img/p2_animes/home_00040.png',

    rootPath+'/res/img/p1_b.png',
    rootPath+'/res/img/p1_con.png',
    rootPath+'/res/img/p1_layer.png',
    rootPath+'/res/img/p2c_bg.png',
    rootPath+'/res/img/p3_sz.png',
    rootPath+'/res/img/p3_word.png',
    rootPath+'/res/img/p3r_bg.png',
    rootPath+'/res/img/sta1_word.png',
    rootPath+'/res/img/sta2_word.png',
    rootPath+'/res/img/p4_cf.png',
    rootPath+'/res/img/tkl_p1.png',
    rootPath+'/res/img/share.png'

    ];

//图片预加载
function netease_loadimg(imgs,callback){
  if(!imgs){return false};
  var img=[];
  var len=imgs.length;
  var loadedCount = 0;
  for(var i=0;i<len;i++){
    img[i]=new Image();
    img[i].src=imgs[i];
    img[i].onload = function(){
      loadedCount++;
      
      var perc = Math.floor(loadedCount/len*100);
      $('.p0_prec span').html(perc+'%');
      $('.p0c_tip').css('height',perc+'%');
      if (loadedCount>=len){
       $('.p1').addClass('on');

       setTimeout(function(){      
        $('.main img').each(function(){
         var src = $(this).attr('data-src');
         $(this).attr('src',src);
       });
        $('.p0').fadeOut(700);
      },1000);

       setTimeout(function(){
        mod_video.play();
      },500);

       callback ? callback() : null;
     };
   };
 };
};


//定义并预加载音视频
var audio_bgm = document.createElement("audio");//bgm
var mod_video = document.getElementById("mod_video");//p1视频

window.onload = function(){
  mod_video.src = rootPath+"/res/media/p0_1.mp4";
  mod_video.oncanplaythrough = netease_loadimg(loadImgsArr); //loading 图片
  $('#mod_video').on('ended',function(){
    $('.p0_1').fadeOut(500);
    setTimeout(function(){
      
      if($('.audiosw').hasClass('audiosw_off')){
        
      }else{
        audio_bgm.play();//避免安卓微信里阻塞bgm
      };
    },200);
  });

  audio_bgm.src = rootPath+'/res/media/bgm.mp3';
  audio_bgm.loop = true;
  audio_bgm.oncanplaythrough = audio_bgm.play();//播放bgm

  //音乐播放&禁止
  $('.audiosw').on('click',function(){
    if($('.audiosw').hasClass('audiosw_off')){
      $('.audiosw').removeClass('audiosw_off');
         audio_bgm.play();
       }else{
        $('.audiosw').addClass('audiosw_off');
        audio_bgm.pause();
      };
    });

  //p1开始
  $('.p1_btn').on('click',function(){
    $('.p2').fadeIn(600);
    setTimeout(function(){
     $('.p1').removeClass('on').hide();
       //定时器
       var num = 0;
       var barTimer = setInterval(function(){
        
        if(num < 41){
         var path = rootPath+'/res/img/p2_animes/home_000'+num+'.png';
         $('.p2_animes').attr('src',path);
         num++;
       }else{
        clearInterval(barTimer);
      };

    },80);
       
       setTimeout(function(){
        $('.p2c_bgs').show();
      },2500);

     },2500);

    setTimeout(function(){//随机预先加载一个拍照相框
      var xkarr = ["1","2","3","4","5","6"];
      var xk = getArrayItems(xkarr,1);
      pho_index = xk;
      new Image().src= rootPath+"/res/img/pho_lay_"+xk+".png";
      console.log(xk);
      $('.p4').addClass('pho_lay_'+xk);
    },0);
    
  });

  //sta1 btn
  $('.sta1_word .btn').on('click',function(){
    $('.p2c_mm').addClass('p2c_mm_out');
    $('.sta1_word').addClass('sta1_word_out');
    $('.sta2').show();
  });

  //sta2 btn
  $('.sta2_word .btn').on('click',function(){
    $('.p2c_sz').addClass('p2c_sz_out');
    $('.sta2_word').addClass('sta2_word_out');
    $('.p2c_hd').show();
    setTimeout(function(){
      $('.p3').fadeIn(600).addClass('on');
    },1800);

    setTimeout(function(){
      $('.p2').hide();
    },3000);
  });

  //p3 继续挑战-拍照
  $('.p3r_word .btn').on('click',function(){
    $('.p4').fadeIn(600);
    setTimeout(function(){
      $('.p3').hide();
    },1000);
  });

  //p4_拍照初始化
  $("#clipArea").photoClip({
    size: [248, 248],
    outputSize: [320, 320],
    file: "#file",
    view: "#view",
    ok: "#clipBtn",
    loadStart: function() {
      console.log("照片读取中");
    },
    loadComplete: function() {
      console.log("照片读取完成");
    },
    clipFinish: function(dataURL) {
      console.log(dataURL);
    }
  });

  //p5资料填写
  $('.p5_fill').on('click',function(){
    $('.p5zj_m').fadeOut(600);
    $('.p5zj_l').fadeIn(500);
  });
  
  //淘口令全选
  $(".ui-loader").hide();
  $("#token").on("taphold", function(){ //不支持iPhone/iTouch/iPad Safari
    var doc = document, 
    text = doc.getElementById("token"),
    range, 
    selection;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
        //selection.removeAllRanges();//不注释在安卓机上会存在选不中情况
        selection.addRange(range); 
      }else{
        alert("浏览器不支持长按复制功能");
      }
    });

  //重力感应监听
  window.addEventListener('deviceorientation',  function(e) {
   var x = parseInt(e.gamma);
   var y = parseInt(e.beta);
   var xx = parseInt(0.4*x);
   var yy = parseInt(0.3*y);
   $('.beta').html(y+"______"+x);
   if(Math.abs(x) < 80 & Math.abs(y) < 90){
        if($('.p1').hasClass('on')){ //p1
         $('.p1c_1').css({'webkitTransform':'translate3d('+0.8*xx+'px,'+-0.6*yy+'px,0px)'});
         $('.p1c_2').css({'webkitTransform':'translate3d('+1.4*xx+'px,'+-1*yy+'px,0px)'}); 
         $('.p1c_3').css({'webkitTransform':'translate3d('+0.2*xx+'px,'+-1.5*yy+'px,0px)'});
         $('.p1c_4').css({'webkitTransform':'translate3d('+0.3*xx+'px,'+-1.8*yy+'px,0px)'});
         $('.p1c_5').css({'webkitTransform':'translate3d('+0.2*xx+'px,'+-1*yy+'px,0px)'});
         $('.p1c_6').css({'webkitTransform':'translate3d('+0.8*xx+'px,'+-0.2*yy+'px,0px)'});
         $('.p1c_7').css({'webkitTransform':'translate3d('+0.2*xx+'px,'+-0.5*yy+'px,0px)'});
         $('.p1c_8').css({'webkitTransform':'translate3d('+0.4*xx+'px,'+-0.8*yy+'px,0px)'});
         $('.p1c_9').css({'webkitTransform':'translate3d('+0.6*xx+'px,'+-1.2*yy+'px,0px)'});
         $('.p1c_10').css({'webkitTransform':'translate3d('+0.2*xx+'px,'+-1*yy+'px,0px)'});
       };

     };
   });

  /*注册摇一摇事件监听*/
  if (window.DeviceMotionEvent) { 
    window.addEventListener('devicemotion', deviceMotionHandler, true);  
  } else {  
    pagehit('你的浏览器不支持摇一摇功能，请更换！');  
  };

  /*用于检测手机速度变化*/
  var yyflag = true;
  var last_update = 0, x = y = z = last_x = last_y = last_z = 0, SHAKE_THRESHOLD = 800;

  /*监测手机晃动处理方法*/
  var count = 0;
  var max = 0;
  function deviceMotionHandler(eventData) {
   if($('.p3').hasClass('on')){ 
     if(yyflag){
      var acceleration = eventData.accelerationIncludingGravity;  
      var curTime = new Date().getTime();
      if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;  
        last_update = curTime;  
        x = acceleration.x;
        y = acceleration.y;  
        z = acceleration.z;  
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime;  
        if ( (speed * 10000) > SHAKE_THRESHOLD) {
          /*累计到一定程度就发送请求给后台*/
          max += 1;
          if( max > 4){
            yyflag = false;
            count++;
                //执行操作
                $('.p3').removeClass('on');
                $('.p3_result').fadeIn(500);
                $('.p3_start').fadeOut(500);
                setTimeout(function(){//随机出现一个色子结果        
                  var jgarr = ["1","2"];
                  var jg = getArrayItems(jgarr,1);
                  $('.p3r_'+jg).show();
                  $('.p3r_jy').addClass('p3r_jy'+jg);
                },1600);
              };
            };
            last_x = x;  
            last_y = y;  
            last_z = z;  
          };
        };
      };

    };


  };


  $(function(){

   
  });


//随机数获取
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
      temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
          } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
          }
        }
        return return_array;
      };

//js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPath() {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return (localhostPaht + projectName);
  }

  document.documentElement.addEventListener('touchmove', function(e){
    e.preventDefault();
  });