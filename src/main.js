import config from './config'
import Vue from 'vue'
import App from './App.vue'
import YoutubeAPI from './classes/YoutubeAPI'
import './registerServiceWorker'

window.youtubeAPI = new YoutubeAPI(config.YOUTUBE_API_URL, config.YOUTUBE_API_KEY)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
