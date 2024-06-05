import axios from 'axios';
import authHeader from './auth-header';
const MOVIE_API_BASE_URL = "http://localhost:8080/movies/admin";

class MovieService{


    createMovie(movie){
        return axios.post(MOVIE_API_BASE_URL, movie, { headers: authHeader() });
    }


    updateMovie(movieId, movie){ 
        return axios.put(MOVIE_API_BASE_URL + '/' + movieId, movie, { headers: authHeader() });
    }

    deleteMovie(movieId){
        return axios.delete(MOVIE_API_BASE_URL + '/' + movieId, { headers: authHeader() });
    }

}

export default new MovieService()
