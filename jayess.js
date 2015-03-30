var hasLoaded = false;
setTimeout(function(){
	if (!hasLoaded){
		$("#subtitle.loadingLong").show();
	}
},10000);

function beforeStart(){
	if (localStorage.getItem('betaPreviousColor')){
		start();
		$("#loading").fadeOut();
		$("#right").fadeIn();
		$("#left").fadeIn();
	}else{
		//Oh my god at the efficiency this has holy crap//
		setTimeout(function(){
			start();
			$("#loading").fadeOut();
			$("#right").fadeIn();
			$("#left").fadeIn();
		},3000);
	}
}
function start(){
	$("body").hover(function(){console.log("Ajax is working");});
	hasLoaded = true;
	var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
	bg_colour = "#" + ("000000" + bg_colour).slice(-6);
	document.bgColor = bg_colour;

	$("#left").hover(function(){
		$("#sidebar").stop().animate({"margin-left":"0px"},200);
	}, function(){
		$("#sidebar").stop().animate({"margin-left":"-43px"},200);
	});

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

	$("div.iconbox").hover(function(){
		$(this).stop().animate({"opacity":"1"},250);
	}, function(){
		$(this).stop().animate({"opacity":"0.4"},250);
	});
}
