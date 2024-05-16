// package com.buncua.movies.models;

// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import jakarta.persistence.*;
// import java.util.List;

// @Entity
// @Table(name = "movies")
// @Data
// @AllArgsConstructor
// @NoArgsConstructor
// public class Movie {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(name = "imdb_id", nullable = false, unique = true)
//     private String imdb_id;

//     @Column(nullable = false)
//     private String title;

//     @Column(name = "release_date")
//     private String release_date;

//     @Column(name = "trailer_link")
//     private String trailer_link;

//     @Column
//     private String poster;

//     @Column 
//     private Boolean active;

//     @ElementCollection
//     @CollectionTable(name = "movie_genres", joinColumns = @JoinColumn(name = "movie_id"))
//     @Column(name = "genre")
//     private List<String> genres;

//     @ElementCollection
//     @CollectionTable(name = "movie_backdrops", joinColumns = @JoinColumn(name = "movie_id"))
//     @Column(name = "backdrop_link")
//     private List<String> backdrops_link;

    // Lombok will handle the generation of getters and setters
    // If you do not use Lombok, you need to manually add the getters and setters like this:

    /*
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImdb_id() {
        return imdb_id;
    }

    public void setImdb_id(String imdb_id) {
        this.imdb_id = imdb_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public String getTrailer_link() {
        return trailer_link;
    }

    public void setTrailer_link(String trailer_link) {
        this.trailer_link = trailer_link;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public List<String> getBackdrops() {
        return backdrops;
    }

    public void setBackdrops(List<String> backdrops) {
        this.backdrops = backdrops;
    }
    */
//}

package com.buncua.movies.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titleimg", nullable = false)
    private String titleimg;

    @Column(name = "bgimg", nullable = false)
    private String bgimg;

    @Column(name = "previewimg", nullable = false)
    private String previewimg;

    @Column(name = "video", nullable = false)
    private String video;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "year", nullable = false)
    private String year;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "agelimit", nullable = false)
    private String agelimit;

    @Column(name = "length", nullable = false)
    private String length;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "active", nullable = false)
    private Boolean active;
}
