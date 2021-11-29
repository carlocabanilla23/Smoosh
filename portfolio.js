var x = sessionStorage.getItem("user");	
function Logout() {
sessionStorage.setItem("user","");
window.location.href ="../Login.html";
			}
window.onload =function (){	
		
	var PortBox1 = document.getElementById("PortBox1");	
	PortBox1.style.backgroundImage =  "url('Logged/pictures/vectors/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox1.style.backgroundSize = "cover" ;
	var PortBox2 = document.getElementById("PortBox2");	
	PortBox2.style.backgroundImage =  "url('Logged/pictures/paint/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox2.style.backgroundSize = "cover" ;
	var PortBox3 = document.getElementById("PortBox3");	
	PortBox3.style.backgroundImage =  "url('Logged/pictures/Graffiti/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox3.style.backgroundSize = "cover" ;
	var PortBox4 = document.getElementById("PortBox4");	
	PortBox4.style.backgroundImage =  "url('Logged/pictures/Vintage/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox4.style.backgroundSize = "cover" ;
	var PortBox5 = document.getElementById("PortBox5");	
	PortBox5.style.backgroundImage =  "url('Logged/pictures/grunge/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox5.style.backgroundSize = "cover" ;
	var PortBox6 = document.getElementById("PortBox6");	
	PortBox6.style.backgroundImage =  "url('Logged/pictures/Other/" + Math.floor(Math.random() * 3 +1) + ".jpg')";
	PortBox6.style.backgroundSize = "cover" ;
	
	
}
