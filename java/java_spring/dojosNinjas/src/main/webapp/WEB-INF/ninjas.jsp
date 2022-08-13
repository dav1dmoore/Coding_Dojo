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
<title>New Ninja</title>
</head>
<body>
<h1>New Ninja</h1>
		<form:form action="/ninjas/create" method="POST" modelAttribute="ninja">
	        <div>
	              <form:label path="dojo">
	                  Dojo:
	              </form:label>
	              <form:select path="dojo" id="dojo">
	              	<c:forEach var="dojo" items="${dojos}">
					  <form:option value="${dojo.id}">${dojo.name}</form:option>
					</c:forEach>
				  </form:select>
	              <form:errors path="dojo" />
	          </div>
	          <div>
	              <form:label path="firstName">
	                  First Name:
	              </form:label>
	              <form:input type="text" path="firstName"/>
	              <form:errors path="firstName" />
	          </div>
	          <div>
	              <form:label path="lastName">
	                  Last Name:
	              </form:label>
	              <form:input type="text" path="lastName"/>
	              <form:errors path="lastName" />
	          </div>
	          <div>
	              <form:label path="age">
	                  Age:
	              </form:label>
	              <form:input type="number" path="age"/>
	              <form:errors path="age" />
	          </div>
	          
	          <button type="submit">
	              Create
	          </button>
	   </form:form>
	
</body>
</html>