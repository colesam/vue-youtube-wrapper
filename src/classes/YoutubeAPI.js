import axios from 'axios'

export default class YoutubeAPI {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  search(query) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseUrl}/search`, {
          params: {
            key: this.apiKey,
            part: 'snippet',
            maxResults: 25,
            q: query
          }
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
  }
}
