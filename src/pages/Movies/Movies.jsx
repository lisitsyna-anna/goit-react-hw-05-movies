import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import SearchForm from 'components/SearchForm';
import { getMovieByQuery, IMAGE_URL } from 'services/moviesAPI';

import {
  SearchTitle,
  MoviesList,
  MovieItem,
  MovieImg,
  MovieName,
  RealeseDate,
} from './Movies.styled';
import Container from 'components/Container';
import RequestError from 'components/RequestError';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      // toast('Enter a search term');
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
      })
      .catch(error => {
        console.log(error.message);
        setError(error);
      });
  }, [searchQuery]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      {error && <RequestError />}
      <section>
        <SearchTitle>Search movies</SearchTitle>
        <SearchForm onSubmit={onSubmit} value={searchQuery} />
        {searchMovies.length > 0 && (
          <MoviesList>
            {searchMovies.map(({ id, title, posterPath, releaseDate }) => (
              <MovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <MovieImg
                    src={
                      posterPath
                        ? IMAGE_URL + posterPath
                        : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                    }
                    alt={title}
                    loading="lazy"
                    width={250}
                  />
                  <Container as="div" p={10}>
                    <MovieName>{title}</MovieName>
                    <RealeseDate>
                      {new Date(releaseDate).getFullYear()}
                    </RealeseDate>
                  </Container>
                </Link>
              </MovieItem>
            ))}
          </MoviesList>
        )}
      </section>
    </main>
  );
};

export default Movies;
