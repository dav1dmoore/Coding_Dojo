package com.example.demo;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@SpringBootApplication

@Controller
public class HumanController {
	
	@RequestMapping("/")
		public String index(Model model) {
		model.addAttribute("name", "Sara");
		return "demo.jsp";
	}
    
//	@RequestMapping("/{firstName}/{lastName}")
//    public String index(@PathVariable("firstName") String firstName, 
//    		@PathVariable("lastName") String lastName){
//		if(firstName == null) {
//			firstName = "Human!";
//		} else if(lastName == null) {
//			return "Hello " + firstName;
//		} return "Hello " + firstName + " " + lastName;
//	}
	
//	@RequestMapping("/")
//    public String index(@RequestParam(value="firstName", required=false) String firstName, 
//    @RequestParam(value="lastName", required=false) String lastName) {
//		if(firstName == null) {
//			firstName = "Human!";
//		} else if(lastName == null) {
//			return "Hello " + firstName;
//		} return "Hello " + firstName + " " + lastName;
//	}
	
	//http://localhost:8080/?firstName=David&lastName=Moore
}
