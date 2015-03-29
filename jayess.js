var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
bg_colour = "#" + ("000000" + bg_colour).slice(-6);
document.bgColor = bg_colour;

function beforeStart(){
	setTimeout(function(){
		start();
		$("#loading").fadeOut();
		$("#right").fadeIn();
		$("#left").fadeIn();
	},5000);
}
function start(){
	$("#left").hover(function(){
		$("#sidebar").stop().animate({"margin-left":"-10px"},200).css({"background-color":"rgba(0, 0, 0, 0.1)"});
	}, function(){
		$("#sidebar").stop().animate({"margin-left":"-43px"},200).css({"background-color":"rgba(0, 0, 0, 0)"});
	});

	/*for (var i = 0; i < $("div.iconbox").length; i++){
		$("div.iconbox")[i].hover(function(){
			$("div.iconbox")[i].animate({"opacity":"1"},250);
		},function(){
			$("div.iconbox")[i].animate({"opacity":"0.1"},250);
		});
	}*/

	$("#refresh").mouseup(function() {
		$(this).css({"background-color":"#62BDB6","border":"1px solid #000000"});
	}).mousedown(function() {
		$(this).css({"background-color":"#9393A0","border":"1px solid #A50000"});
		$("#refresh .loaded").animate({"width":"100%"},500,function(){$("#refresh .refreshmsg").text("Done!");});
		setTimeout(function(){window.location.reload();},500);
	});
	$("span.cheers").append("<strong>" + bg_colour + "</strong>");
	$("#uselessinfo").hover(function(){$("#uselessinfo").fadeOut();});
	var prev = localStorage.getItem('betaPreviousColor');
	localStorage.setItem('betaPreviousColor', bg_colour);
	if (bg_colour == "#000000" || bg_colour == "#ffffff"){
		$("#refresh").fadeOut();
		$("#title").css({"color":"#999"});
		$("#subtitle").css({"color":"#999"});
		$("#subtitle").text("Holy crap! You got " + bg_colour + " as a background color!");
		window.onbeforeunload = function(){return "DUDE! Just WHAT are you doing?!";}
	}else if(prev == bg_colour){
		$("#refresh").fadeOut();
		$("#title").css({"color":"#999"});
		$("#subtitle").css({"color":"#999"});
		$("#subtitle").text("Holy crap! You got " + bg_colour + " as a background color last time you joined the page!");
		window.onbeforeunload = function(){return "DUDE! Just WHAT are you doing?!";}
	}
}
