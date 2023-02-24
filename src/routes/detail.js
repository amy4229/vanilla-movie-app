import Component from '../core/component';
import movieStore, { getMovieDetails } from '../stores/movie.js'

export default class Detail extends Component {
  async render() {

    this.el.classList.add("movie-detail", "container");
    this.el.innerHTML = /*html */`
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `
    await getMovieDetails(history.state.id);
    const { Actors, Country, Director, Genre, Plot, Title, Poster, Production, Released, Runtime, Ratings } = movieStore.state.movie;
    const resize_poster = Poster.replace("SX300", "SX500");
    this.el.innerHTML = /*html*/`
      <div style="background-image:url('${resize_poster}')" class="poster"></div>
      <div class="specs">
        <div class="title"> ${Title}</div>
        <div class="labels">
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
      </div>
      
    `

  }
}