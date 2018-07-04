
//注册验证

var flagNum=null;
$("#t1").blur(function(){
	var reg=/^1[3578]\d{9}$/;
	strName=$(this).val();
	if(reg.test(strName)){//合法
		$(".s1").html("正确");
		$(".s1").css("color","green");
		flagNum=true
	}else{
		$(".s1").html("请输入正确手机号");
		$(".s1").css("color","red");
		flagNum=false
	}
})
var flagPsd=null
$("#t2").blur(function(){
	var reg=/^[a-z]{2,}\d{5,}$/;
	strPsd=$(this).val();
	if(reg.test(strPsd)){//合法
		$(".s2").html("正确");
		$(".s2").css("color","green");
		flagPsd=true
	}else{
		$(".s2").html("请输入合法密码");
		$(".s2").css("color","red");
		flagPsd=false
	}
})
var flagRe=null;
$("#t3").blur(function(){
	if($(this).val()==$("#t2").val()){
		$(".s3").html("正确");
		$(".s3").css("color","green");
		flagRe=true
	}else{
		$(".s3").html("两次密码不一致");
		$(".s3").css("color","red");
		flagRe=false
	}
})
var flagPhone=null
$("#t4").blur(function(){
	var reg=/^1[3578]\d{9}$/;
	var str=$(this).val();
	if(reg.test(str)){//合法
		$(".s4").html("正确");
		$(".s4").css("color","green");
		flagPhone=true
	}else{
		$(".s4").html("请输入正确手机号");
		$(".s4").css("color","red");
		flagPhone=false
	}
})

//随机数
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
//随机颜色
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}
//验证随机码
function yzm(){
	var str="";
	for(var i=0;i<4;i++){
		str+=rand(0,9)
	}
	$(".zc-suijima").html(str)
}
yzm();
$(".zc-suijima").click(function(){
	yzm()
	$(this).css("background",getColor())
})

var flagYz=null
$("#yanzheng").blur(function(){
	if($(this).val()==$(".zc-suijima").html()){
		$(".s5").html("正确")
		$(".s5").css("color","green")
		flagYz=true
	}else{
		$(".s5").html("验证码错误")
		$(".s5").css("color","red")
		$(this).val("")
		flagYz=false
	}
})

//协议是否点击
var flagCheck=false;
$("#zc-checkbox").click(function(){
	flagCheck=true
})


//注册
var sub=document.getElementById("zc-sub");

sub.onclick=function(){
	if( flagNum && flagPsd&& flagRe && flagPhone && flagYz && flagCheck ){
			document.cookie="username="+strName;
			document.cookie = "userpwd="+strPsd
			alert("注册成功")
			return true;
		}else{
			alert("请正确填写信息")
			return false
		}
	
}