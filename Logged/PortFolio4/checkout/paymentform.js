var image =sessionStorage.getItem("image");

window.onload = function(){
	document.getElementById("mainbody").style.backgroundImage = image;
	document.getElementById("mainbody").style.backgroundSize = "100% 100%";
	document.getElementById("SubItem1").style.backgroundImage = image;
	document.getElementById("SubItem1").style.backgroundSize = "100% 100%";
	
}
	
function PaymentForm(){
var firstname = document.getElementById("firstName");
var lastname = document.getElementById("lastName");
var company = document.getElementById("company");
var address1 = document.getElementById("address1");
var address2 = document.getElementById("address2");
var city = document.getElementById("city");
var state = document.getElementById("state");
var CCNo = document.getElementById("CCNo");
var CCExpiresMonth = document.getElementById("CCExpiresMonth");
var CCExpiresYear = document.getElementById("CCExpiresYear");
var error = document.getElementById("errors");
	
	if (
		((firstname.value == "")||(firstname.value == null)) ||
	   ((lastname.value == "")||(lastname.value == null)) ||
	   ((address1.value == "")||(address1.value == null)) ||
	   ((city.value == "")||(city.value == null)) ||
	   ((state.value == "")||(state.value == null)) ||
	   ((CCNo.value == "")||(CCNo.value == null)) ||
	   ((CCExpiresMonth.value == "")||(CCExpiresMonth.value == null)) ||
	   ((CCExpiresYear.value == "")||(CCExpiresYear.value == null)) 
		)
	{
		error.innerHTML = "*Please Complete the Fields";
	}else{

	window.location.href = "Cout.html";	
		
		
		
		
	}
	
}
		
		/*
	sessionStorage.setItem("FirstName",firstname.value);
	sessionStorage.setItem("LastName",lastname.value);
	sessionStorage.setItem("Company",company.value);
	sessionStorage.setItem("address1",address1.value);
	sessionStorage.setItem("address2",address2.value);
	sessionStorage.setItem("city",city.value);
	sessionStorage.setItem("state",state.value);
	sessionStorage.setItem("zip",zip.value);
	sessionStorage.setItem("country",country.value);
	sessionStorage.setItem("phone",phone.value);
*/
