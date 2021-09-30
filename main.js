
function show()
{
  
    document.getElementById("newmenu").style.display="inline";

}

function hide(){
    document.getElementById("newmenu").style.display="none";
	document.getElementById("modal").style.display="none";
}
function showhide1() 
{  
    let div1 = document.getElementById("dropdown1");  
    if (div1.style.display !== "block") {  
        div1.style.display = "block";  
    }  
    else {  
        div1.style.display = "none";  
    }  
}  
function showhide2() 
{  
    let div2 = document.getElementById("dropdown2");  
    if (div2.style.display !== "block") {  
        div2.style.display = "block";  
    }  
    else {  
        div2.style.display = "none";  
    }  
}  

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 10000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 10000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	let discount = "jan 22, 2022 00:00:00",
		countDown = new Date(discount).getTime(),
		x = setInterval(function() {    
  
		  let now = new Date().getTime(),
			  distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		}, 0)
	}());