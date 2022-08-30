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
<title>Product Page</title>
</head>
<body>
<h1><c:out value="${product.name}"></c:out></h1>
	<a href="/home">Home</a>
<h1>Categories:</h1>
	<c:forEach var="category" items="${productCat}">
	<c:out value="${category.name}"/>
	</c:forEach>
<h1>Add Category:</h1>
		<form action="/products/addCategory" method="POST">
		<input type="hidden" name="productId" value="${product.id}" />
	        <div>
              <select name="categoryId">
              	<c:forEach var="category" items="${productNoCat}">
				  <option value="${category.id}"><c:out value="${category.name}"/></option>
				</c:forEach>
			  </select>
	        </div>
	        <button type="submit">
	              Add
	        </button>
	     </form>
</body>
</html>
