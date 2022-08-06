package com.example.demo;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication

@RestController
public class HumanController {
    
//	@RequestMapping("/{firstName}/{lastName}")
//    public String index(@PathVariable("firstName") String firstName, 
//    		@PathVariable("lastName") String lastName){
//		if(firstName == null) {
//			firstName = "Human!";
//		} else if(lastName == null) {
//			return "Hello " + firstName;
//		} return "Hello " + firstName + " " + lastName;
//	}
	
	@RequestMapping("/")
    public String index(@RequestParam(value="firstName", required=false) String firstName, 
    @RequestParam(value="lastName", required=false) String lastName) {
		if(firstName == null) {
			firstName = "Human!";
		} else if(lastName == null) {
			return "Hello " + firstName;
		} return "Hello " + firstName + " " + lastName;
	}
	
	//http://localhost:8080/?firstName=David&lastName=Moore
}
