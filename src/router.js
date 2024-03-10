import {createRouter, createWebHistory} from 'vue-router';
import Login from "./pages/Login-Page.vue";
import Home from "./pages/TheHome.vue";
import Register from "./pages/Register-Page.vue";
import ThePost from "./pages/ThePost.vue";
import store from './store/store.js';
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconsts.js';



const routes = [
		{path : "/", component: Home},
		{path : "/login", component: Login, meta : { auth : false}},
		{path : "/register", component: Register, meta : { auth : false}},
		{path : "/post", component: ThePost, meta : { auth : true}}
	];

const router = createRouter({
	history : createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if('auth' in to.meta &&
		to.meta.auth &&
		!store.getters[`auth/${ IS_USER_AUTHENTICATE_GETTER }`]
		){
		next("/login");
	}else if('auth' in to.meta &&
		!to.meta.auth &&
		store.getters[`auth/${ IS_USER_AUTHENTICATE_GETTER }`]){
		next("/post");
	}else{
		next();
	}
})

export default router;
