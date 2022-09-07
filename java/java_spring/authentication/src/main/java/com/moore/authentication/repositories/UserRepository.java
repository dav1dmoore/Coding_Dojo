package com.moore.authentication.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.authentication.models.User;

//.. imports .. //

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
 
 Optional<User> findByEmail(String email);
 Optional<User> findById(Long id);
 User save (User user);
 
}
