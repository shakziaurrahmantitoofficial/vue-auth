import axios from "axios";
import { SINGUP_ACTION } from "../../storeconsts.js"
export default {
	async [SINGUP_ACTION](_, payload){
		let postData = {
			email 				: payload.email,
			password 			: payload.password,
			returnSecureToken 	: true
		}

		let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAS48zINvP7E2cfDGHxCsaMf33GZd0vZFA`, postData)

		console.log(response);
	}
}