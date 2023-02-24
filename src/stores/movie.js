import Store from '../core/store'

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
  movie: {},
  maxPage: 1,
  loading: false,
  message: 'Search for the movie title'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }

  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=""&s=${store.state.searchText}&page=${page}`);
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies
        , ...Search
      ];

      store.state.maxPage = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error
    }
  } catch (error) {
    console.log(`searchMovies errors:`, error);
  } finally {
    store.state.loading = false;
  }

}

export const getMovieDetails = async id => {
  store.state.loading = true;
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=""&i=${id}&plot=full`);
    const movie = await res.json();
    store.state.movie = movie;
  } catch (error) {
    console.log('searchMovies errors:', error);
  }
  store.state.loading = false;
}
