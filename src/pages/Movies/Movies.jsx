import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { getMovieByQuery } from 'services/moviesAPI';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

import { SearchTitle } from './Movies.styled';

import RequestError from 'components/RequestError';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setSearchMovies([]);
      return;
    }

    if (searchQuery.trim() === '' || searchQuery === '') {
      toast.error('Enter valid word');
      return;
    }

    getMovieByQuery(searchQuery.toLowerCase().trim())
      .then(movies => {
        setSearchMovies(movies);
        if (movies.length === 0) {
          toast.error('There are no movies for this search');
        }
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setSearchMovies([]);
        setError(error);
      });
  }, [searchQuery]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <section>
        <SearchTitle>Search movies</SearchTitle>
        <SearchForm onSubmit={onSubmit} value={searchQuery} />
        {error && <RequestError />}
        {searchMovies?.length > 0 && (
          <MoviesList movies={searchMovies} location={location} />
        )}
      </section>
    </main>
  );
};

export default Movies;
