//吸顶
var list=$(".xdlist");
var listtop=list.offset().top
var louti=$(".detail-right div")
$(window).scroll(function(){
	var tt=$(document).scrollTop();
	if(tt>listtop){
		list.css({"position":"fixed","top":0,"right":35})
	}else{
		list.css({"position":""})
	}
	
	//滑动屏幕，对应标题高亮
	louti.each(function(){
		if(Math.abs($(this).offset().top-tt)<$(this).height()/2){
			var index=$(this).index()
			$(".carlist a").eq(index).addClass("bac").siblings().removeClass()
		}
	})
		
})

//楼梯点击换样式,同时跳转相应内容
$(".carlist a").click(function(){
	$(this).addClass("bac").siblings().removeClass()
	var index=$(this).index()
	var divtop=louti.eq(index).offset().top
	$("html,body").animate({"scrollTop" : divtop},500)
})



//放大镜
var small=$(".wrap-pic");
var mask = $(".mask");
var big = $(".bigbox");
var bigImg=$(".bigImg")
$(".centerpic1").mouseover(function(){
		var index = $(this).index();
		console.log(index)
		$(".wrap-pic img").eq(index-1).show().siblings().hide()
		$(".bigbox img").eq(index-1).show().siblings().hide();
	})



//鼠标移入移除
small.mouseover(function(){
	mask.show();
	big.show()
})
small.mouseout(function(){
	mask.hide();
	big.hide()
})
small.mousemove(function(e){
	var e=e||event;
	//var x = e.pageX - mask.offsetWidth/2-box.offsetLeft;r
	var x =e.pageX-mask.width()/2-small.offset().left;
	var y =e.pageY-mask.height()/2-small.offset().top;
	//mask的最大移动距离
	var maxL=small.width()-mask.width();
	var maxT=small.height()-mask.height();
	//三木判断
	x = x<0?0:(x>maxL?maxL:x);
	y = y<0?0:(y>maxT?maxT:y)
	//赋值
	mask.css({"left":x,"top":y})
	
	var bigImgLeft =x*(bigImg.width()-big.width())/(small.width()-mask.width() );
	var bigImgTop =y*(bigImg.height()-big.height())/(small.height()-mask.height() )
	
	bigImg.css({"left":-bigImgLeft,"top":-bigImgTop})
})