import Container from 'components/Container';
import RequestError from 'components/RequestError';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies, IMAGE_URL } from 'services/moviesAPI';

import {
  Title,
  MoviesList,
  MovieItem,
  MovieName,
  RealeseDate,
  MovieImg,
} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(setTrendingMovies)
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  }, []);

  if (!trendingMovies) {
    return;
  }
  return (
    <main>
      <Title>Trending today</Title>
      {error && <RequestError />}
      {trendingMovies.length > 0 && (
        <MoviesList>
          {trendingMovies.map(({ id, title, posterPath, releaseDate }) => (
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
                  <MovieName>
                    {title ? title : 'There is no title here yet. '}
                  </MovieName>
                  <RealeseDate>
                    {releaseDate ? new Date(releaseDate).getFullYear() : '---'}
                  </RealeseDate>
                </Container>
              </Link>
            </MovieItem>
          ))}
        </MoviesList>
      )}
    </main>
  );
};

export default Home;
