package com.moore.movies.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.moore.movies.models.User;
import com.moore.movies.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User findUserLogin( String userName, String password, RedirectAttributes redirectAttributes) {
		List<User> users = userRepository.findByUserNameAndPassword(userName, password);
		if(userList.isEmpty())) {
			redirectAttributes.addFlashAttribute("errorLogin", "Wrong credentials!");
			return null;
		} else {
			User currentUser = userList.get[0];
			if(BCrypt.checkpw(password, currentUser.getPassword())) {
				return userList.get[0];
			} else {
				redirectAttributes.addAttribute( "errorLogin", "Your password is incorrect!");
			}
			return users.get(0);
		}
	}
	
	public User saveUser( User newUser ) {
		String hashedPassword = BCrypt.haspw(user.getPassword(), BCrypt.gensalt());
		user.setPassword( hashedPassword );
		return userRepository.save(newUser);
	}
	
	public User findUserById(Long id) {
		Optional<User> currentUser = userRepository.findById(id);
        if(currentUser.isPresent()) {
            return currentUser.get();
        } else {
            return null;
        }
	}
	
	public void deleteById(Long id) {
		userRepository.deleteById(id);
	}
	
	public Boolean validateSession(HttpSession session) {
		String userId = (String)session.getAttribute("userId");
		System.out.println("UserId = " + userId);
		if(userId) {
			return true;
		} else {
			return false;
		}
	}
}
