package com.moore.dojosninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.dojosninjas.models.Ninja;
import com.moore.dojosninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	@Autowired
	private NinjaRepository ninjaRepository;
	
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepository.save(ninja);
	}
	
	public List<Ninja> ninjas(){
		return ninjaRepository.findAll();
	}
	
	public List<Ninja> ninjasByDojo(Long id){
		return ninjaRepository.findAllByDojoId(id);
	}
}
