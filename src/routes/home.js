import Component from '../core/component.js';
import Headline from '../components/headline';
import Search from '../components/search';
import MovieList from '../components/movieList.js';
import MovieListMore from '../components/movieListMore.js';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movieListMore = new MovieListMore().el;

    this.el.classList.add('container');
    this.el.append(headline, search, movieList, movieListMore);
  }
}