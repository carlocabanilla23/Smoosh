var firstname = sessionStorage.getItem("FirstName");
var lastname = sessionStorage.getItem("LastName");
var company = sessionStorage.getItem("Company");
var address1 = sessionStorage.getItem("address1");
var address2 = sessionStorage.getItem("address2");
var city = sessionStorage.getItem("city");
var state = sessionStorage.getItem("state");
var zip = sessionStorage.getItem("zip");
function pageload(){	
		document.write(
		"FirstName : " + firstname + "<br/>" + 
		"LastName : " + lastname + "<br/>" +
		"Company : " + company + "<br/> "+
		"Address1 : " + address1 + "<br/> " +
		"Address2: " + address2 + "<br/> " +
		"City : " + city + "<br/> " +
		"Address : " + state + "<br/> " +
		"zip : " + zip + "<br/> " 
	
		);

}