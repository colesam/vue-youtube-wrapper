import Home from './views/Home'
import VideoList from './views/VideoList'
import Video from './views/Video'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/list', name: 'list', component: VideoList },
  { path: '/watch/:id', name: 'watch', component: Video }
]
