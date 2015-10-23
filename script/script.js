var x = 0;
var intervalId;
var text;
var textPos;



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