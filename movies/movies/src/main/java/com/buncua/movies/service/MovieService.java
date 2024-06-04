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
        movie.setVideo2(movieDetails.getVideo2());
        return movieRepository.save(movie);
    }
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
    
    public List<Movie> searchByTitle(String title) {
        return movieRepository.findByTitleContaining(title);
    }

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getMoviesByCategory(String category) {
        return movieRepository.findByCategory(category);
    }

    public List<Movie> getMoviesByYear(int year) {
        return movieRepository.findByYear(year);
    }

    public List<Movie> getMoviesByCategoryAndYear(String category, int year) {
        return movieRepository.findByCategoryAndYear(category, year);
    }
    public List<Movie> getMoviesByGenres(List<String> genres, long size) {
        return movieRepository.findByGenres(genres, size);
    }
}