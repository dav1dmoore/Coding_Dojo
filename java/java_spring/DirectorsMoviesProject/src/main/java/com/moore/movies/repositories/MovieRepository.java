package com.moore.movies.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.movies.models.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
	List<Movie> findAll();
	Movie

}
