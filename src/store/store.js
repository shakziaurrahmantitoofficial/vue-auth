import {createStore} from "vuex";
import auth from "../store/modules/auth/index.js";
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconsts.js';

const store = createStore({
	modules : {
		auth
	},
	state(){
		return{
			showLoading : false
		}
	},
	mutations : {
		[LOADING_SPINNER_SHOW_MUTATION](state, payload){
			state.showLoading = payload;
		}
	}
});

export default store;