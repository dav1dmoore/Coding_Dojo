<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Update User</h1>
	<form:form action="/user/${user.id}/edit" method="POST" modelAttribute="user">
			<input type="hidden" name="_method" value="put">
	        <div>
               <form:label path="firstName">
                   First Name:
               </form:label>
               <form:input type="text" path="firstName" value="${user.getFirstName()}" />
               <form:errors path="firstName" />
           </div>
           <div>
               <form:label path="lastName">
                   Last Name:
               </form:label>
               <form:input type="text" path="lastName" value="${user.getLastName()}"/>
               <form:errors path="lastName" />
           </div>
           <div>
               <form:label path="userName">
                   Username:
               </form:label>
               <form:input type="text" path="userName" value="${user.getUserName()}" />
               <form:errors path="userName" />
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="password" path="password" value="${user.getPassword()}" />
               <form:errors path="password" />
           </div>
           <button type="submit">
               Update
           </button>
       </form:form>
</body>
</html>