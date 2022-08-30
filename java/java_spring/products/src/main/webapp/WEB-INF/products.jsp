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
<title>New Product</title>
</head>
<body>
<h1>New Product</h1>
	<a href="/home">Home</a>
	<form:form action="/products/create" method="POST" modelAttribute="newProduct">
	        <div>
               <form:label path="name">
                   Name:
               </form:label>
               <form:input type="text" path="name"/>
               <form:errors path="name" />
           </div>
           <div>
               <form:label path="description">
                   Description:
               </form:label>
               <form:input type="text" path="description"/>
               <form:errors path="description" />
           </div>
           <div>
               <form:label path="price">
                   Price:
               </form:label>
               <form:input type="number" path="price" step="0.01"/>
               <form:errors path="price" />
           </div>
           <button type="submit">
               Submit
           </button>
       </form:form>
</body>
</html>