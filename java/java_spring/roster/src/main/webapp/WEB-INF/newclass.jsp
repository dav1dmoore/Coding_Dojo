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
<title>New Class</title>
</head>
<body>
<h1>New Class</h1>
<a href="/home">Dashboard</a>
<form:form action="/createCourse" method="POST" modelAttribute="newCourse">
	        <div>
               <form:label path="name">
                   Name:
               </form:label>
               <form:input type="text" path="name"/>
               <form:errors path="name" />
           </div>
           <button type="submit">
               Add
           </button>
       </form:form>

</body>
</html>