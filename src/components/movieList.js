import Component from '../core/component';
import movieStore from '../stores/movie'
import MovieItem from './movieItem';

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => {
      this.render();
    })
    movieStore.subscribe('loading', () => {
      this.render();
    })
    movieStore.subscribe('message', () => {
      this.render();
    })

  }

  render() {
    this.el.classList.add('movie-list');

    this.el.innerHTML = /*HTML*/ `
      ${movieStore.state.message
        ? `<div class='message'> ${movieStore.state.message}</div>`
        : "<div class = 'movies'></div>"}
      <div class='loading hide'></div>
`;

    const moviesEL = this.el.querySelector('.movies');
    moviesEL?.append(
      ...movieStore.state.movies.map(movie => {
        return new MovieItem({
          movie
        }).el
      })
    );

    const loaderEl = this.el.querySelector('.loading');
    movieStore.state.loading ? loaderEl.classList.remove('hide') : loaderEl.classList.add('hide');
  }
}