/*******************************
	VARIABLES FOR FUNCTIONS
*******************************/
var x = 0;
var intervalId;
var text;
var showLang = false;


/*******************************
EVENT LISTNERS
*******************************/

//STOPS THE SCROLLING:
document.getElementById("readBtn").addEventListener("click",function(event){
   	event.preventDefault()
});
//SmoothScroll
document.getElementById("readBtn").addEventListener("click", scrollNed);


/*******************************
	SCRIPT FOR SCROLLING
********************************/

function scrollNed(){
	console.log(event);
	event.preventDefault();
	x=pageYOffset;
	console.log(text);
	text = document.getElementById("content-1");
	console.log(text);
	intervalId = setInterval(smoothScroll,15);
}


function smoothScroll(){
	x +=20;
	scrollTo(0,x);
	console.log(pageYOffset +" x:" + x);
	console.log("BoundingClient:" + text.getBoundingClientRect().top);
	
	if(pageYOffset<x||text.getBoundingClientRect().top<0){
	clearInterval(intervalId);
	}
	
}

/*******************************
	SCRIPT FOR MENY
********************************/

function visMobilMeny(){
	
	var meny = document.getElementById("menuBtns");
 
	if(meny.className == "synlig"){ 
	//Menyen er synlig, do this
		meny.className = "usynlig";
		document.getElementById("showHideMenuBtn").innerHTML="Vis meny";
		document.getElementById("menuBtns").offsetHeight
	}
	else{ 
	//Menyen er ikke synlig, do this
		meny.className = "synlig";
		document.getElementById("showHideMenuBtn").innerHTML="Skjul meny";
	}
}

function visLang(){
	var lang = document.getElementById("lang");
	var background = document.getElementById("langBackground");
		if(showLang){
			lang.style.height = "2em";
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
