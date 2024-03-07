import Validations from "./Validations.js";

export default class singupvalidation{
	
	constructor(email, password){
		this.email 		= email;
		this.password 	= password;
	}

	checkValidations(){

		let errors = [];
		if(!Validations.checkEmail(this.email)){
			errors['email'] = "Invalid email";
		}

		if(!Validations.minLength(this.password, 6)){
			errors['password'] = "Password must be 6 characters."
		}

		return errors;

	}

	static getErrorMessageFromCode(errorCode){
		switch(errorCode){
			case 'EMAIL_EXISTS' : 
				return "Email already exixts."
			case 'EMAIL_NOT_FOUND' : 
				return "Email not found."
			case 'INVALID_PASSWORD' : 
				return "Invalid password"
			case 'USER_DISABLED' : 
				return "User disabled"

			case 'INVALID_LOGIN_CREDENTIALS' : 
				return "Email and password wrong."

			default: 
				return "Unexpected error occurred. Please try again."
		}
	}

}