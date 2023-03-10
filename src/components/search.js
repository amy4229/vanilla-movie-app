import Component from '../core/component';
import movieStore, { searchMovies } from '../stores/movie';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /*html */`
      <input placeholder="Enter the movie title to search!"/>
      <button class = "btn btn-primary">Search!</button>
    `

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value;
    })
    if (movieStore.state.searchText) inputEl.value = movieStore.state.searchText

    inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    })

    const btnEl = this.el.querySelector("button");
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

  }

}