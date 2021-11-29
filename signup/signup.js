function ValidateSignUp(){
	var firstname = document.forms["SignUpForm"]["Fname"].value;
	var lastname = document.forms["SignUpForm"]["Lname"].value;
	var username = document.forms["SignUpForm"]["Uname"].value;
	var password1 = document.forms["SignUpForm"]["pass1"].value;
	var password2 = document.forms["SignUpForm"]["pass2"].value;
	var email1 = document.forms["SignUpForm"]["email1"].value;
	var error = document.getElementById("error");
	
	if (
	
		( (firstname == "" )|| (firstname == null))	 ||
		( (lastname == "" ) || (lastname == null))	 ||
		( (username == "" ) || (username == null))	 ||
		( (password1 == "" )|| (password1 == null))  ||
		( (password2 == "" )|| (password2 == null))  ||
		( (email1 == "" )   || (email1 == null)) 		
	
		)
	{
		
		error.innerHTML = "  * Please enter all fields ";
		return false;
	}
	else if (password1 !== password2){
		error.innerHTML = " * Password Did Not Match";
	return false;
	}
	
}