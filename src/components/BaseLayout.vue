<template>
  <div class="base">
    <nav-bar @search="$emit('search', $event)" />
    <slot></slot>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: { NavBar }
}
</script>

<style lang="scss">
.base {
  min-height: 100vh;
}
</style>
