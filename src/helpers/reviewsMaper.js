export const reviewsMaper = reviews => {
  return reviews.map(({ id, author, content }) => ({ id, author, content }));
};
