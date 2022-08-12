<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    

<!DOCTYPE html>
<html>
	<head>
	<meta charset="ISO-8859-1">
	<title>Edit Movie</title>
	</head>
	<body>
		<h1>Fill up the information of the new movie!</h1>
		<form:form action="/" method="" modelAttribute="movies">
		<input type="hidden" name="_method" value="put">
			<div>
			<form:label path="title">
			Title:
			</form:label>
			<form:input type="text" path="title"/>
			<form:errors path="title"/>
			</div>
			<div>
			<form:label path="description">
			Title:
			</form:label>
			<form:input type="text" path="description"/>
			<form:errors path="description"/>
			</div>
			<button type="submit">Edit Movie</button>
		</form:form>
		
	</body>
</html>