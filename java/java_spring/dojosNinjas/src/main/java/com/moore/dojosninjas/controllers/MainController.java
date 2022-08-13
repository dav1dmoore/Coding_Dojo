package com.moore.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.moore.dojosninjas.models.Dojo;
import com.moore.dojosninjas.models.Ninja;
import com.moore.dojosninjas.services.DojoService;
import com.moore.dojosninjas.services.NinjaService;

@Controller
public class MainController {
	

	@Autowired
	private DojoService dojoService;
	
	@Autowired
	private NinjaService ninjaService;
	
	@GetMapping("/dojos")
	public String dojoHome(@ModelAttribute("dojo") Dojo dojo){
		return "index.jsp";
	}
	
	@PostMapping("/dojos/create")
	public String dojoCreate(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		} else {
		Dojo newDojo = dojoService.createDojo(dojo);
		return "redirect:/dojos";
		}
	}
	
	@GetMapping("/ninjas")
	public String ninjaHome( @ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.dojos();
		model.addAttribute("dojos", dojos);
		return "ninjas.jsp";
	}
	
	@PostMapping("/ninjas/create")
	public String ninjaCreate(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Dojo> dojos = dojoService.dojos();
			model.addAttribute("dojos", dojos);
			return "ninjas.jsp";
		} else {
		Ninja newNinja = ninjaService.createNinja(ninja);
		return "redirect:/ninjas";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String dojoShow(Model model, @PathVariable("id") Long id){
		model.addAttribute("dojos", dojoService.showDojo(id));
		return "location.jsp";
	} 
}