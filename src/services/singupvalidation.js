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
		}
	}

}