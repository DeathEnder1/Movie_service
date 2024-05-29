package com.buncua.movies.repository;

import com.buncua.movies.models.MyUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<MyUsers, Integer> {
    
    Optional<MyUsers> findByEmail(String email);
}
