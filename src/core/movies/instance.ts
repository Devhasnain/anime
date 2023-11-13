import axios from "axios";

export const instense = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

const API_KEY = '186fb70cd1f15675c40438d3d7ae0899';

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&&with_genres=10749`,
    fetchDocumentories: `/discover/movie?api_key=${API_KEY}&&with_genres=99`,
};

export const Image_url = "https://image.tmdb.org/t/p/original";