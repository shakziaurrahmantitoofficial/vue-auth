import axios from "axios";
import store from "../store/store.js";
import { GET_USER_TOKEN_GETTER } from "../store/storeconsts.js";

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use((config) => {
	let params = new URLSearchParams();
	let token 	= store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
	params.append('auth', token);
	config.params = params;
	return config;
});

export default axiosInstance;