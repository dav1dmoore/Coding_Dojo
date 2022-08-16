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
<title>Book Share</title>
</head>
<body>
<h1>Add a Book to Your Shelf!</h1>
<a href="/shelves">back to the shelves</a>
<form:form action="/createBook" method="POST" modelAttribute="newBook">
	        <div>
               <form:label path="title">
                   Title:
               </form:label>
               <form:input type="text" path="title"/>
               <form:errors path="title" />
           </div>
           <div>
               <form:label path="author">
                   Author:
               </form:label>
               <form:input type="text" path="author"/>
               <form:errors path="author" />
           </div>
           <div>
               <form:label path="thoughts">
                   My Thoughts:
               </form:label>
               <form:textarea type="text" path="thoughts"/>
               <form:errors path="thoughts" />
           </div>
           <form:hidden path="user" value="${userId}"></form:hidden>
           <button type="submit">
               Submit
           </button>
       </form:form>
</body>
</html>