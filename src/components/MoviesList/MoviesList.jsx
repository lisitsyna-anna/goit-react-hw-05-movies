import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from 'services/moviesAPI';
import Container from 'components/Container';
import {
  MoviesListStyled,
  MovieItem,
  MovieName,
  MovieImg,
  RealeseDate,
} from './MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ id, title, posterPath, releaseDate }) => (
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
    </MoviesListStyled>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
