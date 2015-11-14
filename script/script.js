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



document.getElementById("imgMobil").innerHTML = '<img id="backgroundMobil" src="../images/lake.jpg" alt="">';

/*******************************
	SCRIPT FOR SCROLLING
********************************/

function scrollDown(){

	
	x=pageYOffset;
	text = document.getElementById("content-1");
	intervalId = setInterval(smoothScroll,15);
}


function smoothScroll(){
	x +=20;
	scrollTo(0,x);	
	if(pageYOffset<x||text.getBoundingClientRect().top<0){
	clearInterval(intervalId);
	text.focus();
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
