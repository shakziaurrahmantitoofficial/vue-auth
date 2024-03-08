import {createRouter, createWebHistory} from 'vue-router';
import Login from "./pages/Login-Page.vue";
import Register from "./pages/Register-Page.vue";
import ThePost from "./pages/ThePost.vue";

const routes = [
		{path : "/login", component: Login},
		{path : "/register", component: Register},
		{path : "/post", component: ThePost}
	];

const router = createRouter({
	history : createWebHistory(),
	routes
});

export default router;
