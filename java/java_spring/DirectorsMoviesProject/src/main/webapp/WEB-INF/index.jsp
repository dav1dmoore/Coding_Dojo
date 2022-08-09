<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Login to the Directors and Movies Application</h1>
	<form action="/submitForm" method="POST" >
           <div>
               <label for="userName">
                   Username:
               </label>
               <input type="text" id="userName" name="userName"/>
           </div>
           <div>
               <label for="password">
                   Password:
               </label>
               <input type="text" id="password" name="password"/>
           </div>
           <div class="errorMessage">
           	<c:out value="${errorLogin}"/>
           </div>
           <button type="submit">
               Login
           </button>
       </form>
</body>
</html>