package com.moore.movies.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.moore.movies.models.Movie;
import com.moore.movies.repositories.MovieRepository;

@Service
public class MovieService {
	private final MovieRepository movieRepository;
	
	public MovieService( MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}
	
	public List<Movie> findAllMovies(){
		return movieRepository.findAll();
	}
}
