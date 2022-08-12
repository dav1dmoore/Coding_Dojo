package com.moore.movies.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.moore.movies.models.Movie;
import com.moore.movies.models.User;
import com.moore.movies.services.MovieService;
import com.moore.movies.services.UserService;

@Controller
public class MovieController {
	
	private final MovieService movieService;
	private final UserService userService;
	
	public MovieController(MovieService movieService, UserService userService) {
		this.movieService = movieService;
		this.userService = userService;
	}

	@GetMapping("/home")
	public String displayHome(Model model) {
		List<Movie> allMovies = this.movieService.findAllMovies();
		model.addAttribute("movies", allMovies);
		model.addAttribute("user_id", (Long)session.getAttribute);
		return "home.jsp";
	}
	
	@GetMapping("/display/createMovie")
	public String displayCreateMovie (@ModelAttribute("movie") Movie movie){
	return "createMovie.jsp";
	}
	
	@PostMapping("/create/movie")
	public String createMovie(@Valid @ModelAttribute("movie") Movie movie,
								BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "createMovie.jsp";
	}
		User currentUser = userService.findUserById(session.getAttribue("userId"));
		movie.setUser(currentUser);
		
		movieServce.saveMovie(movie);
		return "redirect:/home";
		
	}
	
	@GetMapping("/movie/{id}/edit")
	public String displayEditMovie(@ModelAttribute("movie") Movie movie, @PathVariable("id") Long id) {
		return "editMovie.jsp";
	}
	
}
