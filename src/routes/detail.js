import Component from '../core/component';
import movieStore, { getMovieDetails } from '../stores/movie.js'

export default class Detail extends Component {
  async render() {
    this.el.classList.add("movie-detail", "container");
    await getMovieDetails(history.state.id);
    const { Actors, Country, Director, Genre, Plot, Title, Poster, Production, Released, Runtime, Ratings } = movieStore.state.movie;
    this.el.innerHTML = /*html*/`
      <div style="background-image:url('${Poster}')" class="poster"></div>
      <div class="title"> ${Title}</div>
      <div class="lables">
        <span>${Released}</span>
        &nbsp;/&nbsp;
        <span>${Runtime}</span>
        &nbsp;/&nbsp;
        <span>${Country}</span>
      </div>
      <div class="plot">
        ${Plot}
      </div>
      <div>
        <h3>Ratings</h3>
        ${Ratings.map(rating => `<p>${rating.Source} : ${rating.Value}</p>`).join("")}
      </div>
      <div>
        <h3>Actors</h3>
        <p>${Actors}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>${Director}</p>
      </div>
      <div>
        <h3>Production</h3>
        <p>${Production}</p>
      </div>
      <div>
        <h3>Genre</h3>
        <p>${Genre}</p>
      </div>
    `

  }
}