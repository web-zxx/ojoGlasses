//翻卡片效果
$(".nav-pic").mouseover(function(){
	$(this).hide().siblings().show()
})



//获取json数据
window.onload=function(){
	$.ajax({
		type:"get",
		url:"../json/dd.json",
		async:true,
		success : function(json){
			var page="";
			for(var attr in json){
				//console.log(json[attr].images)
				page+=
				`<li>
					<a href="detail.html">
						<img src="${json[attr].images}" alt="" />
						<p>${json[attr].price}</p>
						<span>${json[attr].detail}</span>
					</a>
				</li>`
			}
			$(".L-list").html(page)
			$(".L-list").children("li").mouseover(function(){
				$(this).css("box-shadow","5px 5px 9px gray").siblings().css("box-shadow","0 0 0")
			})
		}
		
		
	});
	
}




