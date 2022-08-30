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
<title>Create a Tasks</title>
</head>
<body>
<h1><c:out value="${baby.name}"></c:out></h1>
<h1>(added by <c:out value="${baby.user.userName}"></c:out>)</h1>
<p>Gender: <c:out value="${baby.gender}"></c:out></p>
<p>Origin: <c:out value="${baby.origin}"></c:out></p>
	<c:choose>
	    <c:when test="${baby.users.contains(user)}">
			<h1>You voted for this baby name!</h1>
	    </c:when>    
	    <c:otherwise>
			<form action="/addVote" method="POST">
           		<input type="hidden" name="babyId" value="${baby.id}"/>
           		<button type="submit">
               		UPVOTE!
           		</button>
       		</form>

		</c:otherwise>
	</c:choose>
<p>Meaning: <c:out value="${baby.description}"></c:out></p>
	<c:choose>
	    <c:when test="${baby.user.id == userId}">
			<p><a href="/names/edit/${baby.id}">Edit</a></p>
	    </c:when>    
	</c:choose>
</body>
</html>