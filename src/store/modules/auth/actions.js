import axios from "axios";
import { 
	SINGUP_ACTION,
	SET_USER_TOKEN_DATA_MUTATION,
	LOADING_SPINNER_SHOW_MUTATION,
	LOGIN_ACTION
	} from "../../storeconsts.js";
import singupvalidation from "../../../services/singupvalidation.js";

export default {
	async [LOGIN_ACTION](context, payload){

		let postData = {
			email 				: payload.email,
			password 			: payload.password,
			returnSecureToken 	: true
		}

		let response = "";
		context.commit(LOADING_SPINNER_SHOW_MUTATION, true,{
			root : true
		});

		try{
			await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`, postData)

		}
		catch(err){
			context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
			root : true
		});
			
		let errorMessage = singupvalidation.getErrorMessageFromCode(err.response.data.error.errors[0].message)
			throw errorMessage;
		}

		context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
			root : true
		});
		
		if(response.status === 200){
			context.commit(SET_USER_TOKEN_DATA_MUTATION,{
				email : response.data.email,
				token : response.data.idToken,
				expiresIn : response.data.expiresIn,
				refreshToken : response.data.refreshToken,
				userId : response.data.userId
			})
		}









	},
	async [SINGUP_ACTION](context, payload){
		let postData = {
			email 				: payload.email,
			password 			: payload.password,
			returnSecureToken 	: true
		}

		let response = "";

		context.commit(LOADING_SPINNER_SHOW_MUTATION, true,{
			root : true
		});

		try{
			await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`, postData)

		}
		catch(err){
			context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
			root : true
		});
			let errorMessage = singupvalidation.getErrorMessageFromCode(err.response.data.error.errors[0].message)
			throw errorMessage;
		}

		context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
			root : true
		});
		
		if(response.status === 200){
			context.commit(SET_USER_TOKEN_DATA_MUTATION,{
				email : response.data.email,
				token : response.data.idToken,
				expiresIn : response.data.expiresIn,
				refreshToken : response.data.refreshToken,
				userId : response.data.userId
			})
		}
	}
}