import Home from './views/Home'
import Video from './views/Video'

export default [
  { path: '/', name: 'Home', component: Home },
  { path: '/watch/:id', name: 'Video', component: Video }
]
