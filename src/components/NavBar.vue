<template>
  <nav>
    <input
      v-model="query"
      @keyup.enter="search"
      class="form-control form-control-sm"
      type="text"
      placeholder="Search videos"
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },

  methods: {
    search() {
      console.log('searching...')
      this.$emit('search', { query: this.query })
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: #eee;
  padding: 15px 15%;
}
</style>
