<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>
<template>
  <h1 class="text-6xl font-bold">Job results page</h1>
  <button @click="goToHome">Go to home page</button>
</template>
