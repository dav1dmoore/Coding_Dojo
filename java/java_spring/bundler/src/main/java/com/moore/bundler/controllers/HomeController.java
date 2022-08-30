package com.moore.bundler.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.moore.bundler.models.LoginUser;
import com.moore.bundler.models.User;
import com.moore.bundler.services.BabyService;
import com.moore.bundler.services.UserService;

//.. don't forget to include all your imports! ..

@Controller
public class HomeController {
 
 // Add once service is implemented:
  @Autowired
  private UserService userServ;
  
  @Autowired
  private BabyService babyServ;
 
 @GetMapping("/")
 public String index(Model model) {
 
     // Bind empty User and LoginUser objects to the JSP
     // to capture the form input
     model.addAttribute("newUser", new User());
     model.addAttribute("newLogin", new LoginUser());
     return "index.jsp";
 }
 
 @GetMapping("/home")
 public String dashboard(Model model, HttpSession session) {
	 
	if (session.getAttribute("userId") == null) {
		return "redirect:/";
	}
	Long userId = (Long) session.getAttribute("userId");
	model.addAttribute("user", userServ.findUserById(userId));
	model.addAttribute("babies", babyServ.allBabies());
	return "home.jsp";
 }
 
 @GetMapping("/logout")
 public String logout(HttpSession session) {
	session.invalidate();
	return "redirect:/";
 }
 
 @PostMapping("/register")
 public String register(@Valid @ModelAttribute("newUser") User newUser, 
         BindingResult result, Model model, HttpSession session) {
     
     // TO-DO Later -- call a register method in the service 
     // to do some extra validations and create a new user!
	 User createUser = userServ.register(newUser, result);
     if(result.hasErrors()) {
         // Be sure to send in the empty LoginUser before 
         // re-rendering the page.
         model.addAttribute("newLogin", new LoginUser());
         return "index.jsp";
     }

     // No errors! 
     // TO-DO Later: Store their ID from the DB in session, 
     // in other words, log them in.
     if(!result.hasErrors()) {
	session.setAttribute("userId", createUser.getId());
	session.setAttribute("userName", createUser.getUserName());
	return "redirect:/home";
     }
     return "index.jsp";
 }
 
 @PostMapping("/login")
 public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
         BindingResult result, Model model, HttpSession session) {
     
     // Add once service is implemented:
     User user = userServ.login(newLogin, result);
     
     if(result.hasErrors()) {
         model.addAttribute("newUser", new User());
         return "index.jsp";
     }
     
	session.setAttribute("userId", user.getId());
	session.setAttribute("userName", user.getUserName());
	return "redirect:/home";
     // No errors! 
     // TO-DO Later: Store their ID from the DB in session, 
     // in other words, log them in.
 }
 
 @PostMapping("/addVote")
 public String addVote(Model model, HttpSession session, @RequestParam("babyId") Long babyId) {
	 
	if (session.getAttribute("userId") == null) {
		return "redirect:/";
	}
	Long userId = (Long) session.getAttribute("userId");
	userServ.addUserLike(userId, babyId);
	return "redirect:/home";
 }
 
 
 
}

