package com.moore.yoga.services;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.moore.bundler.repositories.BabyRepository;
import com.moore.yoga.models.LoginUser;
import com.moore.yoga.models.User;
import com.moore.yoga.repositories.UserRepository;
    
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;
    
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
        // TO-DO: Additional validations!
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
		    result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
		}
		Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
		if(potentialUser.isPresent()) {
		    result.rejectValue("email", "Matches", "This email is already in use");
		}
		if(!result.hasErrors()) {
			String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setPassword(hashed);
			return userRepo.save(newUser);
		}
        return null;
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
        // TO-DO: Additional validations!
	      Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$");
	      Matcher emailCheck = emailRegex.matcher(newLogin.getEmail());
	      boolean b = emailCheck.matches();
	      if (!b) {
	          if(newLogin.getEmail() == "") {
	          } else
	              result.rejectValue("email", "InvalidEmail", "The Email provided needs to be properly structured!");
	      }
	      
    	Optional<User> currentUser = userRepo.findByEmail(newLogin.getEmail());
		if(!currentUser.isPresent()) {
		    result.rejectValue("email", "Matches", "This email does not match users in our system, try again");
		    return null;
		}
  	
		
    	User user = currentUser.get();
    	if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
    	    result.rejectValue("password", "Matches", "Invalid Password!");
    	    return null;
    	}
        return user;
    }
    
    public Optional<User> potentialUser(String email) {
    	return userRepo.findByEmail(email);
    }
    
	public User findUserById(Long id) {
		Optional<User> currentUser = userRepo.findById(id);
        if(currentUser.isPresent()) {
            return currentUser.get();
        } else {
            return null;
        }
	}
    
}
