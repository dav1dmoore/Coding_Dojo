package com.moore.savetravels.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.moore.savetravels.models.Expense;
import com.moore.savetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	private final ExpenseRepository expenseRepository;
	
	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}
	
	public List<Expense> findAll() {
		return expenseRepository.findAll();
	}
	
	public Expense save(Expense expense) {
		return expenseRepository.save(expense);
	}
	
	
}
