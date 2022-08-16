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
<title>Login & Registration</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
<div id="header">
	<h1 class="text-warning">Book Club!</h1>
	<h3>A place for friends to share thoughts on books.</h3>
</div>
<div class="container text-left">
<div class="row">
	<div class="col">
	<h1>Register</h1>
		<form:form action="/register" method="POST" modelAttribute="newUser">
	        <div>
               <form:label path="userName">
                   User Name:
               </form:label>
               <form:input type="text" path="userName"/>
               <form:errors path="userName" class="d-block text-danger"/>
           </div>
           <div>
               <form:label path="email">
                   Email:
               </form:label>
               <form:input type="text" path="email"/>
               <form:errors path="email" class="d-block text-danger"/>
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="password" path="password"/>
               <form:errors path="password" class="d-block text-danger"/>
           </div>
           <div>
               <form:label path="confirm">
                   Confirm PW:
               </form:label>
               <form:input type="password" path="confirm"/>
               <form:errors path="confirm" class="d-block text-danger"/>
           </div>
           <button type="submit" class="btn btn-primary align-right">
               Submit
           </button>
       </form:form>
    </div>
    <div class="col">
       <h1>Log In</h1>
       		<form:form action="/login" method="POST" modelAttribute="newLogin">
	        <div>
               <form:label path="email">
                   User Name:
               </form:label>
               <form:input type="text" path="email"/>
               <form:errors path="email" class="d-block text-danger"/>
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="password" path="password"/>
               <form:errors path="password" class="d-block text-danger"/>
           </div>
           <button type="submit" class="btn btn-success">
               Submit
           </button>
       </form:form>
    </div>
   </div>
   </div>
 
</body>
</html>