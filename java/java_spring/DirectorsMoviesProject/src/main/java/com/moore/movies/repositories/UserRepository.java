package com.moore.movies.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.movies.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findByUserNameAndPassword( String userName, String password );
	
	Optional<User> findById(Long id);
	void deleteById(Long id);
	
//	@SupressWarnings("unchecked");
	User save (User user);
	
	//Query for personal user information
}

