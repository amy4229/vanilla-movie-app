import Component from './core/component.js'
import Header from './components/header.js';
import Footer from './components/footer.js';

export default class App extends Component {
  render() {
    const header = new Header().el;
    const routerView = document.createElement('router-view');
    const footer = new Footer().el;
    this.el.append(header, routerView, footer);
  }
}