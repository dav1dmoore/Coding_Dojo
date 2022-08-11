package com.moore.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.moore.mvc.models.Book;
import com.moore.mvc.repositories.BookRepository;

@Service
public class BookService {
 // adding the book repository as a dependency
	private final BookRepository bookRepository;
 
	 public BookService(BookRepository bookRepository) {
	     this.bookRepository = bookRepository;
	 }
	 
	 // returns all the books
	 public List<Book> allBooks() {
	     return bookRepository.findAll();
	 }
	 
	 // creates a book
	 public Book createBook(Book b) {
	     return bookRepository.save(b);
	 }
	 
	 // retrieves a book
	 public Book findBook(Long id) {
	     Optional<Book> optionalBook = bookRepository.findById(id);
	     if(optionalBook.isPresent()) {
	         return optionalBook.get();
	     } else {
	         return null;
	     }
	 }
	 
	 // Deletes a book
	 public void deleteBook(Long id) {
		 bookRepository.deleteById(id);
	 }

	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		// TODO Auto-generated method stub
		Book updateBook = this.findBook(id);
		updateBook.setTitle(title);
		updateBook.setDescription(desc);
		updateBook.setLanguage(lang);
		updateBook.setNumberOfPages(numOfPages);
		return bookRepository.save(updateBook);
	}
}

