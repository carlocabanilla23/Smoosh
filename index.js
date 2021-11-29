var i = 0;

var images= new Array()
images[0]="Logged/pictures/vectors/1.jpg";
images[1]="Logged/pictures/graffiti/2.jpg";
images[2]="Logged/pictures/paint/3.jpg";
images[3]="Logged/pictures/other/3.jpg";
images[4]="Logged/pictures/vintage/2.jpg";
images[5]="Logged/pictures/paint/1.jpg";
 
function swapImage()
{
   document.slide.src = images[i];
   if(i < images.length -1) 
   i++;
   else i = 0;
   setTimeout("swapImage()",1400);
}

window.onload=swapImage;

function iClickLogin(){
	window.location.href ="Login.html";
	
	
} 
function iClickSignUp(){
		window.location.href ="signup/signupform.html";
	
}

