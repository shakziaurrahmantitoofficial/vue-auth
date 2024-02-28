import {createStore} from "vuex";
import auth from "../store/modules/auth/index.js";
const store = createStore({
	modules : {
		auth
	}
});

export default store;