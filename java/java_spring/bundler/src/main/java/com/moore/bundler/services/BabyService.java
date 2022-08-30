package com.moore.bundler.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.moore.bundler.models.Baby;
import com.moore.bundler.repositories.BabyRepository;

@Service
public class BabyService {

		@Autowired
		private BabyRepository babyRepo;
		
	    public Baby addBaby(Baby newBaby, BindingResult result) {
			Optional<Baby> potentialBaby = babyRepo.findByName(newBaby.getName());
			if(potentialBaby.isPresent()) {
			    result.rejectValue("name", "Matches", "This name is already in use");
			}
			if(!result.hasErrors()) {
				return babyRepo.save(newBaby);
			}
	        return null;
	    }
	    
	    public List<Baby> allBabies(){
	    	return babyRepo.findAll();
	    }
	    
	    public Baby oneBaby(Long id) {
	    	return babyRepo.findBabyById(id);
	    }
	    
	    public void updateBaby(Baby baby) {
	    	babyRepo.save(baby);
	    }
	    public void	deleteById(Long id) {
	    	babyRepo.deleteById(id);
	    }
}
