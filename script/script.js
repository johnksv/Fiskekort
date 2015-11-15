/*******************************
	Load backgroundimage for mobil
	Dirty fix for student server..
	On a normal server src="/images/lake.jpg" would be enough..

	We could also have used an dynamic link, aslong the files is inside the folder "Fiskekort"
		var str = window.location.href;
		var result = str.substr(0,str.indexOf("Fiskekort")+9);
		src="'+result+'/images/lake.jpg"
*******************************/

document.getElementById("backgroundImgMobile").innerHTML = '<img id="backgroundMobil" src="/~3050XX/Fiskekort/images/lake.jpg" alt="">';

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
Change focus is blocked on mobile...
*******************************/
function loadEventListner(){
	//Stops the scroling when you click the link:
	document.getElementById("readBtn").addEventListener("click",function(event){
	   	event.preventDefault();
	});
	//SmoothScroll
	document.getElementById("readBtn").addEventListener("click", scrollDown);
}


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
