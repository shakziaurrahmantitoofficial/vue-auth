import axios from "axios";
import { 
	SET_USER_TOKEN_DATA_MUTATION,
	LOGIN_ACTION,
	LOADING_SPINNER_SHOW_MUTATION,
	AUTO_LOGIN_ACTION,
	LOGOUT_ACTION,
	SIGNUP_ACTION,
	AUTH_ACTION
	} from "../../storeconsts.js";
import singupvalidation from "../../../services/singupvalidation.js";

export default {


	async [LOGOUT_ACTION](context){
		context.commit(SET_USER_TOKEN_DATA_MUTATION,{
			email : null,
			token : null,
			expiresIn : null,
			refreshToken : null,
			userId : null
		})
	},

	async [LOGIN_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`,
        });
    },

    async [SIGNUP_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`,
        });
    },

	[AUTO_LOGIN_ACTION](context) {
        let userData = localStorage.getItem('userData');
		if(userData){
			context.commit(
				SET_USER_TOKEN_DATA_MUTATION,
				JSON.parse(userData)
			);
		}
		console.log("test will be go here");
    },


	async [AUTH_ACTION](context, payload){

		let postData = {
			email 				: payload.email,
			password 			: payload.password,
			returnSecureToken 	: true
		}

		let response = "";
		context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {root : true});

		try{
			response = await axios.post(payload.url, postData)
		}
		catch(err){
			context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {root : true});
			let errorMessage = singupvalidation.getErrorMessageFromCode(
				err.response.data.error.errors[0].message
			);
			throw errorMessage;
		}
		context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {root : true});
		if(response.status === 200){
			let tokenData = {
				email : response.data.email,
				token : response.data.idToken,
				expiresIn : response.data.expiresIn,
				refreshToken : response.data.refreshToken,
				userId : response.data.userId
			};
			localStorage.setItem('userData', JSON.stringify(tokenData));
			context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
		}

	}
}