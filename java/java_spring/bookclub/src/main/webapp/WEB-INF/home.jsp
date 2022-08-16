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
<meta charset="UTF-8">
<title>Read Share</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
	<div class="w-75 p-3">
		<div class="d-flex justify-content-between">
			<h1>Welcome, ${userName} and ${userId}!</h1>
			<a href="/logout">logout</a>
		</div>
		<div class="d-flex justify-content-between">
			<p>Books from everyone's shelves:</p>
			<a href="/book/create">+ Add a book to my shelf!</a>
		</div>
	</div>
	<div class="w-75 p-3">
		<table class="table border-dark mx-5 table-striped">
			<thead class="table-light">
				<tr>
				    <th>Id</th>
				    <th>Title</th>
				    <th>Author Name</th>
				    <th>Posted By</th>
		  		</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
				<tr>
				<td><c:out value="${book.id}"/></td>
				<td><a href="/book/${book.id}"><c:out value="${book.title}"/></a></td>
				<td><c:out value="${book.author}"/></td>
				<td><c:out value="${book.user.userName}"/></td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>