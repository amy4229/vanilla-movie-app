import App from './app.js'
import router from './routes'

const root = document.querySelector('#root');
root.append(new App().el);

router();