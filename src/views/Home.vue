<template>
  <div>
    <base-layout @search="handleSearch">
      <h1>Home View</h1>
    </base-layout>
  </div>
</template>

<script>
import config from '../config'
import YoutubeAPI from '../classes/YoutubeAPI'
import BaseLayout from '../components/BaseLayout'

export default {
  name: 'app',

  components: { BaseLayout },

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
