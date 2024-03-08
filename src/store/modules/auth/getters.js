import { GET_USER_TOKEN_GETTER } from "../../storeconsts.js";
export default{
	[GET_USER_TOKEN_GETTER]:(state)=>{
		return state.token;
	}
}