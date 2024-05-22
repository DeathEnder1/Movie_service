package com.buncua.movies.service;
import com.buncua.movies.models.Movie;
import com.buncua.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
        return movieRepository.findAll();
    } 
    public Optional<Movie> getMovieById(Long id) {
        return movieRepository.findById(id);
    }
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }
    public Movie updateMovie(Long id, Movie movieDetails) {
        Movie movie = movieRepository.findById(id).orElseThrow();
        movie.setVideo(movieDetails.getVideo());
        movie.setPreviewimg(movieDetails.getPreviewimg());
        movie.setBgimg(movieDetails.getBgimg());
        movie.setTitleimg(movieDetails.getTitleimg());
        movie.setTitle(movieDetails.getTitle());
        movie.setYear(movieDetails.getYear());
        movie.setDate(movieDetails.getDate());
        movie.setAgelimit(movieDetails.getAgelimit());
        movie.setLength(movieDetails.getLength());
        movie.setCategory(movieDetails.getCategory());
        movie.setType(movieDetails.getType());
        movie.setDescription(movieDetails.getDescription());
        return movieRepository.save(movie);
    }
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
}