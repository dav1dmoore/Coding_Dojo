package com.moore.bundler.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.bundler.models.Baby;

@Repository
public interface BabyRepository extends CrudRepository<Baby, Long>{
	Optional<Baby> findByName(String name);
	List<Baby> findAll();
	Baby findBabyById(Long id);
}
