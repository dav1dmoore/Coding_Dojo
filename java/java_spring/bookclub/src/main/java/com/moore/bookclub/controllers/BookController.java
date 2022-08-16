package com.moore.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.moore.bookclub.models.Book;
import com.moore.bookclub.services.BookService;
import com.moore.bookclub.services.UserService;

@Controller
public class BookController {
	@Autowired
	private UserService userServ;
	
	@Autowired
	private BookService bookServ;
	
	 
	 @GetMapping("/book/create")
	 public String newBook(Model model) {
	 
	     // Bind empty User and LoginUser objects to the JSP
	     // to capture the form input
	     model.addAttribute("newBook", new Book());
	     return "addBook.jsp";
	 }
	 
	 @GetMapping("/shelves")
	 public String logout() {
		return "redirect:/home";
	 }
	 
	 @GetMapping("/book/{id}")
	 public String dashboard(@PathVariable("id") Long id, Model model, HttpSession session) {
		 
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		model.addAttribute("book", bookServ.getOne(id));
		return "details.jsp";
	 }
	 
	 @GetMapping("/book/{id}/edit")
	 public String editBook(@PathVariable("id") Long id, Model model, HttpSession session) {
		 
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		model.addAttribute("book", bookServ.getOne(id));
		return "editBook.jsp";
	 }
	 
	@PostMapping("/createBook")
	public String bookCreate(@Valid @ModelAttribute("newBook") Book book, BindingResult result, Model model, HttpSession session) {
		if (session.getAttribute("userId") == null ) {
			return "redirect:/";
		}
		
		if(result.hasErrors()) {
			return "addBook.jsp";
		} else {
			bookServ.createBook(book);
			return "redirect:/home";
		}
	}
	 
	@PutMapping("/book/{id}/edit")
	public String updateBook(@PathVariable("id") Long id, @Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
		if(result.hasErrors()) {

			return "editBook.jsp";
		} else {
			bookServ.updateBook(book);
			return "redirect:/book/{id}";
		}
	}
}
