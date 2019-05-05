import config from '../../config'
import YoutubeAPI from '../../classes/YoutubeAPI'

export default {
  data() {
    return {
      api: null
    }
  },

  methods: {
    handleSearch({ query }) {
      this.$router.push({ name: 'list', params: { query } })
    }
  },

  beforeMount() {
    this.api = new YoutubeAPI(config.YOUTUBE_API_URL, config.YOUTUBE_API_KEY)
  }
}
