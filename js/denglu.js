window.onload=function(){
	var dl_name=document.getElementById("dl-name")
	var dl_pwd=document.getElementById("dl-psd")
	var dl_btn=document.getElementById("dl-btn")
	var str=document.cookie;
	var arr = str.split("; ")
	for(var i=0;i<arr.length;i++){
		var item = arr[i].split("=");
		if(item[0]=="username"){
			var  dl_zhanghao = item[1];	
		}
		if(item[0]=="userpwd"){
			var dl_mima = item[1];
		}
	}
			console.log(dl_zhanghao)
				console.log(dl_mima )
	//随机数
	function rand(min,max){
		return Math.round( Math.random()*(max-min) + min );
	}
	//随机颜色
	function getColor(){
		return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
	}
	//验证随机码
	var suijima=document.getElementById("dl-yanzheng")
	var yanzheng=document.getElementById("dl-yanzhengma")
	var flagyz=null
	function yzm(){
		var str="";
		for(var i=0;i<4;i++){
			str+=rand(0,9)
		}
		suijima.innerHTML=str
	}
	yzm();
	suijima.onclick=function(){
		yzm()
		this.style.background=getColor()
	}
	
	yanzheng.onblur=function(){
		if(this.value==suijima.innerHTML){
			flagyz=true
		}else{
			flagyz=false
		}
	}
	var flagDname=null;
	dl_name.onblur=function(){
		if(this.value==dl_zhanghao){
			flagDname=true
		}else{
			flagDname=false
		}
	}
	var flagDpwd=null;
	dl_pwd.onblur=function(){
		if(this.value==dl_mima){
			flagDpwd=true
		}else{
			flagDpwd=false
		}
	}
	
	dl_btn.onclick=function(){
		if(flagyz&&flagDname&&flagDpwd){
			alert("登录成功")
			return true
		}else{
			alert("密码或账号错误")
			return false
		}
		
	}



}
