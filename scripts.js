$(document).ready(function(){
	$(".horizontal-scroll").width($(window).width());
	$("body").width($(".horizontal-scroll").length * $(window).width());
	
	//side-scrolling
	 $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 150);
        e.preventDefault();
    });
	
	$("a").click(function () {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 300);
    });
	//..............................................
	
	//type heading
	var heading = "Hi, I'm Lyubo and I bring codes to life."
	typeHeading(heading);
	
	$("#projects-section ul li").mouseenter(function(){
		$(this).children("a").css("display", "block");
		$(this).children("a").removeClass("animated bounceOutUp");
		$(this).children("a").addClass("animated tada");
	});
	$("#projects-section ul li").mouseleave(function(){
		$(this).children("a").removeClass("animated tada");
		$(this).children("a").addClass("animated bounceOutUp");
	});
	
	$("#accordion").accordion();
	
	$("#about-me-section ul li").mouseenter(function(){
		$(this).addClass("animated tada");
	});
	$("#about-me-section ul li").mouseleave(function(){
		$(this).removeClass("animated tada");
	});
});

function typeHeading(heading){
	var headingElement = document.querySelector("#beginning-section h1");
	var iterator = 0;
	var typeInterval = setInterval(function(){
		if(iterator < heading.length){
			var text = headingElement.innerHTML;
			headingElement.innerHTML = text.slice(0, text.length - 1) + heading[iterator] + "|";
			iterator++;
		}
		else{
			$("#beginning-section nav").css("display", "block");
			$("#beginning-section nav").addClass("animated fadeInRight");
			$("#beginning-section #next-arrow").css("display", "block");
			$("#beginning-section #next-arrow").addClass("animated fadeInRight");
			var cursorBlink = setInterval(function(){
				if(headingElement.innerHTML[headingElement.innerHTML.length - 1] == "|"){
					headingElement.innerHTML = headingElement.innerHTML.replace("|", "");
				}
				else{
					headingElement.innerHTML += "|";
				}
			},350);
			clearInterval(typeInterval);
		}
	}, 120);
}