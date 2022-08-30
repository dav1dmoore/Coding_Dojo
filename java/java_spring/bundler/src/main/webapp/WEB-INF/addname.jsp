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
<title>Create a Name</title>
</head>
<body>
<h1>Add a name!</h1>
<form:form action="/createName" method="POST" modelAttribute="newName">
	        <div>
               <form:label path="name">
                   Name:
               </form:label>
               <form:input type="text" path="name"/>
               <form:errors path="name" />
           </div>
           <div>
               <form:label path="gender">
                   Typical Gender:
               </form:label>
               <form:input type="text" path="gender"/>
               <form:errors path="gender" />
           </div>
           <div>
               <form:label path="origin">
                   Origin:
               </form:label>
               <form:input type="text" path="origin"/>
               <form:errors path="origin" />
           </div>
           <div>
               <form:label path="description">
                   Meaning:
               </form:label>
               <form:textarea type="text" path="description"/>
               <form:errors path="description" />
           </div>
           <form:hidden path="user" value="${userId}"></form:hidden>
           <button type="submit">
               Submit
           </button>
       </form:form>
       <a href="/home">Cancel</a>

</body>
</html>