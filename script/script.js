/*******************************
	SCRIPT FOR SCROLLING
********************************/
var x = 0;
var intervalId;
var text;
var textPos;
var showLang = false;

visLang();

function scrollNed(){
	x=pageYOffset;
	
	text = document.getElementById("content-1");
	textPos = text.getBoundingClientRect();
	intervalId = setInterval(smoothScroll,15);
}


function smoothScroll(){
	x+=20;
	scrollTo(0,x);
	
	if(pageYOffset<x||text.getBoundingClientRect().top<0){
	clearInterval(intervalId);
	}
	
}

/*******************************
	SCRIPT FOR MENY
********************************/

function visMobilMeny(){
	
	var meny = document.getElementById("menuBtns");
 
	if(meny.className == "synlig"){ //Menyen er synlig, do this
		meny.className = "usynlig";
		document.getElementById("showHideMenuBtn").innerHTML="Vis meny";
		document.getElementById("menuBtns").offsetHeight
	}
	else{ //Menyen er ikke synlig, do this
		meny.className = "synlig";
		document.getElementById("showHideMenuBtn").innerHTML="Skjul meny";
	}

}
/*var meny = document.getElementById("menuBtns");
  (meny.className === "synlig") ? meny.className = "usynlig" : meny.className = "";
*/

function visLang(){
	var lang = document.getElementById("lang");
	var background = document.getElementById("langBackground");
		if(showLang){
			lang.style.height = "1em";
			background.style.height = "0em";
			//head.style.height = "4em";			
			showLang = false;
		
		}
		else{
			lang.style.height = "6em";
			background.style.height = "4em";
		//	head.style.height = "8em";

			showLang = true;
		}

}