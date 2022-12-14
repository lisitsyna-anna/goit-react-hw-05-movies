import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import FadeLoader from 'react-spinners/ClipLoader';
import { getMovieById, IMAGE_URL } from 'services/moviesAPI';

import RequestError from 'components/RequestError';
import BackLink from 'components/BackLink';
import {
  Title,
  MainSection,
  MovieName,
  InfoList,
  AdditionalSection,
  AdditionalTitle,
  LinkList,
  StyledNavLink,
} from './MovieDetails.styled';
import Container from 'components/Container';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(Number(movieId))
      .then(movie => {
        setMovie(movie);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setMovie(null);
      });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {!movie && error && <RequestError />}
      {movie && (
        <>
          <MainSection>
            <Title>Movie details</Title>
            <img
              src={
                movie.posterPath
                  ? IMAGE_URL + movie.posterPath
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={movie.title}
              width={250}
            />
            <Container as="div" display="flex" flexDirection="column">
              <MovieName>
                {movie.title ? movie.title : 'There is no title yet'} (
                {new Date(movie.releaseDate).getFullYear()})
              </MovieName>
              <InfoList>
                <li>
                  <p>
                    <b>User score: </b>
                    {movie.voteAverage.toFixed(1)}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Overview:</b> {movie.overview}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Genres:</b>{' '}
                    {movie.genres.map(genre => genre.name).join(', ')}
                  </p>
                </li>
              </InfoList>
            </Container>
          </MainSection>

          <AdditionalSection>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <LinkList>
              <li>
                <StyledNavLink to="cast" state={{ from: backLinkHref }}>
                  Cast
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </StyledNavLink>
              </li>
            </LinkList>
            <Suspense
              fallback={
                <FadeLoader
                  color="#2196F3"
                  cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                  }}
                  height={50}
                  loading
                  margin={0}
                  width={5}
                />
              }
            >
              <Outlet />
            </Suspense>
          </AdditionalSection>
        </>
      )}
    </>
  );
};

export default MovieDetails;
