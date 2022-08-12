<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Show Expense</title>
</head>
	<body>
	<h1>Edit Expense</h1>
	<a href="/expense">Go Back</a>
	<br />
	<table>
		<tr>
			<td>Expense Name:</td>
			<td>${expense.expenseName}</td>
		</tr>
		<tr>
			<td>Expense Description:</td>
			<td>${expense.description}</td>
		</tr>
		<tr>
			<td>Vendor:</td>
			<td>${expense.vendorName}</td>
		</tr>
		<tr>
			<td>Amount Spent:</td>
			<td>${expense.formatAmount()}</td>
		</tr>
	</table>
	</body>
</html>