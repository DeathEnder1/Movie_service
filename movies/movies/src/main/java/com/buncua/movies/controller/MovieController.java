package com.buncua.movies.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

// @RestController
// @RequestMapping("/movies")
// public class MovieController {
//     @Autowired
//     private MovieRepository MovieRepository;

//     @GetMapping("")
//     public List<Movie> getAllMovies() {
//         return MovieRepository.findAll();
//     }
// }
@Controller
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/movies")
    public String getAllMovies(Model model) {
        model.addAttribute("movies", movieService.allMovies());
        return "movies";
    }
}