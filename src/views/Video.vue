<template>
  <div class="Video">
    <base-layout @search="handleSearch">
      <div class="Video_wrapper">
        <iframe
          class="Video_iframe"
          :src="`https://www.youtube-nocookie.com/embed/${$route.params.id}`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
