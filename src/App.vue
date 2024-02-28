<template>
  <NavbarPage></NavbarPage>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarPage from "./pages/NavbarPage.vue";

export default {
  name: 'App',
  components : {
    NavbarPage
  }
}
</script>

<style>
</style>
