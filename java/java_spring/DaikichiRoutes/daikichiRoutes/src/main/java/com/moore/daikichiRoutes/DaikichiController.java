package com.moore.daikichiRoutes;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication

@RestController
public class DaikichiController {
        @RequestMapping("/daikichi")
        public String hello() {
                return "Welcome!";
        }
        
        @RequestMapping("/daikichi/today")
        public String today() {
                return "Today you will find luck in all your endeavors!";
        }
        
        @RequestMapping("/daikichi/tomorrow")
        public String tomorrow() {
                return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
        }
        
        @RequestMapping("/daikichi/{time}")
        public String tomorrow(@PathVariable("time") String timeStr){
                return "Tomorrow " + timeStr + ", an opportunity will arise, so be sure to be open to new ideas!";
        }
        
        @RequestMapping("/daikichi/greeting/{name}")
        public String hello(@PathVariable("name") String name){
                return "Welcome, " + name + "!";
        }
        
        @RequestMapping("/daikichi/travel/{city}")
        public String congrats(@PathVariable("city") String city){
                return "Congratulations! You will soon travel to " + city + "!";
        }
        
        @RequestMapping("/daikichi/lotto/{num}")
        public String congrats(@PathVariable("num") int num){
        	if(num%2 == 0) {
        		return "You will take a grand journey in the near future, but be weary of temping offers.";
        	} return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
        }
        
        
        


}
