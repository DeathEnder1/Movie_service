package com.buncua.movies.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.buncua.movies.models.Movie;
import com.buncua.movies.service.MovieService;


@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping("")
    public List<Movie> getAllMovies() {
        return movieService.allMovies();
    }
    @GetMapping("/{id}")
    public Optional<Movie> getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/admin")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/admin/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
        return movieService.updateMovie(id, movieDetails);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/admin/{id}")
    public void deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
    }
    @GetMapping("/search/{title}")
    public List<Movie> searchByTitle(@PathVariable String title) {
        return movieService.searchByTitle(title);
    }

    @GetMapping("/category/{category}")
    public List<Movie> getMoviesByCategory(@PathVariable String category) {
    return movieService.getMoviesByCategory(category);
    }

    @GetMapping("/year/{year}")
    public List<Movie> getMoviesByYear(@PathVariable int year) {
    return movieService.getMoviesByYear(year);
    }

    @GetMapping("/genre/{genre}")
    public List<Movie> searchMoviesByGenres(@RequestParam List<String> genres) {
    return movieService.getMoviesByGenres(genres, genres.size());
    }

    @GetMapping("/category/{category}/year/{year}")
    public List<Movie> getMoviesByCategoryAndYear(@PathVariable String category, @PathVariable int year) {
    return movieService.getMoviesByCategoryAndYear(category, year);
    }

}