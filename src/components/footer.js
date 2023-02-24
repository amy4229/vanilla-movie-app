import Component from "../core/component.js"
import aboutStore from '../stores/aboutStore.js';


export default class Footer extends Component {
  constructor() {
    super({ tagName: "footer" })
  }

  render() {
    const { repository, github } = aboutStore.state;
    this.el.innerHTML = /*html */`
      <div>
        <a href="${repository}">Github Repository</a>
      </div>
      <div>
        <a href="${github}">${new Date().getFullYear()}</a>
      </div>
    `;
  }
}