
const APIKEY ="a5e326bc2246f6c1bd6cc25850d2177d";

const movieRequestUrl ={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRatedMovies:`movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentarie:`discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default movieRequestUrl;