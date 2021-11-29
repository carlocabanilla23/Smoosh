var i = 0;

var images= new Array()
images[0]="pictures/vectors/1.jpg";
images[1]="pictures/graffiti/2.jpg";
images[2]="pictures/paint/3.jpg";
images[3]="pictures/other/3.jpg";
images[4]="pictures/vintage/2.jpg";
images[5]="pictures/paint/1.jpg";
 
function swapImage()
{
   document.slide.src = images[i];
   if(i < images.length -1) 
   i++;
   else i = 0;
   setTimeout("swapImage()",1400);
}



