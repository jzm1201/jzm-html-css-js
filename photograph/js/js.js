$("#toggle").click(function() {
				$(this).toggleClass("on");
				$("#me").slideToggle();
			});
			
$(function() {
	
	
	//跟随滚动设置菜单
	$(window).scroll(function() {
		if (($("header.fixed").length > 0)) { 
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("header").addClass("on");
			} else {
				$("header").removeClass("on");
			}
		};
	});
	

		
});