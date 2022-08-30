package com.moore.products.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.moore.products.models.Category;
import com.moore.products.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
	@SuppressWarnings("unchecked")
	Product save(Product product);
	List<Product> findAll();
	Product findProductById(Long Id);
    List<Product> findAllByCategories(Category category);
//    List<Category> findByProductsNotContains(Product product);
  List<Product> findByCategoriesNotContains(Category category);
}
