package com.moore.bundler.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.moore.bundler.models.Baby;
import com.moore.bundler.services.BabyService;
import com.moore.bundler.services.UserService;

@Controller
public class BabyController {
	
	@Autowired
	private BabyService babyServ;
	
	@Autowired
	private UserService userServ;

	 @GetMapping("/names/new")
	 public String index(Model model, HttpSession session) {
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		
	     model.addAttribute("newName", new Baby());
	     return "addname.jsp";
	 }
	 
		@PostMapping("/createName")
		public String courseCreate(@Valid @ModelAttribute("newName") Baby baby, BindingResult result, Model model, HttpSession session) {
			Baby addBaby = babyServ.addBaby(baby, result);
			if(result.hasErrors()) {
				return "addname.jsp";
			}
			return "redirect:/home";

		}
		
		 @GetMapping("/names/{id}")
		 public String showBaby(Model model, HttpSession session, @PathVariable("id") Long id) {
			if (session.getAttribute("userId") == null) {
				return "redirect:/";
			}
			Long userId = (Long) session.getAttribute("userId");
			 model.addAttribute("user", userServ.findUserById(userId));
		     model.addAttribute("baby", babyServ.oneBaby(id));
		     return "onebaby.jsp";
		 }
		 
		 @GetMapping("/names/edit/{id}")
		 public String editCourse(@PathVariable("id") Long id, Model model, HttpSession session) {
			 
			if (session.getAttribute("userId") == null) {
				return "redirect:/";
			}
			model.addAttribute("baby", babyServ.oneBaby(id));
			return "editbaby.jsp";
		 }
		 
			@PutMapping("/babyedit/{id}")
			public String editBaby(@PathVariable("id") Long id, @Valid @ModelAttribute("baby") Baby baby, BindingResult result, Model model) {
				if(result.hasErrors()) {
					return "editbaby.jsp";
				} else {
					babyServ.updateBaby(baby);
					return "redirect:/home";
				}
			}
			
			@DeleteMapping("/baby/{id}/delete")
			public String deleteBaby(@PathVariable("id") Long id) {
				babyServ.deleteById(id);
				return "redirect:/home";
			}
}
