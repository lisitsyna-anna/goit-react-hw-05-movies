import axios from 'axios';
import { moviesMaper, actorsMaper, reviewsMaper } from '../helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '723c3471611c46346c0c4849c0dae5f2';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const TRENGING_PATH = '/trending/movie/day';

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios(TRENGING_PATH, {
      params: {
        api_key: API_KEY,
      },
    });
    return moviesMaper(data.results);
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};

export const getMovieById = async movieId => {
  try {
    const { data } = await axios(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const {
      title,
      poster_path: posterPath,
      release_date: releaseDate,
      genres,
      overview,
      vote_average: voteAverage,
    } = data;
    return { title, posterPath, releaseDate, genres, overview, voteAverage };
  } catch (error) {
    console.log('Something wrong with API.', error.message);
  }
};

export const getCastsById = async movieId => {
  try {
    const { data } = await axios(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return actorsMaper(data.cast);
  } catch (error) {
    console.log('Something wrong with API.', error.message);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return reviewsMaper(data.results);
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};

export const getMovieByQuery = async query => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query,
        page: 1,
        include_adult: false,
      },
    });
    return moviesMaper(data.results);
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};
