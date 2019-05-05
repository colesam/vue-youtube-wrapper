<template>
  <div id="app">
    <nav-bar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
