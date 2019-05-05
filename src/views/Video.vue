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
import Searchable from '../components/mixins/Searchable'
import BaseLayout from '../components/BaseLayout'

export default {
  components: { BaseLayout },

  mixins: [Searchable]
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
