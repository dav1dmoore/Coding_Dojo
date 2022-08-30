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
	<h1>${lastName}, ${firstName}.</h1>
	<a href="/logout">logout</a>
	<p>Course Schedule</p>
	<table>
		<thead>
			<tr>
			    <th>Class Name</th>
			    <th>Instructor</th>
			    <th>Weekday</th>
			    <th>Price</th>
			    <th>Time</th>
	  		</tr>
		</thead>
		<tbody>
			<c:forEach var="course" items="${courses}">
			<tr>
			<td><a href="/course/${course.id}"><c:out value="${course.name}"/></a>
			<c:choose>
			    <c:when test="${course.user.id == userId}">
					<a href="/course/${course.id}/edit">Edit</a>
			    </c:when>    
			</c:choose>
			</td>
			<td><c:out value="${course.user.firstName}"/></td>
			<td><c:out value="${course.day}"/></td>
			<td><c:out value="${course.formatAmount()}"/></td>
			<td><c:out value="${course.time}"/></td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/course/create">+ new course</a>
</body>
</html>