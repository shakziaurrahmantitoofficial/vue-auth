<template>
	Login {{firstName}}
</template>

<script>
import { mapState } from "vuex";

export default {
  data () {
    return {

    }
  },
  computed : {
    ...mapState("auth", {
      firstName : (state) => state.name
    })
  }
}
</script>

<style lang="css" scoped>
</style>