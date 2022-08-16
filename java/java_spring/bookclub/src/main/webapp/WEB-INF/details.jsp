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
<title>Read Shore</title>
</head>
<body>
<h1>${book.title}</h1>
<a href="/shelves">back to the shelves</a>
<c:choose>
    <c:when test="${book.user.id == userId}">
       <h2>You read ${book.title} by ${book.author}</h2>
       <h2>Here are your thoughts:</h2>
    </c:when>    
    <c:otherwise>
      <h2>${book.user.userName} read ${book.title} by ${book.author}</h2>
	  <h2>Here are ${book.user.userName}'s thoughts:</h2>
    </c:otherwise>
</c:choose>
<p>${book.thoughts}</p>
<c:choose>
    <c:when test="${book.user.id == userId}">
		<a href="/book/${book.id}/edit">Edit</a>
    </c:when>    
</c:choose>


</body>
</html>