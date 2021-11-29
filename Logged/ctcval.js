function contact(){
	var name = document.forms["cForm"]["posName"].value;
	var email = document.forms["cForm"]["posEmail"].value;
	var regard = document.forms["cForm"]["posRegard"].value;
	var text = document.forms["cForm"]["posText"].value;
	var error = document.getElementById("error");
	
	if (
	
		( (name == "" )|| (name == null))	 ||
		( (email == "" ) || (email == null))	 ||
		( (regard == "" ) || (regard == null))	 ||
		( (text == "" )|| (text == null)) 
	
		)
	{
		
		error.innerHTML = "  * Please enter all fields ";
		return false;
	}
	
}