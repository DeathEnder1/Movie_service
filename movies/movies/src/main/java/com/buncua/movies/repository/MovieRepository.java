package com.buncua.movies.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.buncua.movies.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}