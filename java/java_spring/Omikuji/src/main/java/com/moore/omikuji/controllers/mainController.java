package com.moore.omikuji.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class mainController {

	@RequestMapping( value="/omikuji")
	public String display(){
		return "index.jsp";
	}
	
	@RequestMapping(value="/show")
	public String displayShow(HttpSession session, Model model) {
		Integer num = (Integer) session.getAttribute("number");
		model.addAttribute("number", num);
		return "show.jsp";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(
	    @RequestParam(value="number") int number,
	    @RequestParam(value="city") String city,
	    @RequestParam(value="person") String person,
	    @RequestParam(value="hobby") String hobby,
	    @RequestParam(value="thing") String thing,
	    @RequestParam(value="saySomething") String saySomething,
	    HttpSession session){
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("saySomething", saySomething);
	    return "redirect:/show";
	}
	
	
}
