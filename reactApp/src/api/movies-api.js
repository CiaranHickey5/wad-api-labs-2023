export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=c7e99547767afd89b423d34ba170cbb9&language=en-US&include_adult=false&page=1`
  );
  return response.json();
};
