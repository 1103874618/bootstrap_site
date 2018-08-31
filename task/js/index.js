$(document).ready(function(){
	
	


	var num = $(".circle_img");
	var member = $(".member");

	num.each(function () { 
		 $(this).mouseenter(function () {
			 
			 $("#"+$(this).attr("id") +" "+ ".circle_hover_border").addClass("circle_hover_border_hover");
		 });

		$(this).mouseleave(function () {
			$("#" + $(this).attr("id") + " "+ ".circle_hover_border").removeClass("circle_hover_border_hover");
		 });
		 
	 });
		
	$('.jarallax').jarallax({
		speed: 0.2
	});
	
	member.each(function () {
		$(this).mouseenter(function(){
			$("#" + $(this).attr("id") + " " + ".member_info").addClass("member_info_hover");
		});
		$(this).mouseleave(function () {
			$("#" + $(this).attr("id") + " " + ".member_info").removeClass("member_info_hover");
		});
	});
	
});

$("div[class='carousel slide']").mouseenter(function(){
	$(".carousel_arrow").css("opacity","1");
});

$("a[href='#carousel']").mouseenter(function(){
	$(".carousel_arrow").css("opacity","1");
});


$("div[class='carousel slide']").mouseleave(function(){
	$(".carousel_arrow").css("opacity","0");
});

(function smooth() {
	
	$().smoothScroll();
})();



