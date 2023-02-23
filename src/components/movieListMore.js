import Component from '../core/component';
import movieStore, { searchMovies } from '../stores/movie';

export default class MovieListMore extends Component {
  constructor() {
    super({ tagName: "button" });

    movieStore.subscribe('maxPage', () => {
      const { page, maxPage } = movieStore.state;
      maxPage > page
        ? this.el.classList.remove('hide')
        : this.el.classList.add('hide');
    })
  }

  render() {
    this.el.classList.add('btn', 'view-more', 'hide');
    this.el.textContent = 'View more..';

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide');
      await searchMovies(movieStore.state.page + 1);
    });
  }

}