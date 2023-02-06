const API_KEY = "72965ba087b3eda28dee38dfede7038d";

const useFetch = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netplixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default useFetch;
