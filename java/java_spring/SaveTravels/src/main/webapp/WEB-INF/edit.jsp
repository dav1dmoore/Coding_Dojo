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
<title>Edit My Task</title>
</head>
<body>
	<h1>Edit Expense</h1>
	<a href="/expense">Go Back</a>
	<br />
	<form:form action="/expense/edit/${id}" method="POST" modelAttribute="expense">
			<input type="hidden" name="_method" value="put">
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