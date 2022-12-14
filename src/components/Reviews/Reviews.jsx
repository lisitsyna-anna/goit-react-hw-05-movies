import RequestError from 'components/RequestError';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';

import { ReviewsList, Author } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(reviews => {
        setReviews(reviews);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setReviews([]);
      });
  }, [movieId]);

  return (
    <>
      {error && <RequestError />}
      {reviews.length > 0 && !error && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author: {author}</Author>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !error && (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
