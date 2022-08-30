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
<title>Create a Task</title>
</head>
<body>
<h1><c:out value="${course.name}"></c:out></h1>
<form:form action="/course/${course.id}/edit" method="POST" modelAttribute="course">
	        <input type="hidden" name="_method" value="put">
	        <div>
               <form:label path="name">
                   Name:
               </form:label>
               <form:input type="text" path="name"/>
               <form:errors path="name" />
           </div>
           <div>
               <form:label path="day">
                   Day of Week:
               </form:label>
               <form:input type="text" path="day"/>
               <form:errors path="day" />
           </div>
           <div>
               <form:label path="amount">
                   Drop-in Price:
               </form:label>
               <form:input type="number" path="amount" step="5.0"/>
               <form:errors path="amount" />
           </div>
           <div>
               <form:label path="time">
                   Time:
               </form:label>
               <form:input type="time" path="time" step="5.0"/>
               <form:errors path="time" />
           </div>
           <div>
               <form:label path="description">
                   Description:
               </form:label>
               <form:textarea type="text" path="description"/>
               <form:errors path="description" />
           </div>
           <form:hidden path="user" value="${userId}"></form:hidden>
           <button type="submit">
               Submit
           </button>
       </form:form>
       <form action="/course/${course.id}/delete" method="post">
			    <input type="hidden" name="_method" value="delete">
			    <input type="submit" value="Delete">
		</form>
       <a href="/home">Cancel</a>
</body>
</html>