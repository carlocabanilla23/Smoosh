function LoginSetup() {
			sessionStorage.setItem("user","");
		}
		
		function Login() {
			var wrongID = document.getElementById("incorrectId");
			var userName = document.getElementById("UsernameTxtbox");
			var password = document.getElementById("PasswordTxtbox");
			if((userName.value == "johncarlo") && (password.value == "12345")) {
				sessionStorage.setItem("user",userName.value);
				window.location.href ="Logged/index.html";
			}
		else if((userName.value == "admin") && (password.value == "password")) {
				sessionStorage.setItem("user",userName.value);
				window.location.href ="Logged/index.html";
			}
			else if((userName.value == "savio") && (password.value == "pham")) {
				sessionStorage.setItem("user",userName.value);
				window.location.href ="Logged/index.html";
			}
			else if ((userName.value.length == 0) || (password.value.length == 0)){
				wrongID.innerHTML = "* Please Complete Fields";
			} else {
				wrongID.innerHTML = "* Incorrect Username or Password";
			}	
			
		}
		
		function signUp(){
				window.location.href ="signup/signupform.html";
			
		}