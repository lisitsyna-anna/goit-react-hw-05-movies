export const moviesMaper = movies => {
  return movies.map(
    ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
      id,
      title,
      posterPath,
      releaseDate,
    })
  );
};
