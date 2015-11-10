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
	var showLang = false;


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
	SCRIPT FOR MOBILEMENY
********************************/
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
