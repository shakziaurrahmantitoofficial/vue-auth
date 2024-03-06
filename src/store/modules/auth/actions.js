import axios from "axios";
import { SINGUP_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "../../storeconsts.js";
import singupvalidation from "../../../services/singupvalidation.js";

export default {
	async [SINGUP_ACTION](context, payload){
		let postData = {
			email 				: payload.email,
			password 			: payload.password,
			returnSecureToken 	: true
		}

		let response = "";

		try{
			await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`, postData)

		}
		catch(err){
			let errorMessage = singupvalidation.getErrorMessageFromCode(err.response.data.error.errors[0].message)
			throw errorMessage;
		}

		
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