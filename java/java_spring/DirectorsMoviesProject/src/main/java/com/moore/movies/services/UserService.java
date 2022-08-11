package com.moore.movies.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.moore.movies.models.User;
import com.moore.movies.repositories.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public User findUserLogin( String userName, String password) {
		List<User> users = userRepository.findByUserNameAndPassword(userName, password);
		if(users.isEmpty()) {
			return null;
		} else {
			return users.get(0);
		}
	}
	
	public User saveUser( User newUser ) {
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
}
