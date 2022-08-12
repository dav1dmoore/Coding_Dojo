package com.moore.savetravels.services;

import java.util.List;
import java.util.Optional;

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
	
	public void updateExpense(Expense expense) {
		expenseRepository.save(expense);
	}
	
	public Expense findExpenseById(Long id) {
		Optional<Expense> currentExpense = expenseRepository.findById(id);
        if(currentExpense.isPresent()) {
            return currentExpense.get();
        } else {
            return null;
        }
	}
	
	public void deleteById(Long id) {
		expenseRepository.deleteById(id);
	}
	
	
}
