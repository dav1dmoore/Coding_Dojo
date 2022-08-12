package com.moore.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.moore.savetravels.models.Expense;
import com.moore.savetravels.services.ExpenseService;

@Controller
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping("/expense")
	public String expenses(@ModelAttribute("expense") Expense expense, Model model) {
		List<Expense> expenses = expenseService.findAll();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	
	@PostMapping("/expense/create")
	public String createExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("expenses", expenseService.findAll());
			return "index.jsp";
		} else {
			expenseService.save(expense);
			return "redirect:/expense";
		}
	}
	
	@GetMapping("/expense/edit/{id}")
	public String displayExpense(@PathVariable("id") Long id,
									Model model ) {
		Expense getExpense = expenseService.findExpenseById(id);
		model.addAttribute("expense", getExpense);
		return "edit.jsp";
	}
	
	@PutMapping("/expense/edit/{id}")
	public String updateExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if(result.hasErrors()) {
			return "edit.jsp";
		} else {
			expenseService.updateExpense(expense);
			return "redirect:/expense";
		}
	}
	
	@DeleteMapping("/expense/delete/{id}")
	public String deleteExpense(@PathVariable("id") Long id) {
		expenseService.deleteById(id);
		return "redirect:/expense";
	}
	
	@GetMapping("/expense/{id}")
	public String showExpense(@PathVariable("id") Long id,
									Model model ) {
		Expense getExpense = expenseService.findExpenseById(id);
		model.addAttribute("expense", getExpense);
		return "expenseDetails.jsp";
	}
	
}
