<template>
  <h2>Register</h2>
  <hr>

  <div class="alert alert-danger" v-if="error">{{error}}</div>

  <form @submit.prevent="onLogin()">
  <div class="mb-3">
    <label for="foremail" class="form-label">Email address</label>
    <input type="text" class="form-control" v-model="email" id="foremail">
    <div id="emailHelp" class="form-text" v-if="errors.email">{{errors.email}}</div>
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="text" class="form-control" v-model="password" id="password">
    <div id="emailHelp" class="form-text" v-if="errors.password">{{errors.password}}</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</template>

<script>
import singupvalidation from "../services/singupvalidation.js";
import {mapActions} from "vuex";
import {SINGUP_ACTION} from "../store/storeconsts.js";

export default {
  data () {
    return {
      email : "",
      password : "",
      errors : [],
      error : ''
    }
  },
  methods : {
    ...mapActions('auth', {
      singups : SINGUP_ACTION
    }),
    onLogin(){
      let validations = new singupvalidation(
        this.email,
        this.password
      );
      this.errors = validations.checkValidations();

      if("email" in this.errors || "password" in this.errors){
        return false;
      }

      this.singups({email: this.email, password : this.password}).catch((error) => {
        this.error = error;
      });

    }
  }
}
</script>

<style lang="css" scoped>
</style>