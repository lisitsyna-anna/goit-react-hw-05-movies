import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
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
      .then(setMovie)
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, posterPath, releaseDate, genres, overview, voteAverage } =
    movie;

  // console.log('error', error);
  return (
    <>
      {error && <RequestError />}
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MainSection>
        <Title>Movie details</Title>
        <img
          src={
            posterPath
              ? IMAGE_URL + posterPath
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={title}
          width={250}
        />
        <Container as="div" display="flex" flexDirection="column">
          <MovieName>
            {title ? title : 'There is no title yet'} (
            {new Date(releaseDate).getFullYear()})
          </MovieName>
          <InfoList>
            <li>
              <p>
                <b>User score: </b>
                {voteAverage.toFixed(1)}
              </p>
            </li>
            <li>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </li>
            <li>
              <p>
                <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
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
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </AdditionalSection>
    </>
  );
};

export default MovieDetails;
