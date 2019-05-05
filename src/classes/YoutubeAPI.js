import axios from 'axios'

export default class YoutubeAPI {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  search(query) {
    axios
      .get(`${this.baseUrl}/search`, {
        params: {
          key: this.apiKey,
          part: 'snippet',
          maxResults: 25,
          q: query
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
