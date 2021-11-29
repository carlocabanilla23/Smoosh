var x = sessionStorage.getItem("user");	
	function Logout() {
			sessionStorage.setItem("user","");
			window.location.href ="../../Login.html";
			}
window.onload = function (){	
		
	
	document.getElementById("UserLog").innerHTML = x ;
			

		
			
			
		}
			