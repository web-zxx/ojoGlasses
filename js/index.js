//获取cookie
window.onload=function(){
	var str=document.cookie;
	var arr = str.split("; ")
	var ddll=document.getElementById("denglu")
	for(var i=0;i<arr.length;i++){
		var item = arr[i].split("=");
		if(item[0]=="username"){
			ddll.innerHTML=item[1]
		}
	}
}

//轮播图
var index = 0;
	var $olist = $("#ollist li");
	var $ulist = $("#ullist li");
	var timer = null;
	timer = setInterval( autoPlay,2500 );
	function autoPlay(){
		index++;
		if( index == $olist.size() ){
			index = 0;
		}
		$olist.eq(index).addClass("current").siblings().removeClass("current");
		$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$olist.mouseover(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	
	$olist.mouseout(function(){
		timer = setInterval( autoPlay,1500 );
	})
	

//选项卡
var $list=$(".box1ul li" );
var $div=$(".subbox").children();
//console.log($div)
 for(let i=0;i<$list.length;i++){
 	$list.eq(i).mouseover(function(){
 		$(this).addClass("active").siblings().removeClass();
 		$div.eq(i).show().siblings().hide()
 	})
 }

