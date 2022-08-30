package com.moore.products.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.moore.products.models.Category;
import com.moore.products.models.Product;
import com.moore.products.services.CategoryService;
import com.moore.products.services.ProductService;

@Controller
public class MainController {
	
	@Autowired
	private CategoryService categoryServ;
	
	@Autowired
	private ProductService productServ;
	
	 @GetMapping("/")
	 public String index() {
	     return "index.jsp";
	 }
	 
	 @GetMapping("/home")
	 public String home() {
	     return "index.jsp";
	 }
	 
	 @GetMapping("/categories/new")
	 public String categoriesNew(Model model){
	     model.addAttribute("newCategory", new Category());
		 return "categories.jsp";
	 }
	 
	@PostMapping("/categories/create")
	public String categoryCreate(@Valid @ModelAttribute("newCategory") Category category, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "categories.jsp";
		} else {
			categoryServ.createCategory(category);
			return "redirect:/home";
		}
	}
	
	 @GetMapping("/products/new")
	 public String productsNew(Model model){
	     model.addAttribute("newProduct", new Product());
		 return "products.jsp";
	 }
	 
	@PostMapping("/products/create")
	public String productCreate(@Valid @ModelAttribute("newProduct") Product product, BindingResult result) {
		if(result.hasErrors()) {
			return "products.jsp";
		} else {
			productServ.createProduct(product);
			return "redirect:/home";
		}
	}
	
	 @GetMapping("/products/{id}")	
	 public String productSingle(@PathVariable("id") Long id, Model model) {
		 Product thisProduct = productServ.getProduct(id);
		 model.addAttribute("product", thisProduct);
		 model.addAttribute("productCat", productServ.categorieByProduct(thisProduct));
		 model.addAttribute("productNoCat", productServ.categorieNotPresent(thisProduct));
		return "singleproduct.jsp";
	 }
	 
	@PostMapping("/products/addCategory")
	public String productAddCategory(@RequestParam("productId") Long productId, @RequestParam("categoryId") Long categoryId){
		productServ.addProductToCategory(categoryId, productId);
		return "redirect:/products/" + productId;
		}
	
	 @GetMapping("/categories/{id}")	
	 public String categorySingle(@PathVariable("id") Long id, Model model) {
		 Category thisCategory = categoryServ.getCategory(id);
		 model.addAttribute("category", thisCategory);
		 model.addAttribute("productsInCat", productServ.findAllByCategories(thisCategory));
		 model.addAttribute("productNoCat", productServ.productsNotPresent(thisCategory));
		return "singlecategory.jsp";
	 }
	 
	@PostMapping("/categories/addProduct")
	public String categoryAddProduct(@RequestParam("categoryId") Long categoryId, @RequestParam("productId") Long productId){
		productServ.addProductToCategory(categoryId, productId);
		return "redirect:/categories/" + categoryId;
		}
}

