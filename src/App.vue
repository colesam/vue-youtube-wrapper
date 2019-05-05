<template>
  <div id="app">
    <nav-bar @search="handleSearch" />
  </div>
</template>

<script>
import config from './config'
import YoutubeAPI from './classes/YoutubeAPI'
import NavBar from '@/components/NavBar'

export default {
  name: 'app',

  components: { NavBar },

  data() {
    return {
      api: null
    }
  },

  methods: {
    handleSearch({ query }) {
      this.api.search(query)
    }
  },

  beforeMount() {
    this.api = new YoutubeAPI(config.YOUTUBE_API_URL, config.YOUTUBE_API_KEY)
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
