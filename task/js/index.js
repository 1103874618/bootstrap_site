$(document).ready(function(){
	console.log($("img[class='d-block w-100 img-fluid']"));
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

/*$(".carousel_arrow").click(function () {

});*/

