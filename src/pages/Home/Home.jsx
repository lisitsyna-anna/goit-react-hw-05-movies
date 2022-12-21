import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import RequestError from 'components/RequestError';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

import { getTrendingMovies } from 'services/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(trendingMovies => {
        setTrendingMovies(trendingMovies);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setTrendingMovies([]);
      });
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {error && <RequestError />}
      {trendingMovies?.length > 0 && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
    </main>
  );
};

export default Home;
