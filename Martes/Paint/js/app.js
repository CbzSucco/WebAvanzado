var color = $(".selected").css("background-color");
var $canvas = $('canvas');
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

$(".controls").on("click","li",function(){
	$(this).siblings().removeClass("selected")
	$(this).addClass("selected");
	color=(this).css("background-color");
})