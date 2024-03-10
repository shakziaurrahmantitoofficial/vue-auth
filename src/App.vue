<template>
  <TheLoading v-if="showLoading"></TheLoading>
  <NavbarPage></NavbarPage>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarPage from "./pages/NavbarPage.vue";
import TheLoading from "./components/TheLoading.vue";
import {mapState} from "vuex";
import { AUTO_LOGIN_ACTION } from "./store/storeconsts.js";

export default {
  name: 'App',
  computed : {
    ...mapState({
      showLoading : (state) => state.showLoading
    })
  },
  components : {
    NavbarPage,
    TheLoading
  },
  created(){
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  }
}
</script>

<style>
</style>
