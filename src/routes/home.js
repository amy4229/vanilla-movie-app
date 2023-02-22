import Component from '../core/component.js';

export default class Home extends Component {
  render() {
    this.el.innerHTML = '<h1>Hello, world!</h1>'
  }
}