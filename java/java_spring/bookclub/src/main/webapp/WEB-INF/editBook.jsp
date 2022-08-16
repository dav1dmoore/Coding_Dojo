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
<title>Book Share</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body class="bg-secondary">
	<div class="w-75 p-3">
		<div class="d-flex justify-content-between">
			<h1 class="my-2 px-5">Change your Entry</h1>
			<a href="/shelves">back to the shelves</a>
		</div>
	</div>
	<div class="ms-5 pt-3">
		<form:form action="/book/${id}/edit" method="POST" modelAttribute="book">
					<input type="hidden" name="_method" value="put">
			        <div>
		               <form:label path="title" class="me-5 pb-3">
		                   Title:
		               </form:label> 
		               <form:input type="text" path="title"/>
		               <form:errors path="title" class="d-block text-danger"/>
		           </div>
		           <div>
		               <form:label path="author" class="me-4 pb-3">
		                   Author:
		               </form:label>
		               <form:input type="text" path="author"/>
		               <form:errors path="author" class="d-block text-danger"/>
		           </div>
		           <div>
		               <form:label path="thoughts">
		                   My thoughts:
		               </form:label>
		               <form:textarea type="text" path="thoughts" cols="40" rows="3"/>
		               <form:errors path="thoughts" class="d-block text-danger"/>
		           </div>
		           <form:hidden path="user" value="${userId}"></form:hidden>
		           <button type="submit" class="mt-3 btn btn-info">
		               Submit
		           </button>
		       </form:form>
	</div>
</body>
</html>