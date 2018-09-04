export const cleanMoviesData = async (movies) => {
  return movies.map(movie => {
    const { id, title, poster_path, release_date, vote_average, overview } = movie;
    const fullPosterPath = `https://image.tmdb.org/t/p/w200${poster_path}`;
    return (
      {
        movie_id: id,
        title,
        poster_path: fullPosterPath,
        release_date,
        vote_average,
        overview
      }
    );
  });
};