package com.moore.products.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.products.models.Category;
import com.moore.products.models.Product;
import com.moore.products.repositories.CategoryRepository;
import com.moore.products.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private CategoryService categoryService;
	
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}
	
	public List<Product> allProducts(){
		return productRepository.findAll();
	}
	
	public Product getProduct(Long id) {
		return productRepository.findProductById(id);
	}
	
	public List<Category> categorieByProduct(Product product){
		return categoryRepository.findAllByProducts(product);
	}
	
	public List<Category> categorieNotPresent(Product product){
		return categoryRepository.findByProductsNotContains(product);
	}
	
	public List<Product> findAllByCategories(Category category){
		return productRepository.findAllByCategories(category);
	}
	
	//Maybe issues
	public List<Product> productsNotPresent(Category category){
		return productRepository.findByCategoriesNotContains(category);
	}
	
    public void addProductToCategory(Long categoryId, Long productId) {
	    // retrieve an instance of a category using another method in the service.
	    Category thisCategory = categoryService.getCategory(categoryId);
	    
	    // retrieve an instance of a product using another method in the service.
	    Product thisProduct = productRepository.findProductById(productId);
	    
	    // add the category to this product's list of products
	    thisProduct.getCategories().add(thisCategory);
	    
	    // Save thisProduct, since you made changes to its category list.
	    productRepository.save(thisProduct);	
    }

}
