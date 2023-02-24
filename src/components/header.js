import Component from '../core/component';

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header"
      , state: {
        menus: [
          { name: 'Search', href: '#/' }
          , { name: 'Movie', href: '#/movie?id=tt0304141' }
          , { name: 'About', href: '#/about' }
        ]
      }
    });

    window.addEventListener("popstate", () => {
      this.render();
    })

  }

  render() {
    this.el.innerHTML = /*html*/ `
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
      const href = menu.href.split("?")[0];
      const hash = location.hash.split("?")[0];
      const isActive = href === hash;
      return `
              <li>
                <a href=${menu.href} ${isActive ? "class='active'" : ''}>${menu.name}</a>
              </li >
        `
    }).join("")}
        </ul>
      </nav >
      <a href="#/about" class="developer">
        <img src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F3010158%2Fattach%2F8e6343d171044eec8d7a78d4f2ede62d" alt="Developer"/>
      </a>
  `;

  }

}
