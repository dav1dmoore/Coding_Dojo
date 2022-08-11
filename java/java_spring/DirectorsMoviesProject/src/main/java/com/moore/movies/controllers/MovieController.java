package com.moore.movies.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.moore.movies.models.Movie;
import com.moore.movies.services.MovieService;

@Controller
public class MovieController {
	
	private final MovieService movieService;
	
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
	}

	@GetMapping("/home")
	public String displayHome(Model model) {
		List<Movie> allMovies = this.movieService.findAllMovies();
		model.addAttribute("movies", allMovies);
		return "home.jsp";
	}
}
