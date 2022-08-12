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
<title>Read Share</title>
</head>
<body>
	<h1>Save Travels</h1>
	<table>
		<thead>
			<tr>
			    <th>Expense</th>
			    <th>Vendor</th>
			    <th>Amount</th>
			    <th>Actions</th>
	  		</tr>
		</thead>
		<tbody>
			<c:forEach var="expense" items="${expenses}">
			<tr>
			<td><a href="/expense/${expense.id}"><c:out value="${expense.expenseName}"/></a></td>
			<td><c:out value="${expense.vendorName}"/></td>
			<td><c:out value="${expense.formatAmount()}"/></td>
			<td><a href="/expense/edit/${expense.id}">edit</a>
				<form action="/expense/delete/${expense.id}" method="post">
				    <input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
				</form>
			</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<form:form action="/expense/create" method="POST" modelAttribute="expense">
	        <div>
               <form:label path="expenseName">
                   Expense Name:
               </form:label> 
               <form:input type="text" path="expenseName"/>
               <form:errors path="expenseName" />
           </div>
           <div>
               <form:label path="vendorName">
                   Vendor:
               </form:label>
               <form:input type="text" path="vendorName"/>
               <form:errors path="vendorName" />
           </div>
           <div>
               <form:label path="amount">
                   Amount:
               </form:label>
               <form:input type="number" path="amount" step="0.01"/>
               <form:errors path="amount" />
           </div>
           <div>
               <form:label path="description">
                   Description:
               </form:label>
               <form:textarea type="text" path="description"/>
               <form:errors path="description" />
           </div>
           <button type="submit">
               Submit
           </button>
       </form:form>

</body>
</html>