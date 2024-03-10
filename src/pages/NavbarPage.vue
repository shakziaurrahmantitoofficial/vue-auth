<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarNav"> -->
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item" v-if="isAuthenticated"><router-link class="nav-link" to="/post">Post</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link class="nav-link" to="/login">Login</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link class="nav-link" to="/register">SignUp</router-link></li>

        <li class="nav-item" v-if="isAuthenticated">
          <a href="#" class="nav-link" @click.prevent="onLogout()">Logout</a>
        </li>

      </ul>
    <!-- </div> -->
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from "../store/storeconsts.js";
export default {

  name: 'NavbarPage',
  computed : {
    ...mapGetters('auth', {
      isAuthenticated : IS_USER_AUTHENTICATE_GETTER
    })
  },
  data () {
    return {

    }
  },
  methods : {
    ...mapActions('auth', {
      logout : LOGOUT_ACTION
    }),
    onLogout(){
      this.logout();
      this.$router.replace('/login');
    }
  }
}
</script>

<style lang="css" scoped>
</style>