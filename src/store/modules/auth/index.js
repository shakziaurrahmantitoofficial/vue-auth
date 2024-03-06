import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
	namespaced: true,
	state(){
		return {
			token : '',
			email : '',
			userId : '',
			refreshToken : '',
			expireIn : ''
		}
	},
	mutations,
	getters,
	actions
}