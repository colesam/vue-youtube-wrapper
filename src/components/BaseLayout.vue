<template>
  <div class="base">
    <nav-bar @search="handleSearch" />
    <slot></slot>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: { NavBar },

  methods: {
    handleSearch(params) {
      console.log('handling search...')
      this.$router.push({ name: 'list', params })
    }
  }
}
</script>

<style lang="scss">
.base {
  min-height: 100vh;
}
</style>
