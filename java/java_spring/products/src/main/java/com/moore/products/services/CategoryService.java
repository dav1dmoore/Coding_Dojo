package com.moore.products.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.products.models.Category;
import com.moore.products.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public Category createCategory(Category category) {
		return categoryRepository.save(category);
	}
	
	public List<Category> allCategory(){
		return categoryRepository.findAll();
	}
	
	public Category getCategory(Long id) {
		return categoryRepository.findCategoryById(id);
	}
}
