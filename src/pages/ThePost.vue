<template>
	Post page
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { GET_USER_TOKEN_GETTER } from "../store/storeconsts.js";

export default {

name: 'ThePost',

data() {
return {

};
},
computed: {
	...mapGetters('auth', {
		token : GET_USER_TOKEN_GETTER
	})
},
mounted(){
axios
.get(`https://vue-auth-a6fbb-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?auth=${this.token}`)
.then((response) => {
	console.log(response);
})
}
};
</script>

<style lang="css" scoped>
</style>
