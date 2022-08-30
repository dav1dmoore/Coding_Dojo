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
<title>cREATE A TASK</title>
</head>
<body>
<h1>Change <c:out value="${baby.name}"></c:out></h1>
<form:form action="/babyedit/${baby.id}" method="POST" modelAttribute="baby">
	        <input type="hidden" name="_method" value="put">
			<form:hidden path="name" value="${baby.name}"></form:hidden>
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
       <form action="/baby/${baby.id}/delete" method="post">
			    <input type="hidden" name="_method" value="delete">
			    <input type="submit" value="Delete">
		</form>
       <a href="/home">Cancel</a>
</body>
</html>