package com.moore.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.moore.bookclub.models.Book;

public interface BookRepository extends CrudRepository<Book, Long>{
	List<Book> findAll();
	Book save(Book book);
	List<Book> findAllByUserId(Long Id);
	Book findBookById(Long Id);
}
