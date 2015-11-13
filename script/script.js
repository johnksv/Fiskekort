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
Only for front page. Will cast error on other pages...
*******************************/
function loadEventListner(){
	//Stops the scroling when you click the link:
	document.getElementById("readBtn").addEventListener("click",function(event){
	   	event.preventDefault();
	});
	//SmoothScroll
	document.getElementById("readBtn").addEventListener("click", scrollDown);
}



document.getElementById("imgMobil").innerHTML = '<img id="background" src="images/lake.jpg" alt="">';

/*******************************
	SCRIPT FOR SCROLLING
********************************/

function scrollDown(){

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
function showMobileMenu(){
	
	var meny = document.getElementById("menuBtns");
	meny.classList.toggle("visible");

	if(menyVisible){ 
		document.getElementById("showHideMenuBtn").innerHTML="Skjul meny";
		menyVisible = false;
	}
	else{ 
		document.getElementById("showHideMenuBtn").innerHTML="Vis meny";
		menyVisible = true;
	}
	
}

/*
Too scared to start changing this whene one is a 
var name in english and another is a function in norwegian
See: visLang and showLang...
*/		

function showLang(){
	if(window.innerWidth>1024)
	{
	var lang = document.getElementById("lang");
		if(langVisible){
			lang.style.height = "2em";		
			lang.style.marginTop = "1em";
			lang.scrollTop-=50;
			langVisible = false;
		
		}
		else{
			lang.style.height = "4em";
			lang.style.marginTop = "0em";
				langVisible = true;
		}
	}
}
