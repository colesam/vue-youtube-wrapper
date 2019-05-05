<template>
  <div class="Video">
    <base-layout @search="handleSearch"> </base-layout>
  </div>
</template>

<script>
import config from '../config'
import YoutubeAPI from '../classes/YoutubeAPI'
import BaseLayout from '../components/BaseLayout'

export default {
  components: { BaseLayout },

  data() {
    return {
      api: null
    }
  },

  methods: {
    handleSearch({ query }) {
      this.api
        .search(query)
        .then(data => console.log(JSON.stringify(data)))
        .catch(err => console.log(err))
    }
  },

  beforeMount() {
    this.api = new YoutubeAPI(config.YOUTUBE_API_URL, config.YOUTUBE_API_KEY)

    const { query } = this.$route.params
    if (query !== undefined) {
      console.log('Would have searched: ' + query)
      //  this.handleSearch({ query })
    }
  }
}
</script>

<style lang="scss" scoped>
/* See: https://www.h3xed.com/web-development/how-to-make-a-responsive-100-width-youtube-iframe-embed */
.Video_wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.Video_iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
