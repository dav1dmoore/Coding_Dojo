package com.moore.movies.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.moore.movies.models.User;
import com.moore.movies.services.UserService;

@Controller
public class UserController {
	
	private final UserService userService;
	
	
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/")
	public String displayLogin( @ModelAttribute("user") User user) {
		return "index.jsp";
	}
	
	@RequestMapping(value="/process/login", method=RequestMethod.POST)
	public String processLogin(@RequestParam( value="userName") String userName, @RequestParam( value="password") String password, HttpSession session, RedirectAttributes redirectAttributes){
		
		User currentUser = userService.findUserLogin(userName, password);
		
			if(currentUser != null) {
				session.setAttribute("firstName", currentUser.getFirstName());
				session.setAttribute("lastName", currentUser.getLastName());
				session.setAttribute("userId", currentUser.getId());
				return "redirect:/home";
			}
		
		redirectAttributes.addFlashAttribute("errorLogin", "Wrong Credentials!");
    	return "redirect:/";
		
	}
	
//	/process/registration
	
	@PostMapping("/process/registration")
	public String processRegistration( @Valid @ModelAttribute("user") User newUser, BindingResult bindingResult, HttpSession session) {
		
		if( bindingResult.hasErrors()) {
			return "index.jsp";
		}
		//Come back and call service
		User currentUser = userService.saveUser(newUser);
		session.setAttribute("firstName", newUser.getFirstName());
		session.setAttribute("lastName", newUser.getLastName());
		//TODO: Validate registration
		
		return "redirect:/home";
	}
	
	
	
	
	@RequestMapping(value="/home")
	public String displayHome() {
		return "home.jsp";
	}
	
	@GetMapping("user/{id}/edit")
	public String displayUserUpdate(@ModelAttribute("user") User user, 
									@PathVariable("id") Long id,
									Model model ) {
		user = userService.findUserById(id);
		model.addAttribute("user", user);
		return "editUser.jsp";
	}
	
	@PutMapping("/user/{id}/edit")
	public String userUpdate(@Valid @ModelAttribute("user") User user,
									BindingResult bindingResult,
									@PathVariable("id") Long id,
									HttpSession session) {
		if(bindingResult.hasErrors()) {
			return "editUser.jsp";
		}
		userService.saveUser(user);
		session.setAttribute("firstName", user.getFirstName());
		session.setAttribute("lastName", user.getLastName());
		return "redirect:/home";
	}
	
	@DeleteMapping("/user/{id}/delete")
	public String userDelete(@PathVariable("id") Long id, HttpSession session) {
		// Call the service
		Long userIdInSession = (Long) session.getAttribute("userId");
		if( id == userIdInSession) {
		userService.deleteById(id);
		} else {
			System.out.println("You are trying to outsmart us. Go back to the login!");
		}
		session.invalidate();
		return "redirect:/";
	}
	
	@GetMapping("/process/logout")
	public String userLogout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}

