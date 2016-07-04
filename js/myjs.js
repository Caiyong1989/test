$(function(){

	$('#caidan').on('click','li',function(){
		$('#caidan li').find('a').removeClass('action');
		$(this).find('a').addClass('action');
		$('.content-img').css('left','-1000px');
		scrollshow();
	});
	$('#job').on('click','li',function(){
		$(this).addClass('job_caidan').siblings().removeClass('job_caidan');
		
		 var tab=$(this).attr("title");
		 $('#'+tab).show(500).siblings().hide(500);
	});
	
	$('#submit').on("click",function(e){
		e.preventDefault();
		alert("请邮件联系：liull@dachentech.com.cn  谢谢");
		
	});
	
	function scrollshow(){
		$('.content-img').stop().animate({left:'0px'},1000);
	}
	
	scrollshow();
 	function navbar(e){
 		$('#caidan li').find('a').removeClass('action');
		$('#caidan li').find('a').eq(e).addClass('action');
 	}

	$(document).scroll(function(e) {
		console.log($(this).scrollTop());
		var b=$(this).scrollTop();
		if(b>=100 && b<=1600){
			navbar(0);
		}
		else if(b>=1700 && b<=2900){
			navbar(1);
		}
		else if(b>=3000 && b<=5400){
			navbar(2);
		}
		else if(b>=5500 && b<=6000){
			navbar(3);
		}

	});












});
