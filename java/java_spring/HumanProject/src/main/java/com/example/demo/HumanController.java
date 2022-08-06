package com.example.demo;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication

@RestController
public class HumanController {
	
//    @RequestMapping(value="/")
//    public String hello(){
//      return "Hello world! What route did you use to access me?";
//    }
    
	@RequestMapping("/")
    public String index(@RequestParam(value="firstName", required=false) String firstName, 
    @RequestParam(value="lastName", required=false) String lastName) {
		if(firstName == null) {
			firstName = "Human!";
		} else if(lastName == null) {
			return "Hello " + firstName;
		} return "Hello " + firstName + " " + lastName;
	}
}
