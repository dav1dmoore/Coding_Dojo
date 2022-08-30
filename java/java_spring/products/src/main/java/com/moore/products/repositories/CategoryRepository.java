package com.moore.products.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.products.models.Category;
import com.moore.products.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	@SuppressWarnings("unchecked")
	Category save(Category category);
	List<Category> findAll();
	Category findCategoryById(Long Id);
	
	// Retrieves a list of all categories for a particular product
    List<Category> findAllByProducts(Product product);
    
    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);

}

