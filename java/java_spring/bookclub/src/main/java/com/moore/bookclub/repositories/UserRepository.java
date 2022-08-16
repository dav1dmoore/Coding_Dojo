package com.moore.bookclub.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.bookclub.models.User;

//.. imports .. //

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
 List<User> findAll();
 Optional<User> findByEmail(String email);
 Optional<User> findById(Long id);
 User save (User user);
 
}

