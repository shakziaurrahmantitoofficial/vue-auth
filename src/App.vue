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
  }
}
</script>

<style>
</style>
