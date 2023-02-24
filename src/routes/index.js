import createRouter from '../core/router.js';
import Home from './home.js';
import Detail from './detail.js';
import About from './about.js';
import NotFound from './notFound.js'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Detail },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }
])