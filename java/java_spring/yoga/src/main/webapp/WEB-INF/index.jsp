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
<title>Project Manager</title>
</head>
<body>
	<h1>Course Platform - Instructors</h1>
	<h2>Join our growing community!</h2>
	<h1>New Instructor</h1>
		<form:form action="/register" method="POST" modelAttribute="newUser">
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
               <form:label path="email">
                   Email:
               </form:label>
               <form:input type="text" path="email"/>
               <form:errors path="email" />
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="password" path="password"/>
               <form:errors path="password" />
           </div>
           <div>
               <form:label path="confirm">
                   Confirm PW:
               </form:label>
               <form:input type="password" path="confirm"/>
               <form:errors path="confirm" />
           </div>
           <button type="submit">
               Register
           </button>
       </form:form>
       <h1>Log In</h1>
       		<form:form action="/login" method="POST" modelAttribute="newLogin">
	        <div>
               <form:label path="email">
                   Email:
               </form:label>
               <form:input type="text" path="email"/>
               <form:errors path="email" />
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="password" path="password"/>
               <form:errors path="password" />
           </div>
           <button type="submit">
               Login
           </button>
       </form:form>
</body>
</html>