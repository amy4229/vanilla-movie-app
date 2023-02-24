import Component from "../core/component.js"


export default class Footer extends Component {
  constructor() {
    super({ tagName: "footer" })
  }

  render() {
    this.el.innerHTML = /*html */`
      <div>
        <a href="https://github.com/amy4229/vinilla-movie-app">Github Repository</a>
      </div>
      <div>
        <a href="https://github.com/amy4229">${new Date().getFullYear()}</a>
      </div>
    `;
  }
}