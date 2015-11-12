/*******************************
	VARIABLES FOR FUNCTIONS
*******************************/
//Smooth Scroll
	var x = 0;
	var intervalId;
	var text;

//Mobile Menu:
	var menyVisible = true;

//LanguageBox
	var langVisible = false;


/*******************************
EVENT LISTNERS
*******************************/

//Stops the scroling when you click the link:
document.getElementById("readBtn").addEventListener("click",function(event){
   	event.preventDefault()
});
//SmoothScroll
document.getElementById("readBtn").addEventListener("click", scrollNed);


/*******************************
	SCRIPT FOR SCROLLING
********************************/

function scrollNed(){

	event.preventDefault();
	x=pageYOffset;
	text = document.getElementById("content-1");
	intervalId = setInterval(smoothScroll,15);
}


function smoothScroll(){
	x +=20;
	scrollTo(0,x);	
	if(pageYOffset<x||text.getBoundingClientRect().top<0){
	clearInterval(intervalId);
	}
	
}

/*******************************
	SCRIPT FOR MOBILE MENU
********************************/

/*
Work work..
*/
function visMobilMeny(){
	
	var meny = document.getElementById("menuBtns");
	meny.classList.toggle("synlig");

	if(menyVisible){ 
		document.getElementById("showHideMenuBtn").innerHTML="Vis meny";
		menyVisible = false;
	}
	else{ 
		document.getElementById("showHideMenuBtn").innerHTML="Skjul meny";
		menyVisible = true;
	}
	
}

/*
Too scared to start changing this whene one is a 
var name in english and another is a function in norwegian
See: visLang and showLang...
*/		

function showLang(){
	var lang = document.getElementById("lang");
		if(langVisible){
			lang.style.height = "2em";		
			lang.style.marginTop = "1em";
			langVisible = false;
		
		}
		else{
			lang.style.height = "4em";
			lang.style.marginTop = "0em";
				langVisible = true;
		}
}
