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
<title>Project Manager Dashboard</title>
</head>
<body>
	<h1>Hello, ${userName}. Here are some suggestions.</h1>
	<a href="/logout">logout</a>
	<h2>Baby Names</h2>
		<table>
		<tbody>
			<c:forEach var="baby" items="${babies}">
			<tr>
			<td>
			<c:choose>
			    <c:when test="${baby.users.contains(user)}">
					
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
			</td>
			<td><a href="/names/${baby.id}"><c:out value="${baby.name}"/></a></td>
			<td><c:out value="${baby.gender}"/></td>
			<td><c:out value="${baby.origin}"/></td>
			<td><c:out value="${baby.users.size()}"/></td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
		<a href="/names/new">New Name</a>
</body>
</html>