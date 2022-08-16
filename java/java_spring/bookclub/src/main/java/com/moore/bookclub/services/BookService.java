package com.moore.bookclub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.bookclub.models.Book;
import com.moore.bookclub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepo;
	@Autowired
	private UserService userServ;
	
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
	
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	public Book getOne(Long id) {
		return bookRepo.findBookById(id);
	}
	
	public void updateBook(Book book) {
		bookRepo.save(book);
	}

}
