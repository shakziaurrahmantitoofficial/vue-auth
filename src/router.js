import {createRouter, createWebHistory} from 'vue-router';
import Login from "./pages/Login-Page.vue";
import Register from "./pages/Register-Page.vue";

const routes = [
		{path : "/login", component: Login},
		{path : "/register", component: Register},
	];

const router = createRouter({
	history : createWebHistory(),
	routes
});

export default router;
