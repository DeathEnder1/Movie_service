package com.buncua.movies.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.buncua.movies.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByTitleContaining(@Param("title") String title);
    List<Movie> findByCategory(@Param("category") String category);
    List<Movie> findByYear(@Param("year") int year);
    List<Movie> findByCategoryAndYear(@Param("category") String category, @Param("year") int year);
    @Query("SELECT m FROM Movie m JOIN m.genres g WHERE g IN :genres GROUP BY m.id HAVING COUNT(DISTINCT g) = :size")
    List<Movie> findByGenres(@Param("genres") List<String> genres, @Param("size") long size);
}
