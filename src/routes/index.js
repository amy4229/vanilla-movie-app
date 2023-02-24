import createRouter from '../core/router.js';
import Home from './home.js';
import Detail from './detail.js';
export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Detail }
])