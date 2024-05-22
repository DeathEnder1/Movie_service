package com.buncua.movies.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.buncua.movies.models.Movie;
import com.buncua.movies.repository.MovieRepository;
import com.buncua.movies.service.MovieService;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {
    // @Autowired
    // private MovieRepository MovieRepository;

    // @GetMapping("")
    // public List<Movie> getAllMovies() {
    //     return MovieRepository.findAll();
    // }
    @Autowired
    private MovieService movieService;
    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.allMovies();
    }
    @GetMapping("/{id}")
    public Optional<Movie> getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }
    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }
    @PutMapping("/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
        return movieService.updateMovie(id, movieDetails);
    }
    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
    }
}
// @Controller
// public class MovieController {

//     @Autowired
//     private MovieService movieService;

//     @GetMapping("/movies")
//     public String getAllMovies(Model model) {
//         List<Movie> movies = movieService.allMovies();
//         // Initialize lists to avoid null pointers
//         for (Movie movie : movies) {
//             if (movie.getGenres() == null) {
//                 movie.setGenres(new ArrayList<>());
//             }
//             if (movie.getBackdrops_link() == null) {
//                 movie.setBackdrops_link(new ArrayList<>());
//             }
//         }
//         model.addAttribute("movies", movies);
//         return "movies";
//     }
//     }
