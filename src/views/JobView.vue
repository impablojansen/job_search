<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>Job Page</div>
</template>
