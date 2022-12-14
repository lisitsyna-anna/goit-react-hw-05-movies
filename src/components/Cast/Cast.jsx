import Container from 'components/Container';
import RequestError from 'components/RequestError';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastsById, IMAGE_URL } from 'services/moviesAPI';

import { ActorsList, ActorItem, ActorImg } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCastsById(Number(movieId))
      .then(actors => {
        setActors(actors);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error);
        setActors([]);
      });
  }, [movieId]);

  return (
    <>
      {error && <RequestError />}
      {actors?.length > 0 && (
        <ActorsList>
          {actors.map(({ id, name, profilePath, character }) => (
            <ActorItem key={id}>
              <ActorImg
                src={
                  profilePath
                    ? IMAGE_URL + profilePath
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={name}
                width={200}
              />
              <Container
                as="div"
                p={10}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <b>{name}</b>
                <p>
                  <b>Character:</b> {character}
                </p>
              </Container>
            </ActorItem>
          ))}
        </ActorsList>
      )}
    </>
  );
};

export default Cast;
