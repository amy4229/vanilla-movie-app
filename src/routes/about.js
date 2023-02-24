import Component from '../core/component.js';
import aboutStore from '../stores/aboutStore.js';

export default class About extends Component {
  render() {
    const { photo, name, blog, github, repository } = aboutStore.state;
    this.el.classList.add("about", "container");
    this.el.innerHTML = /*html */`
      <div class="photo" style="background-image: url('${photo}')"></div>
      <p class="name">${name}</p>
      <p><a href="${blog}" target="_blank">Blog</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
    `
  }
}